var request = require('request');
var JSSoup = require('jssoup').default;
var express =  require('express');
const WebSocket = require('ws');

var app = express();
var server =  app.listen(5555,function(){
  console.log('listening to port 5555')
})
app.use(express.static('public'))

const wss = new WebSocket.Server({ port: 8080 });


app.get("/api/horsesearchped/:url/:word/:country", async (req, res) => {

url:

})


function start(){
wss.on('connection', function connection(ws) {







var body_parser = "";
var all_js = [];
var all_css = [];
var whole = [];
var partial = [];
var whole_ass = [];
var partial_ass = [];
var js_script;
var link_script;
var readline = require('readline-sync');
var url = 'http://www.altria.com/Pages/default.aspx'
//var url = readline.question("Enter URL to search , valid url format (https://www.google.com)  = ");
url = url.trim()
var wordto = readline.question("Enter word to search =  ");
var regex = new RegExp(" "+wordto.trim()+" ", "gi");
var regex1 = new RegExp(wordto.trim(), "gi");
//var url = "https://stackoverflow.com"
console.log("connecting to main site. plz wait")

request(url, function(error, response, body) {


    body_parser = body; // Print the HTML for the Google homepage.

    var soup = new JSSoup(body_parser);


    //js links collecting
    js_script = soup.findAll('script')
    try{
    for (var f = 0; f <= js_script.length; f++) {
        try {
            if (js_script[f].attrs.src != undefined) {
                if (js_script[f].attrs.src[0] == "/") {
                    all_js.push(url + js_script[f].attrs.src)
                } else {
                    all_js.push(js_script[f].attrs.src)
                }


            }
        } catch (e) {}
    }
  }catch(e){}


    //css links collecting
    link_script = soup.findAll('link')
    try{
    for (var f = 0; f <= link_script.length; f++) {
        try {

            if (link_script[f].attrs.href != undefined) {
                if (link_script[f].attrs.href[0] == "/") {
                    all_css.push(url + link_script[f].attrs.href)
                } else {
                    all_css.push(link_script[f].attrs.href)
                }
            }
        } catch (e) {}
    }
  }catch(e){}


  console.log("totol css or link tag assets files scanned = " + String(all_js.length) )
  console.log("totol js or script tag assets files scanned = " + String(all_css.length) )
    //matching main body
    try{
    var res = body.match(regex);
    var res1 = body.match(regex1);

  }catch(e){}
    try {
        for (var f1 = 0; f1 < res.length; f1++) {
            whole.push(res[f1])
            ws.send('whole = '+whole.length);

        }
  //      console.log("totol whole word match count in main body = " + String(whole.length) )

    } catch (e){}
    try {
        for (var f1 = 0; f1 < res1.length; f1++) {
            partial.push(res[f1])
                  ws.send('partial = '+partial.length);
        }
//          console.log("totol partial word match count in main body = " + String(partial.length) )
    } catch (e) {}


    // css assets loop
    try{
    for (var f3 = 0; f3 < all_css.length; f3++) {
    async function fd(){
      try{
      await  request(all_css[f3], function(error, response, body) {
            console.log("connecting to css or link tag assets. plz wait" + String(f3)+"/"+all_css.length)
          var res = body.match(regex);
          var res1 = body.match(regex1);

            try {
                for (var f31 = 0; f31 < res.length; f31++) {
                    if (res[f31] != undefined) {
                     whole.push(res[f31])
                       ws.send('whole = '+whole.length);
                    }
                }
            } catch (e) {}
            try {
                for (var f31 = 0; f31 < res1.length; f31++) {
                    if (res1[f31] != undefined) {
                       partial.push(res1[f31])
                         ws.send('partial = '+partial.length);
                    }
                }
            } catch (e) {}

        });
      }catch(e){}
      }
     fd();

    }
}catch(e){}

    // js assets loop
 try{
    for (var f4 = 0; f4 < all_js.length; f4++) {
        request(all_js[f4], function(error, response, body) {
          console.log("connecting to js or script tag assets. plz wait" +  String(f4)+"/"+all_js.length)
            var res = body.match(regex);
            var res1 = body.match(regex1);
            try {
                for (var f41 = 0; f41 < res.length; f41++) {
                    if (res[f41] != undefined) {
                       whole.push(res[f41])
                          ws.send('whole = '+whole.length);
                    }
                }
            } catch (e) {}
            try {
                for (var f41 = 0; f41 < res1.length; f41++) {
                    if (res1[f41] != undefined) {
                       partial.push(res1[f41])
                         ws.send('partial = '+partial.length);
                    }
                }
            } catch (e) {}


        });


    }
  }catch(e){}
    //end js loop
//if (all_css.length == 0 && all_js.length == 0 )
//{
//results()
//console.log("no assets found")
//}


});

//function results(){
//  console.log("calculating total count.... it may took time to 20 to 30 second")
//  setTimeout(function(){ console.log("totol whole word match count in assets and main body = " + String(whole.length) )
//  console.log("totol partial word match count in assets and main body = " + String(partial.length) )
//  console.log("totol overall count = " + String(partial.length + whole.length) )}, 22000);
//}


});
}
