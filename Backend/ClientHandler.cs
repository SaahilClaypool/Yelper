using System;
using System.Text;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Net.WebSockets; 
using Messages;
using System.IO;
using Google.Protobuf; 

namespace Yelper
{
    public class ClientHandler
    {
        WebSocket socket {get; set;}
        DataManager MyManager; 


        Object queryLock = new Object(); 

        System.DateTime lastQuery = System.DateTime.Now; 


        public ClientHandler(WebSocket socket)
        {
            this.socket = socket; 
            MyManager = new DataManager(); 
        }

        public void Send(Message message)
        {
            // message to json to byte array
            var messageSegment = new ArraySegment<Byte>(Encoding.UTF8.GetBytes(message.ToString()));

            socket.SendAsync(messageSegment, 
                            WebSocketMessageType.Text, 
                            true, 
                            System.Threading.CancellationToken.None);
        }

        public Message Receive ()
        {
            Console.WriteLine("Received Message");

            if (this.socket.State != WebSocketState.Open)
            {
                System.Console.WriteLine($"Socket is Closed with state: {this.socket.State}");
                return null;
            }

            int bufferSize = 1024 * 4; 
            byte[] buffer = new byte[bufferSize];
            int bytesRead = 0; 
            bool EOM = false; 

            while (!EOM)
            {
                ArraySegment<byte> bufferSegment = new ArraySegment<byte>(buffer, bytesRead, bufferSize - bytesRead);
                var resultTask = socket.ReceiveAsync(bufferSegment, System.Threading.CancellationToken.None);
                var result = resultTask.Result;
                EOM = result.EndOfMessage;
                bytesRead = result.Count; 
            }
            Console.WriteLine($"Read: {bytesRead}");
            
            return Message.Parser.ParseFrom(buffer.Take(bytesRead).ToArray()); 
        }

        public async Task Run()
        {
            System.Console.WriteLine("Received Connection");
            Poll(); 
            await HeartBeat(); 
        }

        public void Poll() 
        {
            System.Console.WriteLine("Polling");
            Task poller = new Task( () => {
                if (this.socket.State != WebSocketState.Open)
                {
                    System.Console.WriteLine("Waiting to connect");
                    System.Threading.Thread.Sleep(1000); 
                }

                while (this.socket.State == WebSocketState.Open)
                {
                    try 
                    {
                        var message = this.Receive(); 
                        this.HandleMessage(message); 
                    }

                    catch (Exception e){
                        if (this.socket.State != System.Net.WebSockets.WebSocketState.Open)
                        {
                            Console.WriteLine($"No Message:Status {this.socket.State}");
                            Console.WriteLine($"Error : {e.StackTrace}");
                            socket.Abort();
                            break;
                        }
                        else {
                            System.Console.WriteLine($"Error parsing message: {e.ToString()}");
                        }
                    }
                }
            });
            poller.Start(); 
        }

        public async Task HeartBeat ()
        {
            Task pinger = new Task( () => {
                Console.WriteLine($"HEARTBEAT Start");
                while(this.socket.State != WebSocketState.Closed)
                {
                    try{
                        Console.WriteLine($"PING");
                        this.Send(new Message(){Type = "heartbeat"});
                        System.Threading.Thread.Sleep(15000);
                    }
                    catch(Exception e){
                        Console.WriteLine($"Failed to Ping: {e.ToString()}");
                        break;
                    }
                }
                
                Console.WriteLine($"Stopping heartbeat: {this.socket.State}"); 
            });

            pinger.Start(); 
            await pinger; 
        }

        public void HandleMessage (Message message)
        {
            System.Console.WriteLine($"Got Message: {message}");

            switch (message.Type)
            {
                case "heartbeat":
                    System.Console.WriteLine("Heartbeat");
                    break; 
                case "pageresult":
                    System.Console.WriteLine("Newppage");
                    break; 
                case "pagerequest":
                    System.Console.WriteLine("pagerequest");
                    HandlePageRequest(message.Pagerequest.Path);
                    break;
                case "query":
                    System.Console.WriteLine("query");
                    HandleQuery(message.Query.Query_);
                    break; 
                default:
                    System.Console.WriteLine(message.Type);
                    break;
                

            }
        }

        public void HandlePageRequest (string path)
        {
            var PResult = MyManager.RequestPage(path); 

            var ResponseMessage = new Message(); 
            ResponseMessage.Pageresult = PResult.Result; 
            ResponseMessage.Type = ResponseMessage.Pageresult.GetType().Name.ToLowerInvariant(); 

            Send(ResponseMessage); 
        }

        public void HandleQuery(string query)
        {
            Task.Run(() => {
                bool runningQuery = false; 
                lock(queryLock)
                {
                    runningQuery = lastQuery.AddMilliseconds(500).CompareTo(DateTime.Now) > 0;
                }
                if (runningQuery)
                { // if hasn't been .1 seconds
                    System.Console.WriteLine("Recent Query Running... Sleeping...");
                    lock(queryLock)
                    {
                        lastQuery = DateTime.Now;
                    }
                    System.Threading.Thread.Sleep(500);
                    lock(queryLock)
                    {
                        runningQuery = lastQuery.AddMilliseconds(500).CompareTo(DateTime.Now) > 0;
                    }
                    if (runningQuery)
                    { // if hasn't been .1 seconds
                        System.Console.WriteLine("New Query came in. Exiting");
                        return;
                    }
                }
                lock (queryLock)
                {
                    lastQuery = DateTime.Now;
                }
                System.Console.WriteLine($"Running new query : {query}");
                System.Console.WriteLine($"Running query : {query}");
                var CurrentQuery = MyManager.Query(query);
                var ResponseMessage = new Message();
                ResponseMessage.Queryresults = CurrentQuery.Result;
                ResponseMessage.Type = ResponseMessage.Queryresults.GetType().Name.ToLowerInvariant();

                Send(ResponseMessage);


                // set back time to let new query in
                lock(queryLock)
                {
                    lastQuery = DateTime.Now.AddMilliseconds(-500); 
                }
                System.Console.WriteLine("Let in enxt query..");

            });
        }
    }

}