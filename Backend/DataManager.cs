using Messages; 

namespace Yelper 
{

    class DataManager 
    {
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
            var results = new Messages.QueryResults(); 
            results.Results.Add(new QueryItem(){Name = $"q {query} 1", Path = $"q {query} 1"});
            results.Results.Add(new QueryItem(){Name = $"q {query} 2", Path = $"q {query} 2"} );
            results.Results.Add(new QueryItem(){Name = $"q {query} 3", Path = $"q {query} 3" });

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