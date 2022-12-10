import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';


const OrderDetails = () => {
    const [user] = useAuthState(auth);
    const [myProducts2, setProducts2] = useState({});
    const {detailsId} = useParams()
    const shipping = 50;
const { isLoading, refetch} = useQuery(['users', user], () => fetch(`http://localhost:5000/orderDetails/${detailsId}`, {
    method: "GET",
 
}).then(res =>{
  if(res.status ===401 || res.status === 403){
            // Navigate('/');
            // signOut(auth);
            // localStorage.removeItem('accessToken')
            }
         return res.json()
})
.then(data =>{
  setProducts2(data)
//   console.log(data.items)
  
}))
if(isLoading){
  <Loading></Loading>
}
const total = myProducts2?.items?.cartTotalAmount + shipping;
refetch()

    return (
        <div className='container'>
            <div className='row'>
                  <div className='col-lg-3'>
                      <h4>My Account</h4>
                  </div>
            <div className='col-lg-9'>
            {   
                myProducts2?.items?.cartItems?.map((order, index) =>{
                    // console.log(data)
                    return(
                        <div key={index}>
                        <div className='row'>
                             <div className='col-lg-4'>
                                <p>{order.children}</p>
                             </div>
                             <div className='col-lg-4'>
                             <p>{order.price} x {order.cartQuantity}</p>
                             </div>
                             <div className='col-lg-4'>
                                <p>{order.singleCartTotal}</p>
                             </div>
                          
                        </div>
                    </div>
                    )
                })
                
            }
                    <div className='d-flex justify-content-between'>
                        <p>Subtotal: </p>
                        <p>{myProducts2?.items?.cartTotalAmount}</p>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <p>Shipping: </p>
                        <p>{shipping}</p>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <p>Total: </p>
                       
                        <p>{total}</p>
                    </div>
                    <div>
                        <h4>Shipping Address</h4>
                         <p>{myProducts2.name}</p>
                         <p>{myProducts2.phone}</p>
                         <p>{myProducts2.address}</p>
                         <p>{myProducts2.district}</p>
                         <p>{myProducts2.city}</p>
                         <p>{myProducts2.zip}</p>
                         <p>Bangladesh</p>
                    </div>
            </div>
            </div>
        </div>
    );
};

export default OrderDetails;