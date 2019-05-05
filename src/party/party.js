import React, { Component } from 'react';
import $ from "jquery";
 import slick from "slick-carousel";
  import "slick-carousel/slick/slick.css";
  import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from 'react-router-dom';


class party extends Component {
  componentDidMount()
  {

     $('.your-class').slick({ dots: false, infinite: true, speed: 500, fade: true, autoplay:true }); }

clickslider = ()=> {
  document.getElementsByClassName('slick-prev')[0].click()
}

ct = ()=>{
  var aller = []
     for(var g=0;g<10;g++){

          aller.push( <div className="row">
                  <div className="col-sm-5">
                      <div className="banner-text">
                          <div className="image">
                              <a className="banner-opacity" href="#"><img src="assets/images/11.jpg" alt="" /></a>
                          </div>
                          <div className="content-text">
                              <h3 className="title">SHIRT</h3>
                          </div>
                      </div>
                  </div>
                  <div className="col-sm-4">
                      <div className="banner-text style2">
                          <div className="image">
                              <a className="banner-opacity" href="#"><img src="assets/images/12.jpg" alt="" /></a>
                          </div>
                          <div className="content-text">
                              <h3 className="title">MENSWEAR</h3>
                          </div>
                      </div>
                  </div>
                  <div className="col-sm-3">
                      <div className="banner-text style2">
                          <div className="image">
                              <a className="banner-opacity" href="#"><img src="assets/images/13.jpg" alt="" /></a>
                          </div>
                          <div className="content-text">
                              <h3 className="title">HANDBAG</h3>
                          </div>
                      </div>
                      <div className="banner-text style2">
                          <div className="image ">
                              <a className="banner-opacity" href="#"><img src="assets/images/14.jpg" alt="" /></a>
                          </div>
                          <div className="content-text">
                              <h3 className="title">SNEAKERS</h3>
                          </div>
                      </div>
                  </div>

              </div>)

      }
      console.log(aller)
          return aller
    }

   render() {


     return (

<div className="your-class1">
    <div className="your-class">

  {this.ct()}

</div>
</div>);

} } export default party;
