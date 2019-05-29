var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
  host: 'https://elastic:Tn3nLz3YM5zPogCdmKHvWLLb@0187ecb4b77b4040a2fbb9ba408f7748.europe-west1.gcp.cloud.es.io:9243/',
  //host:'http://localhost:5601',
  //host: 'https://elastic:NNEVtGlvgAeHmL3auqesNDnl@4ddbdb6daaaa4ac0ac50b79da0eddd46.ap-southeast-1.aws.found.io:9243/',
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


 export default client
