import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import useAllOrder from '../../../Hooks/useAllOrder';
import { ToastContainer } from 'react-toastify';
// import EditProductModal from './EditProductModal';
import OrderTable from './OrderTable';
import './OrderTable.css'

const OrderManage = () => {

    const [orderStatusUpdate, setOrderStatusUpdate] = useState(false)
    const [orderDelete, setOrderDelete] = useState(null)

    const [allOrder, refetch] = useAllOrder()
 
    return (
        <div>
            <Table striped bordered responsive className='mt-5'>
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
             allOrder?.data?.map((order, index) => <OrderTable order={order} index={index} setOrderStatusUpdate={setOrderStatusUpdate} setOrderDelete={setOrderDelete} orderDelete={orderDelete} orderStatusUpdate={orderStatusUpdate} refetch={refetch}></OrderTable>)
          } 
           <ToastContainer className="toast-position"
        position="top-center"/>
      </tbody>
    </Table>
    {/* <EditProductModal productEdit={productEdit} show={show} setShow={setShow} handleClose={handleClose}/>
  */}
        </div>
    )
};

export default OrderManage;