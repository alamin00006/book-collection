import React from 'react';
import payment from '../../Images/payment.jpg'
import '../Payment/Payment.css'
const Payment = () => {
    return (
        <div className='container payment-option'>
           <div>
            <span>WE RECIEVE PAYMENT</span>
           </div>
           <div>
           <img className='payment-img' src={payment} alt=''/>
           </div>
        </div>
    );
};

export default Payment;