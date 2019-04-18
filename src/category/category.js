import React, { Component } from 'react';
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

          <NavLink to="/party" exact strict >

              Party Outfit
                <i className="fa fa-black-tie" aria-hidden="true"></i>
              </NavLink>
            </li>
            <li>
                <NavLink to="/weekend" exact strict >

              Weekend Outfit
              <i className="fa fa-shirtsinbulk" aria-hidden="true"></i>
            </NavLink>
            </li>
            <li>
                <NavLink to="/work" exact strict >

              Work Outfit
              <i className="fa fa-briefcase" aria-hidden="true"></i>
            </NavLink>
            </li>


          </ul></div>

    );

  }
}


export default category;
