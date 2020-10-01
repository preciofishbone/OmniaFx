using System;
using System.Net.Http;
using System.Threading.Tasks;

namespace ExternalPlayground
{
    /// <summary>
    /// This is external project that will call to Omnia with AppContext
    /// </summary>
    class Program
    {

        private static readonly HttpClient HttpClient = new HttpClient();
        private static readonly Guid ClientId = new Guid("");   //e.g 656C7A09-7A78-4000-9FDC-79A87CE7C5CC
        private static readonly string ClientSecret = "";       //e.g eW1rzQyrNAnTttGepvrurL3iz54n3mbo 
        private static readonly string OmniaApi = "";           //e.g https://my-tenant.omniacloud.net
        static void Main(string[] args)
        {

            HttpClient.DefaultRequestHeaders.Add("ClientId", ClientId.ToString());
            HttpClient.DefaultRequestHeaders.Add("ClientSecret", ClientSecret.ToString());

            GetEnterpriseProperties().GetAwaiter().GetResult();

            Console.ReadLine();
        }

        static async Task GetEnterpriseProperties()
        {
            try
            {
                Console.WriteLine("Calling to Omnia to get list of enterprise properties...");

                var response = await HttpClient.GetAsync(OmniaApi + "/api/enterpriseproperties");
                if (response.IsSuccessStatusCode)
                {
                    var content = await response.Content.ReadAsStringAsync();

                    Console.WriteLine($"Here is the result: {content}");
                }
                else
                {
                    Console.WriteLine($"Error occurred.");
                }
            }
            catch (Exception)
            {
                Console.WriteLine($"Error occurred.");
            }
        }
    }
}
