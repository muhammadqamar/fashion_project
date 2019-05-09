import React, { Component } from 'react';
import $ from "jquery";
 import slick from "slick-carousel";
  import "slick-carousel/slick/slick.css";
  import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from 'react-router-dom';

import './work.css';
class work extends Component {

  state = {

    sli:""
  }

  componentDidMount()
  {

      document.getElementById('textchange').style.color = "black"



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
        price = "$ "+check
      }
      else{
        price = "NA"
      }
        }catch(e){}
      var dummy = {
        img:b.records.page[x].image,
        price:price
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
      price = "$ "+check
    }
    else{
      price = "NA"
    }
  }catch(e){}
    var dummy = {
      img:b.records.page[x].image,
      price:price
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
        price = "$ "+check
      }
      else{
        price = "NA"
      }
      var dummy = {
        img:b.records.page[x].image,
        price:price
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
        price = "$ "+check
      }
      else{
        price = "NA"
      }
        }catch(e){}
      var dummy = {
        img:b.records.page[x].image,
        price:price
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
        price = "$ "+check
      }
      else{
        price = "NA"
      }
        }catch(e){}
      var dummy = {
        img:b.records.page[x].image,
        price:price
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
        price = "$ "+check
      }
      else{
        price = "NA"
      }
        }catch(e){}
      var dummy = {
        img:b.records.page[x].image,
        price:price
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
        price = "$ "+check
      }
      else{
        price = "NA"
      }
        }catch(e){}
      var dummy = {
        img:b.records.page[x].image,
        price:price
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
        price = "$ "+check
      }
      else{
        price = "NA"
      }
        }catch(e){}
      var dummy = {
        img:b.records.page[x].image,
        price:price
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
        price = "$ "+check
      }
      else{
        price = "NA"
      }
        }catch(e){}
      var dummy = {
        img:b.records.page[x].image,
        price:price
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
        price = "$ "+check
      }
      else{
        price = "NA"
      }
        }catch(e){}
      var dummy = {
        img:b.records.page[x].image,
        price:price
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
        price = "$ "+check
      }
      else{
        price = "NA"
      }
        }catch(e){}
      var dummy = {
        img:b.records.page[x].image,
        price:price
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

    console.log(jeans)
    console.log(shirts)
console.log(shoes)
    console.log(bags)
    console.log(tops)
    console.log(skirts)
console.log(handbags)
    console.log(earings)
    console.log(dress)
        console.log(pants)
        console.log(necklace)
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
console.log(sliderarray)
$('.your-class').slick({ dots: false, infinite: true, speed: 500, fade: true, autoplay:false });

})












}






clickslider = ()=> {
  document.getElementsByClassName('slick-prev')[0].click()
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
<div className="row" class="proceed">
<NavLink to="/checkout" exact strict >
    <div className="col-sm-6 col-xs-12 ">
        <div className="element-icon style2">
            <div className="icon"><i className="flaticon flaticon-origami28"></i></div>
            <div className="content">
                <h4 className="title">I like it, Continue</h4></div>
        </div>
    </div>
    </NavLink>
    <div className="col-sm-6 col-xs-12 " onClick={this.clickslider}>
        <div className="element-icon style2">
            <div className="icon"><i className="flaticon flaticon-curvearrows9"></i></div>
            <div className="content">
                <h4 className="title">I dont like it, Continue</h4></div>
        </div>
    </div>

</div>
</div>);

} } export default work;
