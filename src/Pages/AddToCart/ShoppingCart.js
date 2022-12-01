import React, { useState } from 'react';
import './Cart.css'
import { TrashIcon } from '@heroicons/react/24/outline'
import { PlusSmallIcon } from '@heroicons/react/24/outline'
import { MinusSmallIcon } from '@heroicons/react/24/outline'
import { useDispatch, useSelector } from 'react-redux';
import { decreaseCart, getTotals, incrementCart, removeFromCart } from '../store/reducers/cartSlice';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// {cart, carts, setCarts, setTotal, total, data}
const ShoppingCart = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    // const [reload, setReload] = useState(true);
    // let [count, setCount] = useState(cart.quantity);
    const cart = useSelector((state) => state.cart);
    const{cartTotalAmount}=useSelector((state) => state.cart)
    useEffect(() => {
        dispatch(getTotals());
      }, [cart, dispatch]);

    let shipping = 50;
    const finalCartAmount = shipping + cartTotalAmount;

    return (
            <div className='container'>
           {
            cart?.cartItems?.length !== 0?<div className='row'>
            <div className='col-lg-8'>
            {
                cart.cartItems.map((data, index) =>
                <div key={index} className='row p-5 cart-item border'>
                    <div className='col-lg-6 d-flex'>
                        <div className='cart-image'>
                        <img src={data.image} alt=''/>
                        </div>
                        <div className='ms-4'>
                            <p>মোহাম্মদ আলীর বাংলাদেশ বিজয়</p>
                            <p>মুহাম্মদ লুৎফুল হক</p>
                        </div>
                    </div>
                    <div className='col-lg-6 d-flex mt-5'>
                     <div className='cart-input-part'>
                      <MinusSmallIcon onClick={()=>dispatch(decreaseCart(data))} className='cart-minus-icon border-0'/>
                      <input type="text" value={data.cartQuantity} readOnly className="cart-input "/>
                      <PlusSmallIcon  onClick={()=>{
                        dispatch(incrementCart(data))
                       
                      }}  className="cart-plus-icon border-0"/>
                     </div>
                     <div className='d-flex'>
                        <p>Tk {data.singleCartTotal}</p>
                        <p ><TrashIcon onClick={() =>dispatch(removeFromCart(data))} className='cart-trash-icon ms-5 '/></p>
                       
                     </div>
                    </div>
                </div>)
                }
            </div>
                <div className='col-lg-4 col-md-4 col-sm-12 p-5 cart-total-part'>
            <h6 className='mb-4 fs-5 checkout-title'>Checkout Summary</h6>
            <div className='d-flex justify-content-between'>
                <p>Sub Total</p>
                <p>{cartTotalAmount}</p>
            </div>
            <div className='d-flex justify-content-between'>
                <p>Shipping</p>
                <p>{shipping }</p>
            </div>
            <div className='d-flex justify-content-between'>
                <p>Total</p>
                <p>{finalCartAmount}</p>
            </div>
            <div className='d-flex justify-content-between'>
                <p>Payable Total</p>
                <p>{finalCartAmount}</p>
            </div>
            <div className='text-center checkout-button mt-3'>
                <button className='btn text-center'>
                    <Link className='text-white' to='/shipping'>Proceed To Checkout</Link>
                </button>
            </div>
            <div className='mt-3'>
            <form>
            <label> If You Have a Promo Code</label>
            <input type='text' className='w-100 rounded' placeholder='Enter Your Promo Code'/>
            <input type='submit' className='bg-primary text-white mt-1'/>
            </form>
           </div>
           </div>
           </div>:<div className='bg-warning p-5 text-center'>
                <h6 className='text-white fs-5 fw-bolder'>Your Cart is Empty</h6>
            <button className='text-center bg-info text-white border-0 px-5 py-2 fs-5 rounded' onClick={() => navigate('/')}>Continue Shipping</button>
            </div>
            
           }
          
        </div>
        
    );
};

export default ShoppingCart;