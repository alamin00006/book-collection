import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import UserHandle from '../UserHandle/UserHandle';
import UserOrder from './UserOrder';

const Order = ({carts}) => {
    const [user] = useAuthState(auth);
    if(!user){
       return  <Loading></Loading>
    }
    return (
        <div className='container'>
          {carts.map(order =><UserOrder order={order} key={order._id}></UserOrder>)}
        </div>
    );
};

export default Order;