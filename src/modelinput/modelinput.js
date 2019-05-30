import React, { Component } from 'react';
import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from 'react-router-dom';
import Modelcon from '../work/work';
import { connect } from "react-redux";
var check_sum
class modelinput extends Component {
state = {
check:{
  top_size:0,
  paint_size:0,
  shoes_size:0,
  colo_choice:"black",
  age_:"10-15",
  profession_:"Student"

}


}

 settop=(event)=>{
this.setState({
check:{

  paint_size:this.state.check.paint_size,
  shoes_size:this.state.check.shoes_size,
  colo_choice:this.state.check.colo_choice,
  age_:this.state.check.age_,
  profession_:this.state.check.profession_,

  top_size:event.target.value
}
})
}

setpaint=(event)=>{
this.setState({
check:{
  paint_size:event.target.value,
  shoes_size:this.state.check.shoes_size,
  colo_choice:this.state.check.colo_choice,
  age_:this.state.check.age_,
  profession_:this.state.check.profession_,

  top_size:this.state.check.top_size


}
})
}

setprofession=(event)=>{
this.setState({
check:{


  paint_size:this.state.check.paint_size,
  shoes_size:this.state.check.shoes_size,
  colo_choice:this.state.check.colo_choice,
  age_:this.state.check.age_,
  profession_:event.target.value,

  top_size:this.state.check.top_size
}
})
}
setage=(event)=>{
this.setState({
check:{
  paint_size:this.state.check.paint_size,
  shoes_size:this.state.check.shoes_size,
  colo_choice:this.state.check.colo_choice,
  age_:event.target.value,
  profession_:this.state.check.profession_,

  top_size:this.state.check.top_size



}
})

}

setshoes = (event)=>{
this.setState({

check:{
  paint_size:this.state.check.paint_size,
  shoes_size:event.target.value,
  colo_choice:this.state.check.colo_choice,
  age_:this.state.check.age_,
  profession_:this.state.check.profession_,

  top_size:this.state.check.top_size
}
})
}
setcolor = (event)=>{
this.setState({

check:{

  paint_size:this.state.check.paint_size,
  shoes_size:this.state.check.shoes_size,
  colo_choice:event.target.value,
  age_:this.state.check.age_,
  profession_:this.state.check.profession_,

  top_size:this.state.check.top_size


}
})

}

addformreducer = ()=> {
  check_sum  = this.state.check
  this.props.onadditemform()


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
                 <input className="input" value={this.state.check.top_size} onChange={this.settop.bind(this)}   type="number" />
                 <p className="notice">enter size of   <span className="primary">your paints</span></p>
             <input className="input" value={this.state.check.paint_size} onChange={this.setpaint.bind(this)}  type="number" />
             <p className="notice">enter size of   <span className="primary">your shoes</span></p>


         <input className="input"  value={this.state.check.shoes_size} onChange={this.setshoes.bind(this)} type="number" />
         <p className="notice">select shade of   <span className="primary">your color</span></p>
     <input className="input" value={this.state.check.color_choice} onChange={this.setcolor.bind(this)}  type="color" />
     <p className="notice">Select Range of    <span className="primary">your age</span></p>
<div class="form-group custom-len">
     <select class="form-control" onChange={this.setage.bind(this)} >
      <option>10-15</option>
        <option>15-20</option>
          <option>20-25</option>
        <option>25-30</option>
          <option>30-35</option>
    <option>35-40</option>
          <option>40-45</option>
          <option>45-50</option>

    </select>
</div>
      <p className="notice">Select    <span className="primary">your profession</span></p>
      <div class="form-group custom-len">
           <select class="form-control" onChange={this.setprofession.bind(this)} >
            <option>Student</option>
              <option>Engineer</option>
                <option> Medical</option>
              <option>Legal</option>
                <option>Government</option>
          <option>Labor</option>
                <option>Freelancer</option>


          </select>
      </div>

     <NavLink to="/work"  exact strict onClick={this.addformreducer} >
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

const mapDispachToProps = (dispatch) => {

return {
    onadditemform: () => dispatch({ type: "update_form",value:check_sum}),



  };
};
export default connect("",

  mapDispachToProps

)(modelinput);
