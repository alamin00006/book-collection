import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Shipping.css'
const Shipping = ({carts,setCarts}) => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate()
    let shipping = 50;
    let total = 0;
   
   for(const product of carts){
      total = total+product.totalPrice;
   }
   const finalTotal = total+shipping;
    return (
        <div className=' container'>
    {
        user?  <div class=" row gx-5">
        <div className='col-lg-6 shipping-address'>
          <form action="/action_page.php">
          
            <div class="row">
              <div class="col-50">
                <h3>Billing Address</h3>
                <label for="fname"><i class="fa fa-user"></i> Full Name</label>
                <input type="text" id="fname" name="firstname" placeholder="John M. Doe"/>
                <label for="email"><i class="fa fa-envelope"></i> Email</label>
                <input type="text" id="email" name="email" placeholder="john@example.com"/>
                <label for="adr"><i class="fa fa-address-card-o"></i> Address</label>
                <input type="text" id="adr" name="address" placeholder="542 W. 15th Street"/>
                <label for="city"><i class="fa fa-institution"></i> City</label>
                <input type="text" id="city" name="city" placeholder="New York"/>
    
                <div class="row">
                  <div class="col-50">
                    <label for="state">State</label>
                    <input type="text" id="state" name="state" placeholder="NY"/>
                  </div>
                  <div class="col-50">
                    <label for="zip">Zip</label>
                    <input type="text" id="zip" name="zip" placeholder="10001"/>
                  </div>
                </div>
              </div>
    
              <div class="col-50">
                <h3>Payment</h3>
                <label for="fname">Accepted Cards</label>
                <div class="icon-container">
                  <i class="fa fa-cc-visa" style={{color:'navy'}}></i>
                  <i class="fa fa-cc-amex" style={{color:"blue"}}></i>
                  <i class="fa fa-cc-mastercard" style={{color:"red"}}></i>
                  <i class="fa fa-cc-discover" style={{color:'orange'}}></i>
                </div>
                <label for="cname">Name on Card</label>
                <input type="text" id="cname" name="cardname" placeholder="John More Doe"/>
                <label for="ccnum">Credit card number</label>
                <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"/>
                <label for="expmonth">Exp Month</label>
                <input type="text" id="expmonth" name="expmonth" placeholder="September"/>
                <div class="row">
                  <div class="col-50">
                    <label for="expyear">Exp Year</label>
                    <input type="text" id="expyear" name="expyear" placeholder="2018"/>
                  </div>
                  <div class="col-50">
                    <label for="cvv">CVV</label>
                    <input type="text" id="cvv" name="cvv" placeholder="352"/>
                  </div>
                </div>
              </div>
              
            </div>
            <label>
              <input type="checkbox" checked="checked" name="sameadr"/> Shipping address same as billing
            </label>
            <input type="submit" value="Continue to checkout" class="btn"/>
          </form>
        </div>
        <div className="col-lg-6 p-5 cart-total-part">
        <h6 className='mb-4 fs-5 checkout-title'>Checkout Summary</h6>
                <div className='d-flex justify-content-between'>
                    <p>Sub Total</p>
                    <p>{total}</p>
                </div>
                <div className='d-flex justify-content-between'>
                    <p>Shipping</p>
                    <p>{shipping }</p>
                </div>
                <div className='d-flex justify-content-between'>
                    <p>Total</p>
                    <p>{finalTotal}</p>
                </div>
                <div className='d-flex justify-content-between'>
                    <p>Payable Total</p>
                    <p>{finalTotal}</p>
                </div>
                <div className='text-center checkout-button mt-3'>
                    <button className='btn text-center'>
                        <Link className='text-white' to='/shipping'>Place Order</Link>
                    </button>
                </div>
               </div>
      </div>:navigate('/')
    }
  </div>
  



    );
};

export default Shipping;