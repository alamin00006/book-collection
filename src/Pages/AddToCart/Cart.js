import React, { useState } from 'react';
import './Cart.css'
import { TrashIcon } from '@heroicons/react/24/outline'
import { PlusSmallIcon } from '@heroicons/react/24/outline'
import { MinusSmallIcon } from '@heroicons/react/24/outline'
import { removeFromDb } from '../../utilitis/cartStorage';



const Cart = ({cart, carts, setCarts}) => {
    // const [reload, setReload] = useState(true);
    let [count, setCount] = useState(cart.quantity);

    // const [cartAmount, setCartAmount] = useState(cart.price*cart.quantity);
   
    const handleCountInc = () =>{
    
        setCount(parseInt(++ count));
         const quantity = parseInt(count);
      
         const price = cart.price*parseInt(count);
         const totalPrice = price;

        const newQuantity = {quantity, totalPrice };
        const url = `http://localhost:5000/carts/${cart._id}`;
              fetch(url, {
                  method: 'PUT',
                  headers: {
                      'content-type': 'application/json'
                  },
                  body: JSON.stringify(newQuantity)
              })
              .then(res => res.json())
              .then(data =>{
              
              })  

    }
    const handleCountDec = () =>{
       if(count<=1){
        return;
       }
       setCount(parseInt(-- count));
       
       const quantity = parseInt(count);
       const price = cart.price*parseInt(count);
       const totalPrice = price;

      const newQuantity = {quantity, totalPrice };
       const url = `http://localhost:5000/carts/${cart._id}`;
             fetch(url, {
                 method: 'PUT',
                 headers: {
                     'content-type': 'application/json'
                 },
                 body: JSON.stringify(newQuantity)
             })
             .then(res => res.json())
             .then(data =>{
              
             })
   
    }

    const handleDeleteCart = (id)=>{
        removeFromDb(id)
        const url = `http://localhost:5000/carts/${id}`;
            fetch(url , {
                method: "DELETE",
              }).then(res => res.json())
                .then(data => {
                    if(data.deletedCount >0 ){
                       const reaminingData = carts.filter(cart => cart._id !==id);
                       setCarts(reaminingData)
                       
                      
                    }
                })

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
              <MinusSmallIcon onClick={handleCountDec}  className='cart-minus-icon border-0 rounded'/>
              <input type="text" value={cart.quantity} disabled className="cart-input rounded"/>
              <PlusSmallIcon  onClick={handleCountInc}  className="cart-plus-icon border-0 rounded"/>
             </div>
             <div className='d-flex'>
                <p>Tk {cart.totalPrice}</p>
                <p onClick={()=>handleDeleteCart(cart._id)}><TrashIcon className='cart-trash-icon ms-5 '/></p>
             </div>
            </div>
        </div>
        
    );
};

export default Cart;