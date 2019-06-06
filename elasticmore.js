const express = require('express')
const app = express()
const { Client } = require('@elastic/elasticsearch')
var  resultfour =[]
const client = new Client({
     node: 'https://elastic:Tn3nLz3YM5zPogCdmKHvWLLb@0187ecb4b77b4040a2fbb9ba408f7748.europe-west1.gcp.cloud.es.io:9243/',

 })
 client.search({
   index: 'likedproducts',

   body: {
     query: {
   	  bool:{

   	    must: [
   	      {
   	        match_phrase:
   	        {
   	          "age.keyword": "30-35"
   	        }
   	      },
   	      {
   	         match_phrase:
   	        {
   	          "profession.keyword": "Medical"
   	        }
   	      }
   	      ]
   	  }

   	},


   }
 }, (err, result) => {
 console.log(result)
  result.body.hits.hits.map(function(hit){
resultfour.push(hit)
 })


}

)
var port = 5555
app.get('/results', function (req, res) {

 res.send(resultfour)
})
var server =  app.listen(port,function(){
  console.log('listening to port 5555')
})







 //export default resultfour
