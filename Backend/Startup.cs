using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.WebSockets;
using Microsoft.Extensions.FileProviders;
using System.IO;

namespace Yelper
{
    public class Startup
    {

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvcCore();
            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>(); 
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(); 

            if(env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            var WebSocketOptions = new WebSocketOptions()
            {
                KeepAliveInterval = TimeSpan.FromSeconds(60)
            };

            app.UseWebSockets(WebSocketOptions);
            app.UseDefaultFiles();
            app.UseStaticFiles();


            app.Use(async (context, next) => 
            {
                // handle websocket connection
                if (context.Request.Path =="/ws")
                {
                    if(context.WebSockets.IsWebSocketRequest)
                    {
                        var webSocket = await context.WebSockets.AcceptWebSocketAsync(); 
                        var Handler = new ClientHandler (webSocket);
                        await Handler.Run(); 
                    }
                    else 
                    {
                        context.Response.StatusCode = 400; 
                        System.Console.WriteLine("Not a websocket request");
                    }
                }
                else 
                {
                    await next();
                }
            });
        }

    }
}