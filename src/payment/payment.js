import React, { Component } from 'react';
import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from 'react-router-dom';

class payment extends Component {
  componentDidMount(){

    document.getElementById('textchange').style.color = "black"

  }
  render() {
    return (
      <div className="row payments">
                          <div className="col-sm-6">
                              <div className="form-checkout">
                                  <h5 className="form-title">BILLING ADDRESS</h5>
                                  <div className="row">
                                      <div className="col-sm-6">
                                          <p><input type="text" placeholder="First Name"/></p>
                                      </div>
                                      <div className="col-sm-6">
                                          <p><input type="text" placeholder="Last Name"/></p>
                                      </div>
                                  </div>
                                  <p><input type="text" placeholder="Company Name"/></p>
                                  <p><input type="text" placeholder="Address"/></p>
                                  <p><input type="text" placeholder="Town / City"/></p>
                                  <p><input type="text" placeholder="State / Country"/></p>
                                  <div className="row">
                                      <div className="col-sm-6">
                                          <p><input type="text" placeholder="Post Code"/></p>
                                      </div>
                                      <div className="col-sm-6">
                                          <p><input type="text" placeholder="Phone"/></p>
                                      </div>
                                  </div>
                              </div>
                              <div className="form-checkout order">
                                  <h5 className="form-title">YOUR ORDER</h5>
                                  <table className="shop-table order">
                                      <thead>
                                          <tr>
                                              <th className="product-name">PRODUCT</th>
                                              <th className="total">TOTAL</th>
                                          </tr>
                                      </thead>
                                      <tbody>
                                          <tr>
                                              <td className="product-name">Oversize Fit Trousers Sneaker</td>
                                              <td className="total"><span className="price">£85.00</span></td>
                                          </tr>
                                          <tr>
                                              <td className="product-name">Oversize Fit Trousers Sneaker</td>
                                              <td className="total"><span className="price">£85.00</span></td>
                                          </tr>
                                          <tr>
                                              <td className="subtotal">Subtotal</td>
                                              <td className="total"><span className="price">£85.00</span></td>
                                          </tr>
                                          <tr>
                                              <td className="subtotal">Subtotal</td>
                                              <td className="total">Internaltional</td>
                                          </tr>
                                          <tr>
                                              <td className="subtotal">Coupon Discount</td>
                                              <td className="total">0%</td>
                                          </tr>
                                          <tr className="order-total">
                                              <td className="subtotal">ORDER TOTAL</td>
                                              <td className="total"><span className="price">£170.00</span></td>
                                          </tr>
                                      </tbody>
                                  </table>
                                  <button className="button btn-primary medium">PROCEED TO CHECKOUT</button>
                              </div>
                          </div>
                          <div className="col-sm-6">
                              <div className="form-checkout">
                                  <h5 className="form-title">SHIPPING ADDRESS</h5>
                                  <div className="row">
                                      <div className="col-sm-6">
                                          <p><input type="text" placeholder="First Name"/></p>
                                      </div>
                                      <div className="col-sm-6">
                                          <p><input type="text" placeholder="Last Name"/></p>
                                      </div>
                                  </div>
                                  <p><input type="text" placeholder="Company Name"/></p>
                                  <p><input type="text" placeholder="Address"/></p>
                                  <p><input type="text" placeholder="Town / City"/></p>
                                  <p><input type="text" placeholder="State / Country"/></p>
                                  <div className="row">
                                      <div className="col-sm-6">
                                          <p><input type="text" placeholder="Post Code"/></p>
                                      </div>
                                      <div className="col-sm-6">
                                          <p><input type="text" placeholder="Phone"/></p>
                                      </div>
                                  </div>
                              </div>
                              <div className="form-checkout checkout-payment">
                                  <h5 className="form-title">YOUR PAYMENT</h5>
                                  <div className="payment_methods">
                                      <div className="payment_method">
                                          <label><input name="payment_method" type="radio"/>DIRECT BANK TRANSFER</label>
                                          <div className="payment_box">
                                             Nulla laoreet ipsum dignissim magna maximus, vitae euismod turpis iaculis. Sed phare tra lacus sit amet dui consequat dignissim bibendum ullamcorper sem.
                                          </div>
                                      </div>
                                      <div className="payment_method">
                                          <label><input name="payment_method" type="radio"/>CASH ON DELIVERY</label>
                                          <div className="payment_box">
                                             Nulla laoreet ipsum dignissim magna maximus, vitae euismod turpis iaculis. Sed phare tra lacus sit amet dui consequat dignissim bibendum ullamcorper sem.
                                          </div>
                                      </div>
                                      <div className="payment_method">
                                          <label><input name="payment_method" type="radio" />PAYPAL</label>
                                          <div className="payment_box">
                                             Nulla laoreet ipsum dignissim magna maximus, vitae euismod turpis iaculis. Sed phare tra lacus sit amet dui consequat dignissim bibendum ullamcorper sem.
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>


    );

  }
}


export default payment;
