import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { useQuery } from "react-query";
import { ToastContainer } from 'react-toastify';
import OrderTable from './OrderTable';
import './OrderTable.css'
// import OrderPagination from './OrderPagination';

const OrderManage = () => {
  const [orderDelete, setOrderDelete] = useState(null)
  const [pageCount, setPageCount] = useState(0)
  const [page, setPage] = useState(0)
  const [allOrder,setAllOrder] = useState([]);

  const { isLoading, refetch} = useQuery(['allOrder',page], () => fetch(`http://localhost:5000/api/v1/order?page=${page}&size=${5}`, {
      method: "GET",
  }).then(res =>res.json())
  .then(data =>{
    setAllOrder(data?.data?.orders)
    const totalPageCount = Math.ceil(data?.data?.orderTotalCount/5);
     setPageCount(totalPageCount)
 
  }))
  
    return (
        <div>
            <Table striped bordered responsive className='mt-3'>
      <thead>
        <tr className='text-center'>
          <th>#</th>
          <th>Customer</th>
          <th>Payment</th>
          <th>Items</th>
          <th>Total Tk</th>
          <th>Status</th>
          <th>Details</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        
      {
             allOrder?.map((order, index) => <OrderTable order={order} index={index} setOrderDelete={setOrderDelete} orderDelete={orderDelete}  refetch={refetch}></OrderTable>)
          } 
           <ToastContainer className="toast-position"
        position="top-center"/>
      </tbody>
    </Table>
    {/* <OrderPagination/> */}
     <div className='pagination d-flex justify-content-end'>
     {
        [...Array(pageCount).keys()].map((number,index) =><div key={index}>
          <button
           onClick={()=>setPage(number)}
           className={page===number?'page-selected':''}>
            {number+1}</button>
        </div>)
           
      }
     </div>
        </div>
    )
};

export default OrderManage;