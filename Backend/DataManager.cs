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
            if(Bearer == null){
                Bearer = Yelp.Instance.GetBearerToken(); 
            }
        }

        Task runningQuery = null; 

        public async Task<Messages.QueryResults> Query(string query)
        {
            // var yelpResult = JObject.Parse(Yelp.Instance.Search(Bearer, query, "San Fransico, CA"));
            var yelpResult = await Yelp.Instance.Search(Bearer, query, "San Fransico, CA");
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

            var yelpResultJson = JObject.Parse(yelpResult);


            var reviews = yelpResultJson["reviews"] as JArray;

            System.Console.WriteLine("yelp result: " +  yelpResult);
            System.Console.WriteLine("reviews: " + reviews);
            System.Console.WriteLine("reviews: not cast" + yelpResultJson["reviews"]);

            var asList = from rev in reviews
                            select new Messages.Review() {
                                Url = rev["url"].ToString(),
                                Text = rev["text"].ToString(),
                                Rating = System.Int32.Parse(rev["rating"].ToString()),
                                Time = rev["time_created"].ToString(),
                                Name = rev["user"]["name"].ToString()
                            }; 

            foreach (var item in asList)
            {
                result.Reviews.Add(item); 
            }

            // result.Html = $@" <h>header</h> <p>new html paragraph from {path}</p> <p>{yelpResult}</p>"; 

            System.Console.WriteLine("Result count for get page is " + result.Reviews.Count);

            return result;
        }


    }

}