import React, { Component } from 'react';
import Inputmodel from '../modelinput/modelinput';
import { connect } from "react-redux";
import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from 'react-router-dom';
import Payment from '../payment/payment';



class category extends Component {

  render() {
    return (

      <div className="relativecat" >
      <div className="block-category-carousel">
      <h2 className="title">what's your mood Today ?</h2>
      </div>
      <ul className="category-menu">
            <li>

          <NavLink data-toggle="modal" data-target="#myModal" >
                  Party Outfit

    <img src="assets/images/002-gift.png" />
              </NavLink>
            </li>
            <li>
                <NavLink data-toggle="modal" data-target="#myModal" >

              Weekend Outfit

                <img src="assets/images/001-sunday-daily-calendar-page.png" />
            </NavLink>
            </li>
            <li>
            <NavLink data-toggle="modal" data-target="#myModal" >

              Work Outfit
                <img src="assets/images/portfolio.png" />
            </NavLink>
            </li>


          </ul>
<Inputmodel></Inputmodel>
          </div>

    );

  }
}

const mapDispachToProps = (dispatch) => {
 dispatch({ type: "update_logo",value:'color_logo_class_white'})


};
export default connect("",mapDispachToProps)(category);
