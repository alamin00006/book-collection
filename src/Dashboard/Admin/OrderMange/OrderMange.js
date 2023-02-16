import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAllOrder from '../../../Hooks/useAllOrder';
import { ToastContainer } from 'react-toastify';
// import EditProductModal from './EditProductModal';
import OrderTable from './OrderTable';
import './OrderTable.css'
// import OrderPagination from './OrderPagination';

const OrderManage = () => {

    const [orderDelete, setOrderDelete] = useState(null)

    const [allOrder, refetch] = useAllOrder();
    // console.log(allOrder?.data?.length)
    // const [pageCount, setPageCount] = useState(0)
    // const [page, setPage] = useState(1)

   
    useEffect(() =>{
      if(allOrder?.data.length >0){
        const totalPageCount = Math.ceil(allOrder?.data.length/5);
        setPageCount(totalPageCount);
      }
    },[allOrder])
    console.log(pageCount)
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
             allOrder?.data?.map((order, index) => <OrderTable order={order} index={index} setOrderDelete={setOrderDelete} orderDelete={orderDelete}  refetch={refetch}></OrderTable>)
          } 
           <ToastContainer className="toast-position"
        position="top-center"/>
      </tbody>
    </Table>
    {/* <OrderPagination/> */}
     <div className='pagination'>
     {
        [...Array(pageCount).keys()].map(number =><button
           onClick={()=>setPage(number)}
           className={page===number?'page-selected':''}>
            {number+1}</button>)
      }
     </div>
        </div>
    )
};

export default OrderManage;