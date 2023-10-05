const fxApi = omniaApi.fx
const workplacedReqConfig = fxApi.apis.HttpClient.createOmniaServiceRequestConfig("39df27aa-95f1-4a23-b3f6-8b231afcda82");
const wpClient = new fxApi.apis.HttpClient(workplacedReqConfig);
const result = await wpClient.post("/api/peoples/query", { "query here": "bla bla" });