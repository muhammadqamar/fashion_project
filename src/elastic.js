var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
  host: 'https://elastic:Tn3nLz3YM5zPogCdmKHvWLLb@0187ecb4b77b4040a2fbb9ba408f7748.europe-west1.gcp.cloud.es.io:9243/',
  log: 'trace'
});
client.ping({
  // ping usually has a 3000ms timeout
  requestTimeout: 1000
}, function (error) {
  if (error) {
    console.trace('elasticsearch cluster is down!');
  } else {
    console.log('All is well');
  }
});

 client.index({
     index: 'test2',

     type: 'posts',
     body: {
         "PostName": "Integrating Elasticsearch Into Your Node.js Application",
         "PostType": "Tutorial",
         "PostBody": "This is the text of our tutorial about using Elasticsearch in your Node.js application.",
     }
 }, function(err, resp, status) {
     console.log(resp);
     alert()
 });

 export default client
