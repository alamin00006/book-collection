import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useSelector } from 'react-redux';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import UserHandle from '../UserHandle/UserHandle';
import UserOrder from './OrderDetails';
import Table from 'react-bootstrap/Table';
import { useQuery } from 'react-query';
const Order = () => {
    const [user] = useAuthState(auth);
    const cart = useSelector((state) => state.cart);
    // if(!user){
    //    return  <Loading></Loading>
    // }
    const [myProducts2, setProducts2] = useState([]);
//     useEffect(() =>{
//       fetch(`http://localhost:5000/order/${user?.email}`)
//      .then(res =>res.json())
//      .then(data => setProducts2(data));
//  },[user])
const { isLoading, refetch} = useQuery(['users', user], () => fetch(`http://localhost:5000/order/${user?.email}`, {
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
  
}))
if(isLoading){
  <Loading></Loading>
}
refetch()


 return (
        <div className='container'>
          <div className='row'>
          <div className='col-lg-3'>
            <h4>My Account</h4>
          </div>
          <div className='col-lg-9'>
          <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>Date</th>
          <th>State</th>
          <th>Tk</th>
          <th>Payment Method</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
      {myProducts2.map((data, index) =>{
        // console.log(data)
        return(
          <tr key={index}>
          <td>{data._id}</td>
          <td>date</td>
          <td>Processing</td>
          <td>{data?.items?.cartTotalAmount}</td>
          <td>Nagad</td>
          <td>See Details</td>
          {/* <td>{data.user}</td> */}
        </tr>
        )
      })}
        
        </tbody>
    </Table>
          
          </div>

          </div>
          
        </div>
    );
};

export default Order;