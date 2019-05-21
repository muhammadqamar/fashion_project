import React, { Component } from 'react';
import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from 'react-router-dom';
import { connect } from "react-redux";
class checkout extends Component {
  state = {
    totalprice:"processing..."
  }
  componentDidMount(){
    var totalcount = 0

    for(var x=0;x<this.props.all_t.length;x++){
      var checkcount =   this.props.all_t[x].text_s.split("$")[1]
      checkcount = parseFloat(checkcount)
      totalcount = totalcount +checkcount

    }
    this.setState({
      totalprice:totalcount.toFixed(2)
    })

  }
  render() {
    return (
  <div>
  <div className="">
          <div className="">
              <div className="main-content">
                  <div className="page-title">
                      <h3>SHOPPING CART</h3>
                  </div>
                  <div className="row">
                      <div className="col-sm-12 col-md-8">
                          <table className="shop_table cart">
                              <thead>
                                  <tr>
                                      <th colSpan="1" className="product-name">Product</th>

                                      <th  colSpan="1" className="product-description">Price</th>
                                        <th colSpan="1" className="product-price">Price</th>


                                  </tr>
                              </thead>
                              <tbody>

                                    {
                                    this.props.all_t.map(el=>(
                                      <tr>
                                      <td className="product-thumbnail"><img src={el.img_s} alt="" /></td>
                                      <td className="product-description" >{el.text_des}</td>
                                      <td  className="product-price">{el.text_s}</td>


                                       </tr>
                                      ))

                                    }

                              </tbody>
                          </table>

                      </div>
                      <div className="col-sm-12 col-md-4">
                          <div className="box-cart-total">
                              <h2 className="title">Cart Totals</h2>
                              <table>
                                  <tbody>
                                  <tr>
                                      <td>Shipping</td>
                                      <td>
                                          <label><input name="shipping" type="radio"/>Free Shipping</label>

                                          <label>
                                              <input name="shipping" type="radio"/>Flat Rate
                                              <span className="price">$50</span>
                                          </label>
                                          <label>
                                              <input name="shipping" type="radio"/>International
                                              <span className="price">$100</span>
                                          </label>
                                      </td>
                                  </tr>
                                  <tr className="order-total">
                                      <td>Toal</td>
                                      <td><span className="price">US $ {this.state.totalprice}</span></td>
                                  </tr>
                              </tbody></table>

                              <button className="button btn-primary medium checkout-button">PROCEED TO CHECKOUT</button>

                            
                            </div>
                      </div>

                  </div>
              </div>
          </div>

      </div>


  </div>
    );

  }
}

const mapStateToProps = state => {
  return {
    all_t: state.checkoutitem
  };
};

const mapDispachToProps = (dispatch) => {
  dispatch({ type: "update_logo",value:'color_logo_class_black'})


};
export default connect(mapStateToProps,

  mapDispachToProps

)(checkout);
