import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Slider from './slider/slide.js';
import Category from './category/category.js';
import { BrowserRouter, Route, Switch,NavLink } from 'react-router-dom';
import Work from './work/work';
import Party from './party/party.js';
import Weekend from './weekend/weekend';
import Checkout from './checkout/checkout';
import Inputmodel from './modelinput/modelinput';
import Payment from './payment/payment';
import { connect } from "react-redux";
import $ from "jquery";
class App extends Component {

  additem = ()=>{

  }
  componentDidMount(){


  }
  componentWillMount(){

    }

  render() {

    return (

     <BrowserRouter>

      <div>

      <div id="box-mobile-menu" className="box-mobile-menu full-height full-width">
      	<div className="box-inner">
      		<span className="close-menu"><span className="icon pe-7s-close"></span></span>
      	</div>
      </div>
      <header id="header" className="header sidebar">
      	<span className="close-header-sidebar"><span className="icon pe-7s-close"></span></span>
      	<span className="open-header-sidebar"><i className="fa fa-angle-double-right"></i></span>
      	<div className="header-top sidebar-menu">
      		<div className="logo">
      			<NavLink to="/" exact strict ><div class="logo-sider" >JENNY FASHION</div></NavLink>
      		</div>
      		<ul className="boutique-nav main-menu menu-sidebar">
      			<li className="active menu-item-has-children">
      				<a href="index.html">Home</a>

      			</li>

      			<li className="menu-item-has-children item-megamenu">
      				<a href="#">SHOP</a>

      			</li>

      			<li><a href="#">About Us</a></li>
      			<li><a href="#">Contact</a></li>

      		</ul>
      		<div className="box-control">
      			<form className="box-search show-icon">
      				<span className="icon"><span className="pe-7s-search"></span></span>
      				<div className="inner">
      					<input type="text" className="search" placeholder="Search here..."></input>
      					<button className="button-search"><span className="pe-7s-search"></span></button>
      				</div>
      			</form>
      			<div className="mini-cart">
              <NavLink className="cart-link" to="/checkout" exact strict  >
      				<span className="icon pe-7s-cart"></span> <span className="count">{this.props.count_item}</span>
              </NavLink>
      			</div>
      			<div className="box-settings">
                      <span className="icon pe-7s-config"></span>
                      <div className="settings-wrapper ">
                          <div className="setting-content">
                              <div className="select-language">
                                  <div className="language-title">Select language</div>
                                  <div className="language-topbar">
                                      <div className="lang-list">
                                          <ul className="clearfix">
                                              <li className="active"><a href="#"> <img src="assets/imagesflag1.png" alt=""></img> </a></li>
                                              <li><a href="#"> <img src="assets/imagesflag2.png" alt=""></img></a></li>
                                              <li><a href="#"> <img src="assets/imagesflag3.png" alt=""></img></a></li>
                                              <li><a href="#"> <img src="assets/imagesflag4.png" alt=""></img></a></li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                              <div className="select-currency">
                                  <div className="currency-title">Select currency</div>
                                  <div className="currency-topbar">
                                      <div className="currency-list">
                                          <ul className="clearfix">
                                              <li><a href="#"><span className="sym"><i className="fa fa-usd"></i></span></a></li>
                                              <li className="active"><a href="#"><span className="sym"><i className="fa fa-eur"></i></span></a></li>
                                              <li><a href="#"><span className="sym"><i className="fa fa-gbp"></i></span></a></li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                              <div className="setting-option">
                                  <ul>
                                      <li><a href="#"><i className="icon-heart icons"></i><span>Wishlist</span></a></li>
                                      <li><a href="#"><i className="icon-user icons"></i><span> MyAccount</span></a></li>
                                      <li><a href="#"><i className="icon-note icons"></i><span>Checkout</span></a></li>
                                       <li><a href="#"><i className="icon-handbag icons"></i><span>Compare</span></a></li>
                                       <li><a href="#"><i className="icon-lock-open icons"></i><span>Login / Register</span></a></li>
                                  </ul>
                              </div>
                      	</div>
                  	</div>
      			</div>
      		</div>

      		<div className="line-header"></div>
      		<div className="social">
      	        <a href="#"><i className="fa fa-facebook"></i></a>
      	        <a href="#"><i className="fa fa-twitter"></i></a>
      	        <a href="#"><i className="fa fa-google-plus"></i></a>
      	        <a href="#"><i className="fa fa-instagram"></i></a>
      	        <a href="#"><i className="fa fa-pinterest"></i></a>
      	    </div>
      	    <div className="sidebar-footer">
      	        <div className="coppyright">2019 JENNY Fashion. ALL RIGHTS RESERVED</div>
      		</div>
      	</div>
      </header>
      <div id="mian-swtich" className="height-set-width">

        <NavLink to="/" exact strict ><div    class={this.props.color_logo+ " logo-sider-black main-logo"}>JENNY FASHION</div></NavLink>

        <Switch>

       <Route path="/" exact strict render={
         () => {
           return (

                <div className="img-responsive-1 " >




             <Category   />

             </div>

           );
         }
       }/>
       <Route path="/work" exact strict component={Work}/>

        <Route path="/party" exact  component={Party}/>

         <Route path="/weekend" exact strict component={Weekend}/>
         <Route path="/checkout" exact strict component={Checkout}/>
         <Route path="/payment" exact strict component={Payment}/>


          </Switch>
          </div>

      </div>
 </BrowserRouter>
    );
  }
}
const mapStateToProps = state => {
  return {
    count_item: state.count_item,
      color_logo: state.color_logo_class
  };
};



export default connect(mapStateToProps)(App);
