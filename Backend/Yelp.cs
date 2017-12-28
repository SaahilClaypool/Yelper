using System;
using System.Web;
using System.Net;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace Yelper
{
    class Yelp
    {

        private Yelp()
        {

        }
        private static Yelp instance; 
        public static Yelp Instance {
            get 
            {
                if (instance == null){
                    instance = new Yelp();
                }
                return instance;
            }
        }
       
        // OAuth credential placeholders that must be filled in by users.
        // You can find them on
        // https://www.yelp.com/developers/v3/manage_app
        string CLIENT_ID = "9RBhrxshhu9VbesoD4HKFg";
        string CLIENT_SECRET = "l3v1rvPAW71RBs1CVmdylntXwZr3LfeUoOP1qKlqoRMbBR4J2N4i9TVcjeCJKgxV";


        string API_HOST = "https://api.yelp.com";
        string SEARCH_PATH = "/v3/businesses/search";
        string BUSINESS_PATH = "/v3/businesses/";  // Business ID will come after slash.
        string TOKEN_PATH = "/oauth2/token";
        string GRANT_TYPE = "client_credentials";

        string DEFAULT_TERM = "dinner";
        string DEFAULT_LOCATION = "San Francisco, CA";
        string SEARCH_LIMIT = "15";


        public string GetBearerToken()
        {
            return GetBearerToken(API_HOST, TOKEN_PATH);
        }
        public string GetBearerToken(string host, string path )
        {
            var url = $"{host}{path}";

            var paramDict = (new Dictionary<string, string>(){
                {"client_id", CLIENT_ID},
                {"client_secret", CLIENT_SECRET},
                {"grant_type", GRANT_TYPE}
            });

            var request = new HttpRequestMessage(); 
            request.RequestUri = new Uri(host+path);
            var contentParams = EncodeAsUrl(paramDict);
            // request.Content = new StringContent(contentParams,System.Text.Encoding.UTF8, "application/x-www-form-urlencoded");
            request.Content = new FormUrlEncodedContent(paramDict);
            // request.Content = new StringContent(JsonConvert.SerializeObject(paramDict),System.Text.Encoding.UTF8, "application/x-www-form-urlencoded");
            System.Console.WriteLine("CONTENT: " + request.Content);
            request.Method = HttpMethod.Post; 
            System.Console.WriteLine("Request: " + request.ToString());

            using (var client = new HttpClient()){
                // System.Console.WriteLine("response: " + response.ToString());
                var response = client.SendAsync(request).Result; 
                System.Console.WriteLine("Response: " + response.ToString());
                // System.Console.WriteLine("Content: " + response.Content.ReadAsStringAsync().Result);
                var content = JsonConvert.DeserializeObject<Dictionary<string, string>>(response.Content.ReadAsStringAsync().Result); 
                
                return content["access_token"];
                
            }
        }

        string EncodeAsUrl(Dictionary<string, string> data)
        {
            // var url = HttpUtility.UrlEncode(
            var url = string.Join("&",
                data.Select(kvp =>
                    string.Format("{0}={1}", kvp.Key, kvp.Value)));
            return url;
        }


        async Task<string> MakeRequest(string host, string path, string bearer_token, Dictionary<string, string> urlParams)
        {
            var builder = new UriBuilder($"{host}{path}"); 
            builder.Port = -1; 
            var query = HttpUtility.ParseQueryString(builder.Query); 
            foreach (var el in urlParams)
            {
                query[el.Key] = el.Value; 
            }
            builder.Query = query.ToString(); 
            string url = builder.ToString(); 

            using (var client = new HttpClient())
            {
                client.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", bearer_token);
                System.Console.WriteLine("Made Request: " + url);
                var response = await client.GetAsync(url); 
                return await response.Content.ReadAsStringAsync();
            }
        }

        public async Task<string> GetReviews (string bearer_token, string busId) 
        {
            var searchParams = new Dictionary<string, string>();
            searchParams.Add("limit", SEARCH_LIMIT);
            var busReviews = BUSINESS_PATH + $"{busId}/reviews"; 
            return await MakeRequest(API_HOST, busReviews, bearer_token, searchParams); 
        }

        public async Task<string> Search (string bearer_token, string term, string location )
        {
            var searchParams = new Dictionary<string, string>() {
                // {"term", term.Replace(' ', '+') },
                // {"location", location.Replace(' ', '+')}, 
                {"location", location}, 
                {"term", term},
                {"limit", SEARCH_LIMIT}
            };

            return await MakeRequest(API_HOST, SEARCH_PATH, bearer_token, searchParams); 
        }
    }
}