import {Messages} from './bundle'

// Singleton class to store the websocket connect to the host
export class SocketClient {
    socket: WebSocket; 
    location: string; 
    port: number; 
    onQueryResult: (results : Messages.IQueryResults) => void; 
    onPageResult: (results : Messages.IPageResult) => void; 


    private static __Instance : SocketClient ;

    constructor (url: string, port: number) {
        var socketurl = `ws://${url}:${port}/ws`
        this.socket = new WebSocket(socketurl);
        console.log(`Connecting socket to ${socketurl}`);
        console.log(`location ${url} , port ${port}`);
        
        
        this.handleMessage = this.handleMessage.bind(this);
        this.socket.onmessage =  this.handleMessage; 
        this.socket.onclose =  (ev: CloseEvent) => {console.log(`SOCKET CLOSED : ${ev.code} `)}; 
        this.socket.onerror =  (ev: ErrorEvent) => {console.log(`SOCKET ERROR: ${ev.error} `)}; 
    }
    handleMessage(ev: MessageEvent) { 
        console.log("Handling message: " + JSON.stringify(ev.data)); 
        
        var messageObject = JSON.parse(ev.data);
        var message : Messages.Message;

        try {
            message = messageObject; 

            switch (message.type){
                case "heartbeat":
                    console.log("received heartbeat");
                    break; 
                case "queryresults":   
                    this.onQueryResult(message.queryresults); 
                    break;
                case "pageresult":
                    this.onPageResult(message.pageresult); 
                    break; 
                default:
                    console.log(`Not a valid message type: ${message.type} `);
                    console.log(`Not a valid message : ${JSON.stringify(message)} `);
                    console.log(`Not a valid message : ${message} `);
                break; 
            }
        }
        catch (ex) 
        {
            console.log(ex);
        }
    }

    send(message:Uint8Array) {
        if(this.socket.readyState == this.socket.OPEN){
            console.log(`sent message of size ${message.byteLength}`);
            
            this.socket.send(message);
        }
        else {
            setTimeout(() => { this.send(message) }, 50);
        }
    }

    async heartBeat() {
        console.log(`heartbeat: Status: ${this.socket.readyState}`);
        if(this.socket.readyState == this.socket.CONNECTING) {
            setTimeout(() => { this.heartBeat() }, 550); 
        }
        if (this.socket.readyState == this.socket.OPEN) {
            var heartbeat = Messages.Message.encode(Messages.Message.create({
                type : "heartbeat"
            })).finish()
            this.socket.send(heartbeat);
            console.log("send heartbeat");
            
            setTimeout(() => { this.heartBeat() }, 550);
        }
    }

    static GetInstance() : SocketClient {
        if (this.__Instance == null || this.__Instance.socket.readyState == this.__Instance.socket.CLOSED){
            this.__Instance = new SocketClient("localhost", 5000); 
            console.log(`Closing old and Making new socket connection at`);
        }
        return this.__Instance;
    }
}

export default SocketClient; 