import React, { Component } from 'react';
import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from 'react-router-dom';
import Modelcon from '../work/work';
class modelinput extends Component {

state = {
check:{
  top_size:0,
  paint_size:0,
  shoes_size:0,
  color_choice:"",
}


}

 settop(event){
this.setState({
check:{top_size:event.target.value}
})
}

setpaint(event){
this.setState({
check:{paint_size:event.target.value}
})
}

setshoes(event){
this.setState({
check:{shoes_size:event.target.value}
})
}
setcolor(event){
this.setState({
check:{color_choice:event.target.value}
})
}

  render() {
    return (

        <div className="modal fade inputmodel" id="myModal" role="dialog">
          <div className="modal-dialog">


            <div className="modal-content">
              <div className="modal-header">

                <h4 className="modal-title">Enter your Measurements</h4>
              </div>
              <div className="modal-body">
              <div className="kt-popup-newsletter">
                 <div className="popup-title">

              <div  className="logo-sider-black1 ">JENNY FASHION</div>
                 </div>
                 <form className="form-subscribe">
                     <p className="notice">enter size of   <span className="primary">your top</span></p>
                 <input className="input" value={this.state.top_size} onChange={this.settop.bind(this)}   type="number" />
                 <p className="notice">enter size of   <span className="primary">your paints</span></p>
             <input className="input" value={this.state.paint_size} onChange={this.setpaint.bind(this)}  type="number" />
             <p className="notice">enter size of   <span className="primary">your shoes</span></p>


         <input className="input"  value={this.state.shoes_size} onChange={this.setshoes.bind(this)} type="number" />
         <p className="notice">select shade of   <span className="primary">your color</span></p>
     <input className="input" value={this.state.color_choice} onChange={this.setcolor.bind(this)}  type="color" />

     <NavLink to="/work" exact strict >
     <div className="element-icon style2"><div className="icon"><i className="flaticon flaticon-origami28"></i></div><div className="content"><h4 className="title">Submit</h4></div></div>
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
