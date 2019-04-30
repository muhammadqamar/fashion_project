import React, { Component } from 'react';
import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from 'react-router-dom';

class checkout extends Component {
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
                                      <th colSpan="2" className="product-name">Product</th>
                                      <th className="product-price">Price</th>
                                      <th className="product-quantity">Qty</th>
                                      <th className="product-subtotal">Total</th>
                                      <th className="product-remove">&nbsp;</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <tr>
                                      <td className="product-thumbnail"><img src="assets/images/1.png" alt="" /></td>

                                      <td className="product-name"><a href="#">Oversize Fit Trousers Sneaker</a></td>
                                      <td>£85.00</td>
                                      <td><input className="qty" type="text" /></td>
                                      <td>£85.00</td>
                                      <td className="product-remove"><a href="#"><i className="fa fa-close"></i></a></td>
                                  </tr>
                                  <tr>
                                      <td className="product-thumbnail"><img src="assets/images/14.jpg" alt=""/></td>
                                      <td className="product-name"><a href="#">Oversize Fit Trousers Sneaker</a></td>
                                      <td>£85.00</td>
                                      <td><input className="qty" type="text" /></td>
                                      <td>£85.00</td>
                                      <td className="product-remove"><a href="#"><i className="fa fa-close"></i></a></td>
                                  </tr>
                                  <tr>
                                      <td className="product-thumbnail"><img src="assets/images/1.png" alt=""/></td>
                                      <td className="product-name"><a href="#">Oversize Fit Trousers Sneaker</a></td>
                                      <td>£85.00</td>
                                      <td><input className="qty" type="text" /></td>
                                      <td>£85.00</td>
                                      <td className="product-remove"><a href="#"><i className="fa fa-close"></i></a></td>
                                  </tr>
                              </tbody>
                          </table>

                      </div>
                      <div className="col-sm-12 col-md-4">
                          <div className="box-cart-total">
                              <h2 className="title">Cart Totals</h2>
                              <table>
                                  <tbody><tr>
                                      <td>Subtotal</td>
                                      <td><span className="price">£170.00</span></td>
                                  </tr>
                                  <tr>
                                      <td>Shipping</td>
                                      <td>
                                          <label><input name="shipping" type="radio"/>Free Shipping</label>
                                          <label>
                                              <input name="shipping" type="radio"/>Local Delivery
                                              <span className="price">£50</span>
                                          </label>
                                          <label>
                                              <input name="shipping" type="radio"/>Flat Rate
                                              <span className="price">£100</span>
                                          </label>
                                          <label>
                                              <input name="shipping" type="radio"/>International
                                              <span className="price">£150</span>
                                          </label>
                                      </td>
                                  </tr>
                                  <tr className="order-total">
                                      <td>Toal</td>
                                      <td><span className="price">£320.00</span></td>
                                  </tr>
                              </tbody></table>
                              <NavLink to="/payment" exact strict >
                              <button className="button btn-primary medium checkout-button">PROCEED TO CHECKOUT</button>

                                  </NavLink>
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


export default checkout;
