
import React from 'react';
import { Modal, Table } from 'react-bootstrap';
import editProduct from '../AddProduct/Product.module.css'
import nafiuenLogo from '../../../Images/nafieun-logo.jpeg'
import { PrinterIcon } from '@heroicons/react/24/outline';
const SeeOrderDetails = ({show, setShow, order}) => {

const handleClose = () => setShow(false);
const shipping = 50;
const total = order?.orderItems?.[0]?.cartTotalAmount + shipping;

    return (
       <div className='container'>
      

      <Modal className={editProduct.modal} show={show} onHide={handleClose} backdrop="static"
        keyboard={false}>
          <Modal.Header closeButton>
                <Modal.Title className=''>Order Details</Modal.Title>
          </Modal.Header>
          <Modal.Body className='rounded'>
          
          <div className=''>
                  <div className='thanks px-3 py-2  rounded'>
                      <h6>Thank you {order?.name}, Your order have been received !
                      </h6>
                  </div>
            <div className=''>
            <div className='d-lg-flex flex-sm-none justify-content-between invoice-part p-4 mt-2'>
                 <h6>INVOICE</h6>
                 <div className=''>
                    <div className='d-flex align-items-center'>
                        <div className='mb-2'>
                            <img className='invoice-logo' src={nafiuenLogo} alt=''/>
                        </div>
                    </div>
                     <div className='our-address'>
                      <p>Bangla Bazar, Dhaka</p>
                      <p>105 No. House</p>
                     </div>
                 </div>
                 
            </div>
            
            <div className='d-lg-flex flex-sm-none justify-content-between invoice-part border-top border-white p-4'>
               <div>
                   <h6>ORDER DATE</h6>
                   <p>{order?.updatedAt.split('T')?.[0]}</p>
               </div>
                   <div>
                        <h6>INVOICR NO.</h6>
                        <p>#{order?.phone?.slice(6,11)}</p>
                   </div>
                 <div className=''>
                    <div className='d-flex align-items-center'>
                      
                        <h6>INVOICE TO</h6>
                    </div>
                     <div className='our-address'>
                     
                     <h6>{order.name}</h6>
                     <p> District : {order.district}</p>
                     <p>City : {order.city}</p>
                      <p>Zip Code : {order.zip? order.zip:'...'}</p>
                      <p>Phone : {order.phone}</p>
                                           
                     </div>
                 </div>
                 
            </div>
            <div className='bg-white p-2'>
               <Table responsive hover bordered size="sm">
                    <thead>
                        <tr className='text-center'>
                        <th>#</th>
                        <th>PRODUCT</th>
                        <th>PRODUCT NAME</th>
                        <th>QUANTITY</th>
                        <th>ITEM PRICE</th>
                        <th>AMOUNT</th>
                        </tr>
                    </thead>
                    <tbody>
                    {   
                order?.orderItems?.[0]?.cartItems?.map((order, index) =>{
                  return(
                        <tr className='text-center'>
                            <td>{index+1}</td>
                            <td className='order-image'><img src={`http://localhost:5000/${order?.image?.[0]}`} alt=""/></td>
                            <td>{order.nameB}</td>
                            <td className='fw-bolder'> {order.cartQuantity}</td>
                            <td className='fw-bolder'>{order.price}</td>
                            <td className='total-quantity-amount fw-bolder'>{order.singleCartTotal}</td>
                        </tr>
         
                    )
                })
                
            }
                   
            </tbody>
    </Table>
               </div>
         
                <div className='d-lg-flex flex-sm-none justify-content-between invoice-footer p-4 text-center'>
                    <div>
                       <h6>PAYMENT METHOD</h6>
                       <p>{order.paymentType}</p>
                    </div>
                    <div>
                       <h6>SHIPPING COST</h6>
                       <p className='fs-5 fw-bolder invoice-shipping-cost'>50</p>
                    </div>
                    <div>
                       <h6>TOTAL AMOUNT</h6>
                       <p className='final-total-amount fw-bolder fs-5'>{total} TK</p>
                    </div>

                </div>
                <div className='invoice-details-address text-center border py-2 d-none d-lg-block'>
                   
                    <p className='fw-bolder'> Customer Details Address :</p>
                    <p className=''>{order.address}</p>
                   
                </div>
                <div className='d-flex justify-content-end print-invoice mt-1'>
                    <button disabled className='fw-bolder'>Print Invoice
                        <PrinterIcon className='printer-icon ms-2'/>
                    </button>
                </div>
            </div>
        </div>  
        </Modal.Body>
        
      </Modal>
        </div>
    );
};

export default SeeOrderDetails;