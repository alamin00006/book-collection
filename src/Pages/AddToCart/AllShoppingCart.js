import React from 'react';
import { TrashIcon } from '@heroicons/react/24/outline'
import { PlusSmallIcon } from '@heroicons/react/24/outline'
import { MinusSmallIcon } from '@heroicons/react/24/outline'
import { useDispatch, useSelector } from 'react-redux';
import { decreaseCart, incrementCart, removeFromCart } from '../store/reducers/cartSlice';
const AllShoppingCart = ({data}) => {
    const dispatch = useDispatch();

    return (
        <div className='row p-5 cart-item border'>
                    <div className='col-lg-6 d-flex'>
                        <div className='cart-image'>
                        <img src={`http://localhost:5000/${data.image}`} alt=''/>
                        </div>
                        <div className='ms-4'>
                            <p>{data.nameB}</p>
                            <p>{data.nameB}</p>
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
                     <div className='d-flex justify-content-center'>
                        <p>Tk {data.singleCartTotal}</p>
                        <p ><TrashIcon onClick={() =>dispatch(removeFromCart(data))} className='cart-trash-icon ms-5 '/></p>
                       
                     </div>
                    </div>
                </div>)

};

export default AllShoppingCart;