import React, { Component } from 'react';
import Inputmodel from '../modelinput/modelinput';
import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from 'react-router-dom';



class category extends Component {
  render() {
    return (

      <div className="relativecat">
      <div className="block-category-carousel">
      <h2 className="title">what's your mood Today ?</h2>
      </div>
      <ul className="category-menu">
            <li>

          <NavLink data-toggle="modal" data-target="#myModal" >
                  Party Outfiy

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


export default category;
