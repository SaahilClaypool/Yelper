using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Runtime.InteropServices;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;

namespace Yelper
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");

            var configuration = new ConfigurationBuilder()
                .AddCommandLine(args)
                .Build(); 

            var host = new WebHostBuilder() 
                .UseKestrel()
                .UseContentRoot(Directory.GetCurrentDirectory())
                .UseConfiguration(configuration)
                .UseIISIntegration()
                .UseStartup<Startup>()
                .Build();
            var Runner = Task.Run(() => 
            {
                host.Run(); 
            }); 

            Runner.Wait(); 
        }
    }
}
