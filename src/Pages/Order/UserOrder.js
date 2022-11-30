import React from 'react';

const UserOrder = ({order}) => {
    
    return (
        <div>
           <h1>order {order.name}</h1> 
           <h1>Quantity {order.quantity}</h1> 
        </div>
    );
};

export default UserOrder;