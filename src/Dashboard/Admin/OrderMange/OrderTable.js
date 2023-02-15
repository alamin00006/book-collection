import axios from 'axios';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { toast,ToastContainer } from 'react-toastify';
import DeleteIcon from '../../../svgIcons/DeleteIcon';
import DetailsIcon from '../../../svgIcons/DetailsIcon';
import EditIcon from '../../../svgIcons/EditIcon';
import OrderStatusUpdate from './OrderStatusUpdate';
import SeeOrderDetails from './SeeOrderDetails';
// import './ProductTable.css'

const OrderTable = ({refetch,setOrderStatusUpdate, orderStatusUpdate, order, index, setOrderDelete, orderDelete}) => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
const handleDelete = async()=>{

    try{
        const data = await axios.delete(`http://localhost:5000/api/v1/order/${orderDelete?._id}`,{
        headers: {
          'Content-Type': 'application/json'
        }
      });
      refetch()
        toast.success(data?.data?.message)
         
       }catch(error){
        return toast.error(error.response.data.message)
       }
      
}
const shipping = 50;
const total = order?.orderItems?.[0]?.cartTotalAmount + shipping; 

    return (
    <tr>
        <td>{index+1}</td>
        <td>{order?.name}</td>
        <td>{order?.paymentType}</td>
        <td className='text-center'>{order?.orderItems?.length}</td>
        <td className='text-center'>Tk {total}</td>
        <td>
            <h6 className={`${order?.orderStatus === "Approved"?"order-status":'text-danger'}`}>{order?.orderStatus}</h6>
           <OrderStatusUpdate setOrderStatusUpdate={setOrderStatusUpdate} orderStatusUpdate={orderStatusUpdate} order={order} refetch={refetch}/>
        </td>
        <td className='text-center'>
            
            <div>
                <Button className='details-icon' onClick={handleShow} >
                    <span>
                    <DetailsIcon/>
                    </span>
                </Button>
                  
                <SeeOrderDetails order={order} setShow={setShow} show={show}/>
                </div>
            </td>
        <td>
            <div>
                    <div onClick={setOrderDelete(order)} className='ms-5'>
                    <span onClick={handleDelete} className='delete-icon'>
                    <DeleteIcon/>
                    </span>
                        
                    </div>
            </div>
        </td>
       
        </tr>
      
    );
};

export default OrderTable;