import React, {useEffect, useState } from 'react';
import Loading from '../Loading/Loading';
import Table from 'react-bootstrap/Table';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import './Order.css'
import useUser from '../../Hooks/useUser';
import axios from 'axios';

const Order = () => {
  // const [user,refetch,isLoading] = useUser();
  const [user, setUser] = useState({})
  const token = localStorage.getItem("token");
  // console.log(user?.email)
    const navigate = useNavigate()
    // const cart = useSelector((state) => state.cart);
    const shipping = 50;
    const [myProducts2, setProducts2] = useState([]);

  const { isLoading } = useQuery(
    "data",
    async () => {
      const { data } = await axios.get(
        "http://localhost:5000/api/v1/user/me",{
          headers: {
                      Authorization : `Bearer ${token}`
                    },
        }
        
      );
      return setUser(data?.data);
    },
    {
      refetchInterval: 6000
    }
  );


try {
  useEffect(() =>{
 async function fetchData(){
 await fetch(`http://localhost:5000/api/v1/order/${user?.email}`)
  .then(res =>res.json())
  .then(data => setProducts2(data?.data));
 }
 fetchData()    
  },[user,token])
} catch (error) {
  console.log(error)
}

// if(isLoading){
//   <Loading></Loading>
// }

const orderDetails =(_id) =>{
  navigate(`/order/${_id}`)

  }

 return (
        <div className='container'>
        
        {
          myProducts2.length <=0?<h5 className='mt-5 text-danger'>দুঃখিত আপনি আমাদের কাছে এখন পর্যন্ত কোনো অর্ডার করেন নি</h5>:
          <div className="order-table">
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
      
      {
        myProducts2?.map((data, index) =>{
          return(
            <tr key={data?._id}>
               <td>{data?._id.slice(13)}</td>
               <td>{data?.updatedAt.split('T')?.[0]}</td>
               <td className='text-danger fw-bold'>{data?.orderStatus}</td>
               <td className="fw-bold">{data?.orderItems?.[0]?.cartTotalAmount+shipping}</td>
               <td>{data?.paymentType}</td>
               <td className='see-details' onClick={()=>orderDetails(data?._id)}>See Details</td>
            </tr>
          )
        })
      }
        
        </tbody>
    </Table>
          
          </div>

          
        }
          
        </div>
    );
};

export default Order;
