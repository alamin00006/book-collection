import React, { useState } from 'react';
import Cart from './Cart';

const AddToCart = ({carts, setCarts, totalPrice, setTotalPrice}) => {
   

    return (
        <div className='container cart-item-page mt-3'>
          <div className='row cart-page gx-5'>
          <div className='col-lg-8'>
           {
                carts.map(cart =><Cart cart={cart} key={cart._id} carts={carts} setCarts={setCarts} totalPrice={totalPrice} setTotalPrice={setTotalPrice}></Cart>)
               
            }
           </div>
           <div className='col-lg-4 bg-white p-5 cart-total-part'>
            <h6 className='mb-4 fs-5'>Checkout Summary</h6>
            <div className='d-flex justify-content-between'>
                <p>Sub Total</p>
                <p>{totalPrice}</p>
            </div>
            <div className='d-flex justify-content-between'>
                <p>Shipping</p>
                <p>250</p>
            </div>
            <div className='d-flex justify-content-between'>
                <p>Total</p>
                <p>250</p>
            </div>
            <div className='d-flex justify-content-between'>
                <p>Payable Total</p>
                <p>250</p>
            </div>
            <div className='text-center checkout-button mt-3'>
                <button className='btn text-center text-white'>Place Order</button>
            </div>
           </div>
          </div>

        </div>
    );
};

export default AddToCart;