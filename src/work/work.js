import React, { Component } from 'react';
import $ from "jquery";
import slick from "slick-carousel";
import "slick-carousel/slick/slick.css";
import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from 'react-router-dom';
import { connect } from "react-redux";
import './work.css';
import Swal from 'sweetalert2'
import client from '../elastic'
var dummyjson=[]
var check_button=false
var resutl_api
var  user_deatls ={
 "Browser_CodeName" : navigator.appCodeName,
 "Browser_Name": navigator.appName,
 "Browser_Version": navigator.appVersion,
 "Cookies_Enabled": navigator.cookieEnabled,
 "Browser_Language": navigator.language,
 "Browser_Online": navigator.onLine,
 "Platform": navigator.platform,
 "User_agent_header": navigator.userAgent,
 }
class work extends Component {
state = {

    sli:""
  }
componentWillMount(){
/*  client.search({
    index: 'test2',
    type: 'posts',
    body: {
      query: {
        match_all: {}
      },
    }
  },function (error, response,status) {
      if (error){
        console.log("search error: "+error)
      }
      else {
        console.log("--- Response ---");
        console.log(response);
        console.log("--- Hits ---");
        response.hits.hits.forEach(function(hit){
          console.log(hit);
        })
      }
  });*/
  fetch('https://api.ipgeolocation.io/ipgeo?apiKey=1a8260d6d26d48c6bded145efcfe7ced').then(x=>x.json().then(b=>  resutl_api = b))
}
componentDidMount()
  {




      document.getElementsByClassName('loader')[0].style.display="block"
  var shoes= []
  var jeans = []
  var bags = []
  var shirts =[]
  var pants = []
  var tops = []
  var skirts = []
  var handbags =[]
  var earings =[]
  var dress =[]
  var necklace =[]
  var sliderarray = []
var promisefirst = ()=>{
return  new Promise((resolve,reject)=>{
  fetch("https://search-api.swiftype.com/api/v1/public/engines/search.json?engine_key=fSPw6wk-GVaeu9fz5sUU&q=jeans").then(x=>x.json().then(b=>{

    for(var x =0;x<b.records.page.length;x++){
      var price="NA"
      try{
      var description = b.records.page[x].description
      var check = description.split(',')[description.split(',').length-1].split(':')[1]
      var check_prize = description.split(',')[description.split(',').length-1]

      if (check_prize.includes('Price'))
      {
        price = "US $ "+check
      }
      else{
        price = "NA"
      }
        }catch(e){}
      var dummy = {
        img:b.records.page[x].image,
        price:price,

        description:description
      }
      if(b.records.page[x].image.includes('forever21') &&  !b.records.page[x].image.includes('warning')){
    jeans.push(dummy)
  }
    }
    //document.getElementsByClassName('loader')[0].style.display="none"
    resolve()
  }))

})
}
var promisesecond = ()=>{
  return new Promise((resolve,reject)=>{

fetch("https://search-api.swiftype.com/api/v1/public/engines/search.json?engine_key=fSPw6wk-GVaeu9fz5sUU&q=shirts").then(x=>x.json().then(b=>{

  for(var x =0;x<b.records.page.length;x++){
    var price="NA"
    try{
    var description = b.records.page[x].description
    var check = description.split(',')[description.split(',').length-1].split(':')[1]
    var check_prize = description.split(',')[description.split(',').length-1]

    if (check_prize.includes('Price'))
    {
      price = "US $ "+check
    }
    else{
      price = "NA"
    }
  }catch(e){}
    var dummy = {
      img:b.records.page[x].image,
      price:price,
description:description
    }
  if(b.records.page[x].image.includes('forever21') &&  !b.records.page[x].image.includes('warning')){
  shirts.push(dummy)
}
  }
  //document.getElementsByClassName('loader')[0].style.display="none"
    resolve()
}))
})
}
var promisethird =  ()=>{
return new Promise((resolve,reject)=>{

  fetch("https://search-api.swiftype.com/api/v1/public/engines/search.json?engine_key=fSPw6wk-GVaeu9fz5sUU&q=shoes").then(x=>x.json().then(b=>{

    for(var x =0;x<b.records.page.length;x++){
      var price="NA"
      var description = b.records.page[x].description
      var check = description.split(',')[description.split(',').length-1].split(':')[1]
      var check_prize = description.split(',')[description.split(',').length-1]

      if (check_prize.includes('Price'))
      {
        price = "US $ "+check
      }
      else{
        price = "NA"
      }
      var dummy = {
        img:b.records.page[x].image,
        price:price,
description:description
      }

    if(b.records.page[x].image.includes('forever21') &&  !b.records.page[x].image.includes('warning')){
    shoes.push(dummy)
  }
    }
  //  document.getElementsByClassName('loader')[0].style.display="none"
  resolve()
  }))

})
}
var promisefour =()=>{
  return  new Promise((resolve,reject)=>{

  fetch("https://search-api.swiftype.com/api/v1/public/engines/search.json?engine_key=fSPw6wk-GVaeu9fz5sUU&q=bags").then(x=>x.json().then(b=>{

    for(var x =0;x<b.records.page.length;x++){
      var price="NA"
      try{
      var description = b.records.page[x].description
      var check = description.split(',')[description.split(',').length-1].split(':')[1]
      var check_prize = description.split(',')[description.split(',').length-1]

      if (check_prize.includes('Price'))
      {
        price = "US $ "+check
      }
      else{
        price = "NA"
      }
        }catch(e){}
      var dummy = {
        img:b.records.page[x].image,
        price:price,
description:description
      }
    if(b.records.page[x].image.includes('forever21') &&  !b.records.page[x].image.includes('warning')){
    bags.push(dummy)
  }
    }

  resolve()
  }))

})
}
var promisefive =()=>{
  return  new Promise((resolve,reject)=>{

  fetch("https://search-api.swiftype.com/api/v1/public/engines/search.json?engine_key=fSPw6wk-GVaeu9fz5sUU&q=tops").then(x=>x.json().then(b=>{

    for(var x =0;x<b.records.page.length;x++){
      var price="NA"
      try{
      var description = b.records.page[x].description
      var check = description.split(',')[description.split(',').length-1].split(':')[1]
      var check_prize = description.split(',')[description.split(',').length-1]

      if (check_prize.includes('Price'))
      {
        price = "US $ "+check
      }
      else{
        price = "NA"
      }
        }catch(e){}
      var dummy = {
        img:b.records.page[x].image,
        price:price,
description:description
      }
    if(b.records.page[x].image.includes('forever21') &&  !b.records.page[x].image.includes('warning')){
    tops.push(dummy)
  }
    }

  resolve()
  }))

})
}
var promisesix =()=>{
  return  new Promise((resolve,reject)=>{

  fetch("https://search-api.swiftype.com/api/v1/public/engines/search.json?engine_key=fSPw6wk-GVaeu9fz5sUU&q=skirts").then(x=>x.json().then(b=>{

    for(var x =0;x<b.records.page.length;x++){
      var price="NA"
      try{
      var description = b.records.page[x].description
      var check = description.split(',')[description.split(',').length-1].split(':')[1]
      var check_prize = description.split(',')[description.split(',').length-1]

      if (check_prize.includes('Price'))
      {
        price = "US $ "+check
      }
      else{
        price = "NA"
      }
        }catch(e){}
      var dummy = {
        img:b.records.page[x].image,
        price:price,
description:description
      }
    if(b.records.page[x].image.includes('forever21') &&  !b.records.page[x].image.includes('warning')){
    skirts.push(dummy)
  }
    }

  resolve()
  }))

})
}
var promiseseven =()=>{
  return  new Promise((resolve,reject)=>{

  fetch("https://search-api.swiftype.com/api/v1/public/engines/search.json?engine_key=fSPw6wk-GVaeu9fz5sUU&q=handbags").then(x=>x.json().then(b=>{

    for(var x =0;x<b.records.page.length;x++){
      var price="NA"
      try{
      var description = b.records.page[x].description
      var check = description.split(',')[description.split(',').length-1].split(':')[1]
      var check_prize = description.split(',')[description.split(',').length-1]

      if (check_prize.includes('Price'))
      {
        price = "US $ "+check
      }
      else{
        price = "NA"
      }
        }catch(e){}
      var dummy = {
        img:b.records.page[x].image,
        price:price,
description:description
      }
    if(b.records.page[x].image.includes('forever21') &&  !b.records.page[x].image.includes('warning')){
    handbags.push(dummy)
  }
    }

  resolve()
  }))

})
}
var promiseeight =()=>{
  return  new Promise((resolve,reject)=>{

  fetch("https://search-api.swiftype.com/api/v1/public/engines/search.json?engine_key=fSPw6wk-GVaeu9fz5sUU&q=earings").then(x=>x.json().then(b=>{

    for(var x =0;x<b.records.page.length;x++){
      var price="NA"
      try{
      var description = b.records.page[x].description
      var check = description.split(',')[description.split(',').length-1].split(':')[1]
      var check_prize = description.split(',')[description.split(',').length-1]

      if (check_prize.includes('Price'))
      {
        price = "US $ "+check
      }
      else{
        price = "NA"
      }
        }catch(e){}
      var dummy = {
        img:b.records.page[x].image,
        price:price,
description:description
      }
    if(b.records.page[x].image.includes('forever21') &&  !b.records.page[x].image.includes('warning')){
    earings.push(dummy)
  }
    }

  resolve()
  }))

})
}
var promisenine =()=>{
  return  new Promise((resolve,reject)=>{

  fetch("https://search-api.swiftype.com/api/v1/public/engines/search.json?engine_key=fSPw6wk-GVaeu9fz5sUU&q=dress").then(x=>x.json().then(b=>{

    for(var x =0;x<b.records.page.length;x++){
      var price="NA"
      try{
      var description = b.records.page[x].description
      var check = description.split(',')[description.split(',').length-1].split(':')[1]
      var check_prize = description.split(',')[description.split(',').length-1]

      if (check_prize.includes('Price'))
      {
        price = "US $ "+check
      }
      else{
        price = "NA"
      }
        }catch(e){}
      var dummy = {
        img:b.records.page[x].image,
        price:price,
description:description
      }
    if(b.records.page[x].image.includes('forever21') &&  !b.records.page[x].image.includes('warning')){
    dress.push(dummy)
  }
    }

  resolve()
  }))

})
}
var promiseten =()=>{
  return  new Promise((resolve,reject)=>{

  fetch("https://search-api.swiftype.com/api/v1/public/engines/search.json?engine_key=fSPw6wk-GVaeu9fz5sUU&q=necklace").then(x=>x.json().then(b=>{

    for(var x =0;x<b.records.page.length;x++){
      var price="NA"
      try{
      var description = b.records.page[x].description
      var check = description.split(',')[description.split(',').length-1].split(':')[1]
      var check_prize = description.split(',')[description.split(',').length-1]

      if (check_prize.includes('Price'))
      {
        price = "US $ "+check
      }
      else{
        price = "NA"
      }
        }catch(e){}
      var dummy = {
        img:b.records.page[x].image,
        price:price,
description:description
      }
    if(b.records.page[x].image.includes('forever21') &&  !b.records.page[x].image.includes('warning')){
    necklace.push(dummy)
  }
    }

  resolve()
  }))

})
}
var promiseelleven = ()=>{
return  new Promise((resolve,reject)=>{
  fetch("https://search-api.swiftype.com/api/v1/public/engines/search.json?engine_key=fSPw6wk-GVaeu9fz5sUU&q=pants").then(x=>x.json().then(b=>{

    for(var x =0;x<b.records.page.length;x++){
      var price="NA"
      try{
      var description = b.records.page[x].description
      var check = description.split(',')[description.split(',').length-1].split(':')[1]
      var check_prize = description.split(',')[description.split(',').length-1]

      if (check_prize.includes('Price'))
      {
        price = "US $ "+check
      }
      else{
        price = "NA"
      }
        }catch(e){}
      var dummy = {
        img:b.records.page[x].image,
        price:price,
description:description
      }
      if(b.records.page[x].image.includes('forever21') &&  !b.records.page[x].image.includes('warning')){
    pants.push(dummy)
  }
    }
    //document.getElementsByClassName('loader')[0].style.display="none"
    resolve()
  }))

})
}


/*Promise.all(promisefirst(),promisesecond(),promisethird(),promisefour())
promisefirst().then(()=>{

  return promisesecond()
}).then(()=>{

  return promisethird()
}).then(()=>{

  return promisefour()
})*/
Promise.all([promisefirst(),promisesecond(),promisethird(),promisefour(),promisefive(),promisesix(),promiseseven(),promiseeight(),promisenine(),promiseten(),promiseelleven()]).then(()=>{

//Promise.all([promisefour()]).then(()=>{

/*    console.log(jeans)
    console.log(shirts)
console.log(shoes)
    console.log(bags)
    console.log(tops)
    console.log(skirts)
console.log(handbags)
    console.log(earings)
    console.log(dress)
        console.log(pants)
        console.log(necklace) */
for(var x=0;x<8;x++){
//  sliderarray.push(shoes[Math.floor(Math.random()*10)])
//  sliderarray.push(bags[Math.floor(Math.random()*10)])
//  sliderarray.push(shirts[Math.floor(Math.random()*10)])
//  sliderarray.push(paints[Math.floor(Math.random()*10)])


var min = 0;
var max = Math.min(necklace.length,dress.length,earings.length,handbags.length,skirts.length,shoes.length,jeans.length,bags.length,shoes.length,tops.length)-1
if(max<0){
  alert('no querries result found')
}
var rand_nu = Math.floor(Math.random() * (max - min + 1)) + min;
sliderarray.push(
   <div className="">

      <div className="col-xs-6 col-sm-3  mobile-collpase">
          <div className="banner-text style2">
              <div className="image">

                  <a className="banner-opacity" href="#"><img src={tops[rand_nu].img} alt="" /></a>
              </div>
              <div className="content-text">
                  <h3 className="title">{tops[rand_nu].price}</h3>
                    <h4 className="title hidden">{tops[rand_nu].description}</h4>
              </div>
          </div>
      </div>
      <div className="col-xs-6 col-sm-3   mobile-collpase">
          <div className="banner-text style2">
              <div className="image">
                  <a className="banner-opacity" href="#"><img src={skirts[rand_nu].img} alt="" /></a>
              </div>
              <div className="content-text">
                  <h3 className="title">{skirts[rand_nu].price}</h3>
                  <h4 className="title hidden">{skirts[rand_nu].description}</h4>
              </div>
          </div>

      </div>
     <div className="col-xs-6 col-sm-3   mobile-collpase">
      <div className="banner-text style2">
          <div className="image ">
              <a className="banner-opacity" href="#"><img src={bags[rand_nu].img} alt="" /></a>
          </div>
          <div className="content-text">
              <h3 className="title">{bags[rand_nu].price}</h3>
              <h4 className="title hidden">{bags[rand_nu].description}</h4>
          </div>
      </div>
      </div>
      <div className=" col-xs-6 col-sm-3 mobile-collpase">
          <div className="banner-text style2">
              <div className="image">
                  <a className="banner-opacity" href="#"><img src={shoes[rand_nu].img} alt="" /></a>
              </div>
              <div className="content-text">
                  <h3 className="title">{shoes[rand_nu].price}</h3>
                  <h4 className="title hidden">{shoes[rand_nu].description}</h4>
              </div>
          </div>
      </div>

      </div>
)

var rand_nu = Math.floor(Math.random() * (max - min + 1)) + min;
sliderarray.push(
  <div className="">


     <div className="col-xs-6 col-sm-3   mobile-collpase">
         <div className="banner-text style2">
             <div className="image">
                 <a className="banner-opacity" href="#"><img src={dress[rand_nu].img} alt="" /></a>
             </div>
             <div className="content-text">
                 <h3 className="title">{dress[rand_nu].price}</h3>
                 <h4 className="title hidden">{dress[rand_nu].description}</h4>

             </div>
         </div>

     </div>
     <div className="col-xs-6 col-sm-3  mobile-collpase">
         <div className="banner-text style2">
             <div className="image">

                 <a className="banner-opacity" href="#"><img src={earings[rand_nu].img} alt="" /></a>
             </div>
             <div className="content-text">
                 <h3 className="title">{earings[rand_nu].price}</h3>
                 <h4 className="title hidden">{earings[rand_nu].description}</h4>

             </div>
         </div>
     </div>
    <div className="col-xs-6 col-sm-3   mobile-collpase">
     <div className="banner-text style2">
         <div className="image ">
             <a className="banner-opacity" href="#"><img src={handbags[rand_nu].img} alt="" /></a>
         </div>
         <div className="content-text">
             <h3 className="title">{handbags[rand_nu].price}</h3>
             <h4 className="title hidden">{handbags[rand_nu].description}</h4>

         </div>
     </div>
     </div>
     <div className=" col-xs-6 col-sm-3 mobile-collpase">
         <div className="banner-text style2">
             <div className="image">
                 <a className="banner-opacity" href="#"><img src={shoes[rand_nu].img} alt="" /></a>
             </div>
             <div className="content-text">
                 <h3 className="title">{shoes[rand_nu].price}</h3>
                 <h4 className="title hidden">{shoes[rand_nu].description}</h4>

             </div>
         </div>
     </div>

     </div>
)

var rand_nu = Math.floor(Math.random() * (max - min + 1)) + min;
sliderarray.push(
  <div className="">

     <div className="col-xs-6 col-sm-3  mobile-collpase">
         <div className="banner-text style2">
             <div className="image">

                 <a className="banner-opacity" href="#"><img src={tops[rand_nu].img} alt="" /></a>
             </div>
             <div className="content-text">
                 <h3 className="title">{tops[rand_nu].price}</h3>
                 <h4 className="title hidden">{tops[rand_nu].description}</h4>

             </div>
         </div>
     </div>
     <div className="col-xs-6 col-sm-3   mobile-collpase">
         <div className="banner-text style2">
             <div className="image">
                 <a className="banner-opacity" href="#"><img src={necklace[rand_nu].img} alt="" /></a>
             </div>
             <div className="content-text">
                 <h3 className="title">{necklace[rand_nu].price}</h3>
                 <h4 className="title hidden">{necklace[rand_nu].description}</h4>

             </div>
         </div>

     </div>
     <div className=" col-xs-6 col-sm-3 mobile-collpase">
         <div className="banner-text style2">
             <div className="image">
                 <a className="banner-opacity" href="#"><img src={pants[rand_nu].img} alt="" /></a>
             </div>
             <div className="content-text">
                 <h3 className="title">{pants[rand_nu].price}</h3>
                 <h4 className="title hidden">{pants[rand_nu].description}</h4>

             </div>
         </div>
     </div>
    <div className="col-xs-6 col-sm-3   mobile-collpase">
     <div className="banner-text style2">
         <div className="image ">
             <a className="banner-opacity" href="#"><img src={bags[rand_nu].img} alt="" /></a>
         </div>
         <div className="content-text">
             <h3 className="title">{bags[rand_nu].price}</h3>
             <h4 className="title hidden">{bags[rand_nu].description}</h4>

         </div>
     </div>
     </div>


     </div>
)

var rand_nu = Math.floor(Math.random() * (max - min + 1)) + min;
sliderarray.push(
   <div className="">

      <div className="col-xs-6 col-sm-3  mobile-collpase">
          <div className="banner-text style2">
              <div className="image">

                  <a className="banner-opacity" href="#"><img src={tops[rand_nu].img} alt="" /></a>
              </div>
              <div className="content-text">
                  <h3 className="title">{tops[rand_nu].price}</h3>
                  <h4 className="title hidden">{tops[rand_nu].description}</h4>

              </div>
          </div>
      </div>
      <div className="col-xs-6 col-sm-3   mobile-collpase">
          <div className="banner-text style2">
              <div className="image">
                  <a className="banner-opacity" href="#"><img src={shoes[rand_nu].img} alt="" /></a>
              </div>
              <div className="content-text">
                  <h3 className="title">{shoes[rand_nu].price}</h3>
                  <h4 className="title hidden">{shoes[rand_nu].description}</h4>

              </div>
          </div>

      </div>
     <div className="col-xs-6 col-sm-3   mobile-collpase">
      <div className="banner-text style2">
          <div className="image ">
              <a className="banner-opacity" href="#"><img src={bags[rand_nu].img} alt="" /></a>
          </div>
          <div className="content-text">
              <h3 className="title">{bags[rand_nu].price}</h3>
              <h4 className="title hidden">{bags[rand_nu].description}</h4>

          </div>
      </div>
      </div>
      <div className=" col-xs-6 col-sm-3 mobile-collpase">
          <div className="banner-text style2">
              <div className="image">
                  <a className="banner-opacity" href="#"><img src={jeans[rand_nu].img} alt="" /></a>
              </div>
              <div className="content-text">
                  <h3 className="title">{jeans[rand_nu].price}</h3>
                  <h4 className="title hidden">{jeans[rand_nu].description}</h4>

              </div>
          </div>
      </div>

      </div>
)




}
document.getElementsByClassName('loader')[0].style.display="none"
this.setState({

    sli:sliderarray

}
)
//console.log(sliderarray)
$('.your-class').slick({ dots: false, infinite: true, speed: 500, fade: true, autoplay:false,
      });
document.getElementsByClassName('slick-prev')[0].addEventListener('click',()=>{


this.clickslider1("check")


//console.log(this)
})


var all_data_array = shoes.concat(jeans).concat(jeans).concat(bags).concat(shirts).concat(pants).concat(skirts).concat(handbags).concat(earings).concat(dress).concat(necklace)

all_data_array.map(x=>{

  client.index({
      index: 'test2',
      type: 'posts',
      body: x
  }, function(err, resp, status) {
      console.log(resp);
  });


})
})














}
clickslider = ()=> {
  document.getElementsByClassName('slick-next')[0].click()
}
clickslider1 = (dataa)=> {
  var user_deatls_all ={


"system_options": user_deatls,
"basic_option":resutl_api


}
console.log(user_deatls_all)

  var  dm
  var all_slider_images = document.getElementsByClassName('slick-active')[0].getElementsByTagName('img')
  var all_slider_text = document.getElementsByClassName('slick-active')[0].getElementsByTagName('h3')
  var all_slider_des = document.getElementsByClassName('slick-active')[0].getElementsByTagName('h4')

  for (var x=0;x<all_slider_images.length;x++)
  {
     dm ={
        img_s:all_slider_images[x].src,
        text_s :all_slider_text[x].innerText,
        text_des :all_slider_des[x].innerText
      }
      dummyjson.push(dm)
  }
if(dataa ==  "check"){
  this.props.onadditem()
}
if (dataa != "check")
{

    this.props.onadditem()
  document.getElementsByClassName('slick-arrow')[0].click()
}
  //Swal.fire('Item added in cart')


}
render() {

   return (
<div>
<div className="loader">MATCHING..</div>
<div className="your-class1">
  <div className="your-class">
    {this.state.sli}

  </div>
</div>
<div className="row" className="proceed">



    <div className="col-sm-6 col-xs-12 " onClick={this.clickslider}>
        <div className="element-icon style2">
            <div className="icon"><i className="flaticon flaticon-curvearrows9"></i></div>
            <div className="content">
                <h4 className="title">I dont like it, Continue</h4></div>
        </div>
    </div>
    <div className="col-sm-6 col-xs-12 "  onClick={this.clickslider1}>
        <div className="element-icon style2">
            <div className="icon"><i className="flaticon flaticon-origami28"></i></div>
            <div className="content">
                <h4 className="title">I like it, Continue</h4></div>
        </div>
    </div>

</div>
</div>);

} }
const mapDispachToProps = (dispatch) => {
  dispatch({ type: "update_logo",value:'color_logo_class_black'})

return {
    onadditem: () => dispatch({ type: "add_item",value:dummyjson}),



  };
};
export default connect("",

  mapDispachToProps

)(work);
