import React, {useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import Table from 'react-bootstrap/Table';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import './Order.css'
const Order = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate()
    // const cart = useSelector((state) => state.cart);
    const shipping = 50;
    const [myProducts2, setProducts2] = useState([]);

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
const orderDetails =(_id) =>{
  navigate(`/orderDetails/${_id}`)

  }

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
       
        return(
          <tr key={index}>
          <td>{data._id}</td>
          <td>date</td>
          <td>Processing</td>
          <td>{data?.items?.cartTotalAmount+shipping}</td>
          <td>Nagad</td>
          <td className='see-details' onClick={()=>orderDetails(data._id)}>See Details</td>
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