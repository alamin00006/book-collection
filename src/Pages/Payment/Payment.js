import React from 'react';
import payment from '../../Images/payment.jpg'
import '../Payment/Payment.css'
const Payment = () => {
    return (
        <div className='container payment-option'>
           <div>
            <h3>WE RECIEVE PAYMENT</h3>
           </div>
           <div>
           <img className='payment-img' src={payment} alt=''/>
           </div>
        </div>
    );
};

export default Payment;