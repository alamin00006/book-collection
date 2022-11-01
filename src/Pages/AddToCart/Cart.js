import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
            <h1>{cart?.name}</h1>
        </div>
    );
};

export default Cart;