import React from 'react';
import payment from '../../Images/payment2.png'
import '../Payment/Payment.css'
const Payment = () => {
    return (
        <div className='container payment-option'>
           <div>
            <h3>We Receive Payment</h3>
           </div>
           <div>
           <img className='payment-img' src={payment} alt=''/>
           </div>
        </div>
    );
};

export default Payment;