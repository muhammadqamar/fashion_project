import React, { Component } from 'react';
import $ from "jquery";
 import slick from "slick-carousel";
  import "slick-carousel/slick/slick.css";
  import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from 'react-router-dom';


class party extends Component {
  componentDidMount()
  { $('.your-class').slick({ dots: false, infinite: true, speed: 500, fade: true, autoplay:true }); }

clickslider = ()=> {
  document.getElementsByClassName('slick-prev')[0].click()
}
   render() {
     return (

<div className="your-class1">
    <div className="your-class">
        <div>
            <div className="row">
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

            </div>
        </div>
        <div>
        <div className="row">

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

        </div>
        </div>
        <div>
        <div className="row">
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


        </div>
        </div>
    </div>
    <div className="row">
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

} } export default party;
