using Messages; 
using Newtonsoft.Json; 
using Newtonsoft.Json.Linq; 
using System.Collections.Generic; 
using System.Linq; 
using System.Threading.Tasks; 

namespace Yelper 
{

    class DataManager 
    {
        string Bearer = null; 

        public DataManager() 
        {
            // useful id initiatlization
        }

        Task runningQuery = null; 

        public async Task<Messages.QueryResults> Query(string query)
        {
            if(Bearer == null){
                Bearer = Yelp.Instance.GetBearerToken(); 
            }
            // var yelpResult = JObject.Parse(Yelp.Instance.Search(Bearer, query, "San Fransico, CA"));
            var yelpResult = await Yelp.Instance.Search(Bearer, query, "San Fransico, CA");
            System.Console.WriteLine("JSON: " + yelpResult);

            var yelpResultJson = JObject.Parse(yelpResult); 

            var businesses = yelpResultJson["businesses"] as JArray; 

            var asList = from bus in businesses 
                            select new Messages.QueryItem() {Name = bus["name"].ToString(), Path = bus["id"].ToString()}; 
            
            var results = new Messages.QueryResults(); 
            results.Append = false; 
            foreach (var item in asList)
            {
                results.Results.Add(item);
            }

            return results;
        }

        public async Task<Messages.PageResult> RequestPage(string path)
        {
            var result = new Messages.PageResult(); 

            var yelpResult = await Yelp.Instance.GetReviews(Bearer, path);

            result.Html = $"<h>header</h><p>new html paragraph from {path}</p>"; 

            return result;
            

        }


    }

}