import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Shipping.css'
import cod from '../../Images/cod.png'
import bkash from '../../Images/bkash.png'
import nagad from '../../Images/Nagad-Logo.png'

const Shipping = ({carts,setCarts}) => {


  const [showCashOn, setShowCashOn]= useState(true);
  const [showBkash, setShowBkash]= useState(false);
  const [showNagad, setShowNagad]= useState(false);

  const [isActive1, setIsActive1]= useState(true);
  const [isActive2, setIsActive2]= useState(false);
  const [isActive3, setIsActive3]= useState(false);

  let toggleClassCheck1 = isActive1 ?'active':'';
  let toggleClassCheck2 = isActive2 ?'active':'';
  let toggleClassCheck3 = isActive3 ?'active':'';

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
        user?  <div class=" row">
        <div className='col-lg-8 shipping-address p-5 bg-white mt-4'>
          <form>
          
            <div class="">
              <div >
                <h3>Shipping Address</h3>
                <div className='row'>
                 <div className='col-lg-12 col-md-12 col-sm-12'>
                 <label for="fname"><i class="fa fa-user"></i> Full Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your Name"/>
                 </div>
                 <div className='col-lg-6 col-md-6 col-sm-12'>
                 <label for="email"><i class="fa fa-envelope"></i> Phone No</label>
                <input type="text" id="email" name="email" placeholder="Phone Number"/>
                 </div>
                 <div className='col-lg-6 col-md-6 col-sm-12'>
                 <label for="adr"><i class="fa fa-address-card-o"></i> Alternative Phone No</label>
                <input type="text" id="adr" name="address" placeholder="Alternative Phone No"/>
                 </div>
                 <div className='col-lg-6 col-md-6 col-sm-12'>
                 <label for="city"><i class="fa fa-institution"></i> Country</label>
                <input type="text" id="city" name="city" disabled value="Bangladesh" placeholder="Bangladesh"/>
                 </div>
                 <div className='col-lg-6 col-md-6 col-sm-12'>
                    <label for="state">District</label>
                    <input type="text" id="zip" name="zip" placeholder="District"/>
                  </div>
                  <div className='col-lg-6 col-md-6 col-sm-12'>
                  <label for="zip">Upazila</label>
                    <input type="text" id="zip" name="zip" placeholder="Upazila"/>
                  </div>
                  <div className='col-lg-6 col-md-6 col-sm-12'>
                  <label for="zip">Union</label>
                    <input type="text" id="zip" name="zip" placeholder="Union"/>
                  </div>
                  <div className='col-lg-12 col-md-12 col-sm-12'>
                   <p><label for="zip">Address</label></p>
                   <textarea className='rounded' rows="4" cols="87"></textarea>
                  </div>
                </div>
                </div>
     
            </div>
            
          </form>
          <h3>Payment Method</h3>
          <div className='row'>
            <div className='col-lg-12 col-md-12 col-sm-12'>
              <div className={`cash-on ${toggleClassCheck1} cash-on-delivery d-flex align-items-center`} onClick={() =>{
          return(
            setShowCashOn(true),
            setShowBkash(false),
            setShowNagad(false),
            setIsActive1(true),
            setIsActive2(false),
            setIsActive3(false)
          )
        }} >
          <div className='mb-3'>
            <input id='cash-on-delivery' style={{height:'25px', width:'25px'}} className='radio-button' type='radio' name='payment' value='Cash on Delivery' 
            
            />
          </div>
          <div className='ms-3 d-flex align-items-center'>
          <div>
            <label for='cash-on-delivery'> <img src={cod} alt=''/></label>
            </div>
              <div>
              <h6 className='ms-3 text-black'>Cash on Delivery</h6>
              </div>
          </div>
        </div>
          {
          showCashOn? <div>
          <h6>পণ্য ডেলিভারির পরে নগদ টাকা দিতে হবে।</h6>
          </div>:null
          }
        </div>
      <div className='col-lg-12 col-md-12 col-sm-12'>
      <div className={`bkash ${toggleClassCheck2} mobile-payment d-flex align-items-center`} onClick={() =>{
    return(
      setShowCashOn(false),
      setShowBkash(true),
      setShowNagad(false),
      setIsActive1(false),
      setIsActive2(true),
      setIsActive3(false)
    
    )
  }}>
    <div className='mb-4'>
      <input id='bkash' style={{height:'25px', width:'25px'}} className='radio-button' type='radio' name='payment' value="bkash"/>
      
    </div>
    <div className='ms-3'>
    <div>
      <label for='bkash'> <img src={bkash} alt=''/></label>
    </div>
  
    </div>
  </div>
      {
      showBkash?<div>
      <p>
      দয়া করে প্রথমে পেমেন্ট সম্পন্ন করে নিচের ফরম পূরণ পূর্বক আপনার অর্ডার প্লেস করুন।
      </p>
      <p>
      নিচের বিকাশ পারসোনাল নাম্বারে টোটাল চার্জ সেন্ড মানি করুণ। এরপর যে বিকাশ নাম্বার থেকে ট্রানজেকশনটি করা হয়েছে সেটি ও ট্রানজেকশন নাম্বার/আইডিটি নিচের ঘরে সংযুক্ত করুন।
      </p>
      <p>
      bKash Personal Number : 01622738449
      </p>
      <div className='d-flex align-items-center'>
          <div>
              <label>Bkash Number</label>
          </div>
          <div>
              <input className='ms-3 bkash-info-input' type='text' placeholder='017xxxxxxxxxxx'/>
          </div>
      </div>
      <div className='d-flex align-items-center'>
          <div>
              <label>bKash Tranx ID	</label>
          </div>
          <div>
              <input className='ms-3 mt-1 bkash-info-input' type='text' placeholder='8N6MM9REN'/>
          </div>
      </div>
      
      </div>:null
      }
</div>
        <div className='col-lg-12 col-md-12 col-sm-12' >
        <div className={`nagad ${toggleClassCheck3} mobile-payment d-flex align-items-center`} onClick={() =>{
      return(
        setShowCashOn(false),
        setShowBkash(false),
        setShowNagad(true),
        setIsActive1(false),
        setIsActive2(false),
        setIsActive3(true)
        
      )
    }} >
      <div className='mb-4'>
        <input id='nagad' style={{height:'25px', width:'25px'}} className='radio-button' type='radio' name='payment' value="nagad"/>
      </div>
      <div className='ms-3'>
      <div>
        <label for='nagad'> <img src={nagad} alt=''/></label>
      </div>
    
      </div>
    </div>
    {
     showNagad? <div>
        <p>
        দয়া করে প্রথমে পেমেন্ট সম্পন্ন করে নিচের ফরম পূরণ পূর্বক আপনার অর্ডার প্লেস করুন।
        </p>
        <p>
        নিচের নগদ পারসোনাল নাম্বারে টোটাল চার্জ সেন্ড মানি করুণ। এরপর যে নগদ নাম্বার থেকে ট্রানজেকশনটি করা হয়েছে সেটি ও ট্রানজেকশন নাম্বার/আইডিটি নিচের ঘরে সংযুক্ত করুন।
        </p>
        <p>
        Nagad Personal Number : 01622738449
        </p>
        <div className='d-flex align-items-center'>
            <div>
                <label>Nagad Number</label>
            </div>
            <div>
                <input className='ms-3 bkash-info-input' type='text' placeholder='017xxxxxxxxxxx'/>
            </div>
        </div>
        <div className='d-flex align-items-center'>
            <div>
                <label>Nagad Tranx ID	</label>
            </div>
            <div>
                <input className='ms-3 mt-1 bkash-info-input' type='text' placeholder='8N6MM9REN'/>
            </div>
        </div>
        
        </div>:null}
  </div>
  
  </div>
</div>
        <div className="col-lg-4 col-md-4 col-sm-12 p-5 cart-total-part">
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