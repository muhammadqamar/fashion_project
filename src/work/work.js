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

      document.getElementsByClassName('loader')[0].style.display="block"
  var shoes= []
  var paints = []
  var bags = []
  var shirts =[]
  var sliderarray = []
var promisefirst = ()=>{
return  new Promise((resolve,reject)=>{
  fetch("https://search-api.swiftype.com/api/v1/public/engines/search.json?engine_key=fSPw6wk-GVaeu9fz5sUU&q=jeans").then(x=>x.json().then(b=>{

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
    paints.push(dummy)
    }
    //document.getElementsByClassName('loader')[0].style.display="none"
    resolve()
  }))

})
}
var promisesecond = ()=>{
  return new Promise((resolve,reject)=>{

fetch("https://search-api.swiftype.com/api/v1/public/engines/search.json?engine_key=fSPw6wk-GVaeu9fz5sUU&q=shirt").then(x=>x.json().then(b=>{

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
  shirts.push(dummy)
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
    shoes.push(dummy)
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
    bags.push(dummy)
    }

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
Promise.all([promisefirst(),promisesecond(),promisethird(),promisefour()]).then(()=>{

//Promise.all([promisefour()]).then(()=>{

    console.log(paints)
    console.log(shirts)
console.log(shoes)
    console.log(bags)
for(var x=0;x<5;x++){
//  sliderarray.push(shoes[Math.floor(Math.random()*10)])
//  sliderarray.push(bags[Math.floor(Math.random()*10)])
//  sliderarray.push(shirts[Math.floor(Math.random()*10)])
//  sliderarray.push(paints[Math.floor(Math.random()*10)])



var rand_nu = Math.floor(Math.random()*10)
sliderarray.push(
   <div className="row">

      <div className="col-xs-4  mobile-collpase">
          <div className="banner-text style2">
              <div className="image">

                  <a className="banner-opacity" href="#"><img src={paints[rand_nu].img} alt="" /></a>
              </div>
              <div className="content-text">
                  <h3 className="title">{paints[rand_nu].price}</h3>
              </div>
          </div>
      </div>
      <div className="col-xs-4 col2  mobile-collpase">
          <div className="banner-text style2">
              <div className="image">
                  <a className="banner-opacity" href="#"><img src={shoes[rand_nu].img} alt="" /></a>
              </div>
              <div className="content-text">
                  <h3 className="title">{shoes[rand_nu].price}</h3>
              </div>
          </div>
          <div className="banner-text style2">
              <div className="image ">
                  <a className="banner-opacity" href="#"><img src={bags[rand_nu].img} alt="" /></a>
              </div>
              <div className="content-text">
                  <h3 className="title">{bags[rand_nu].price}</h3>
              </div>
          </div>
      </div>
      <div className="col-xs-4 mobile-collpase">
          <div className="banner-text">
              <div className="image">
                  <a className="banner-opacity" href="#"><img src={shirts[rand_nu].img} alt="" /></a>
              </div>
              <div className="content-text">
                  <h3 className="title">{shirts[rand_nu].price}</h3>
              </div>
          </div>
      </div>

      </div>
)

var rand_nu = Math.floor(Math.random()*10)
sliderarray.push(
   <div className="row">
   <div className="col-xs-4 col2  mobile-collpase">
       <div className="banner-text style2">
           <div className="image">
               <a className="banner-opacity" href="#"><img src={shoes[rand_nu].img} alt="" /></a>
           </div>
           <div className="content-text">
               <h3 className="title">{shoes[rand_nu].price}</h3>
           </div>
       </div>
       <div className="banner-text style2">
           <div className="image ">
               <a className="banner-opacity" href="#"><img src={bags[rand_nu].img} alt="" /></a>
           </div>
           <div className="content-text">
               <h3 className="title">{bags[rand_nu].price}</h3>
           </div>
       </div>
   </div>
      <div className="col-xs-4  mobile-collpase">
          <div className="banner-text style2">
              <div className="image">

                  <a className="banner-opacity" href="#"><img src={paints[rand_nu].img} alt="" /></a>
              </div>
              <div className="content-text">
                  <h3 className="title">{paints[rand_nu].price}</h3>
              </div>
          </div>
      </div>

      <div className="col-xs-4 mobile-collpase">
          <div className="banner-text">
              <div className="image">
                  <a className="banner-opacity" href="#"><img src={shirts[rand_nu].img} alt="" /></a>
              </div>
              <div className="content-text">
                  <h3 className="title">{shirts[rand_nu].price}</h3>
              </div>
          </div>
      </div>

      </div>
)

var rand_nu = Math.floor(Math.random()*10)
sliderarray.push(
   <div className="row">

      <div className="col-xs-4  mobile-collpase">
          <div className="banner-text style2">
              <div className="image">

                  <a className="banner-opacity" href="#"><img src={paints[rand_nu].img} alt="" /></a>
              </div>
              <div className="content-text">
                  <h3 className="title">{paints[rand_nu].price}</h3>
              </div>
          </div>
      </div>

      <div className="col-xs-4 mobile-collpase">
          <div className="banner-text">
              <div className="image">
                  <a className="banner-opacity" href="#"><img src={shirts[rand_nu].img} alt="" /></a>
              </div>
              <div className="content-text">
                  <h3 className="title">{shirts[rand_nu].price}</h3>
              </div>
          </div>
      </div>
      <div className="col-xs-4 col2  mobile-collpase">
          <div className="banner-text style2">
              <div className="image">
                  <a className="banner-opacity" href="#"><img src={shoes[rand_nu].img} alt="" /></a>
              </div>
              <div className="content-text">
                  <h3 className="title">{shoes[rand_nu].price}</h3>
              </div>
          </div>
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





}
document.getElementsByClassName('loader')[0].style.display="none"
this.setState({

    sli:sliderarray

}
)
console.log(sliderarray)
$('.your-class').slick({ dots: false, infinite: true, speed: 500, fade: true, autoplay:true });

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
