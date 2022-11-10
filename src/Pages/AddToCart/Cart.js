import React, { useState } from 'react';
import './Cart.css'
import { TrashIcon } from '@heroicons/react/24/outline'
import { PlusSmallIcon } from '@heroicons/react/24/outline'
import { MinusSmallIcon } from '@heroicons/react/24/outline'
const Cart = ({cart, carts, setCarts, totalPrice, setTotalPrice}) => {

    const [count, setCount] = useState(1);
    const [cartAmount, setCartAmount] = useState(cart.price*count);
   
    
    const handleCountInc = () =>{
        setCount(count+1);
        setCartAmount(cart.price*count);
       
        setTotalPrice(totalPrice+cart.price)
    }
    const handleCountDec = () =>{
       if(count===1){
        return;
       }
       else{
        setCount(count-1);
        setCartAmount(count*cart.price);
       }
    }

    const handleDeleteCart = (id)=>{
     const cartItem = carts.filter(cart =>cart._id !== id);
     setCarts(cartItem);
    }
    return (
        <div className='row p-5 cart-item border'>
            <div className='col-lg-6 d-flex'>
                <div className='cart-image'>
                <img src={cart.picture} alt=''/>
                </div>
                <div className='ms-4'>
                    <p>মোহাম্মদ আলীর বাংলাদেশ বিজয়</p>
                    <p>মুহাম্মদ লুৎফুল হক</p>
                </div>
            </div>
            <div className='col-lg-6 d-flex mt-5'>
             <div className='cart-input-part'>
              <MinusSmallIcon onClick={handleCountDec} className='cart-minus-icon'/>
              <input type="text" value={count} className="cart-input"/>
              <PlusSmallIcon onClick={handleCountInc} className="cart-plus-icon"/>
             </div>
             <div className='d-flex'>
                <p>Tk {cartAmount}</p>
                <p onClick={()=>handleDeleteCart(cart._id)}><TrashIcon className='cart-trash-icon ms-5'/></p>
             </div>
            </div>
        </div>
        
    );
};

export default Cart;