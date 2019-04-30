import React, { Component } from 'react';
import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from 'react-router-dom';

class modelinput extends Component {

  render() {
    return (

        <div className="modal fade inputmodel" id="myModal" role="dialog">
          <div className="modal-dialog">


            <div className="modal-content">
              <div className="modal-header">

                <h4 className="modal-title">Enter your Measuremnts</h4>
              </div>
              <div className="modal-body">
              <div className="kt-popup-newsletter">
                 <div className="popup-title">

                    <img src="./assets/images/slides/logo.png" alt="" />

                 </div>
                 <form className="form-subscribe">
                     <p className="notice">enter size of   <span className="primary">your top</span></p>
                 <input className="input"  type="number" />
                 <p className="notice">enter size of   <span className="primary">your paints</span></p>
             <input className="input"  type="number" />
             <p className="notice">enter size of   <span className="primary">your shoes</span></p>
         <input className="input"  type="number" />
         <p className="notice">select shade of   <span className="primary">your color</span></p>
     <input className="input"  type="color" />
     <NavLink to="/work" exact strict >
     <div class="element-icon style2"><div class="icon"><i class="flaticon flaticon-origami28"></i></div><div class="content"><h4 class="title">Submit</h4></div></div>
   </NavLink>


                </form>

              </div>

              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </div>

          </div>
        </div>
    );

  }
}


export default modelinput;
