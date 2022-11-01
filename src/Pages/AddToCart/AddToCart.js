import React from 'react';
import Cart from './Cart';

const AddToCart = ({carts}) => {
   
    return (
        <div className='container'>
            {
                carts.map(cart =><Cart cart={cart} key={cart._id}></Cart>)
            }
        </div>
    );
};

export default AddToCart;