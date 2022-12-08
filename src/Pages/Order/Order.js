import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useSelector } from 'react-redux';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import UserHandle from '../UserHandle/UserHandle';
import UserOrder from './UserOrder';

const Order = () => {
    const [user] = useAuthState(auth);
    const cart = useSelector((state) => state.cart);
    // if(!user){
    //    return  <Loading></Loading>
    // }
    const [myProducts2, setProducts2] = useState([]);
    useEffect(() =>{
      fetch('http://localhost:5000/order')
     .then(res =>res.json())
     .then(data => setProducts2(data));
 },[cart])


    return (
        <div className='container'>
          <div className='row'>
          <div className='col-lg-3'>
            <h4>My Account</h4>
          </div>
          <div className='col-lg-9'>
          {myProducts2.map((data, index) =><UserOrder data={data} key={index}></UserOrder>)}
          </div>

          </div>
          
        </div>
    );
};

export default Order;