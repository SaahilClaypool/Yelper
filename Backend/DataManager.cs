using Messages; 
using Newtonsoft.Json; 
using Newtonsoft.Json.Linq; 
using System.Collections.Generic; 
using System.Linq; 

namespace Yelper 
{

    class DataManager 
    {
        string Bearer = null; 
        public static DataManager Instance {
            get {
                if (instance == null){
                    instance = new DataManager(); 
                }
                return instance; 
            }
        }
        public static DataManager instance ;


        private DataManager() 
        {
            // useful id initiatlization
        }

        public Messages.QueryResults Query(string query)
        {
            if(Bearer == null){
                Bearer = Yelp.Instance.GetBearerToken(); 
            }
            var yelpResult = JObject.Parse(Yelp.Instance.Search(Bearer, query, "San Fransico, CA"));

            var businesses = yelpResult["businesses"] as JArray; 

            var asList = from bus in businesses 
                            select new Messages.QueryItem() {Name = bus["name"].ToString(), Path = bus["id"].ToString()}; 
            
            var results = new Messages.QueryResults(); 
            foreach (var item in asList)
            {
                results.Results.Add(item);
            }

            return results;
        }

        public Messages.PageResult RequestPage(string path)
        {
            var result = new Messages.PageResult(); 

            result.Html = $"<h>header</h><p>new html paragraph from {path}</p>"; 

            return result;
            

        }


    }

}