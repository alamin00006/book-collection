import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import './OrderDetails.css'
import invoiceLogo from '../../Images/invoicelogo.png'
import { Table } from 'react-bootstrap';
import { PrinterIcon } from '@heroicons/react/24/outline'

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
            <div className=''>
                  <div className='thanks px-3 py-2 mt-5 rounded'>
                      <h6>Thank you {myProducts2?.name}, Your order have been received !
                      </h6>
                  </div>
            <div className=''>
            <div className='d-lg-flex flex-sm-none justify-content-between invoice-part p-4 mt-2'>
                 <h6>INVOICE</h6>
                 <div className=''>
                    <div className='d-flex align-items-center'>
                        <div className='mb-2'>
                            <img className='invoice-logo' src={invoiceLogo} alt=''/>
                        </div>
                        <h6>BOIFLY</h6>
                    </div>
                     <div className='our-address'>
                     
                     <h6>Book Shop</h6>
                      <p>Bangla Bazar, Dhaka</p>
                      <p>105 No. House</p>
                     </div>
                 </div>
                 
            </div>
            
            <div className='d-lg-flex flex-sm-none justify-content-between invoice-part border-top border-white p-4'>
               <div>
                   <h6>DATE</h6>
                   <p>29/12/2022</p>
               </div>
                   <div>
                        <h6>INVOICR NO.</h6>
                        <p>#{myProducts2?.phone?.slice(6,11)}</p>
                   </div>
                 <div className=''>
                    <div className='d-flex align-items-center'>
                      
                        <h6>INVOICE TO</h6>
                    </div>
                     <div className='our-address'>
                     
                     <h6>{myProducts2.name}</h6>
                     <p> District : {myProducts2.district}</p>
                     <p>City : {myProducts2.city}</p>
                      <p>Zip Code : {myProducts2.zip? myProducts2.zip:'...'}</p>
                      <p>Phone : {myProducts2.phone}</p>
                                           
                     </div>
                 </div>
                 
            </div>
            <div className='bg-white p-4'>
               <Table responsive hover className='border' size="sm">
                    <thead>
                        <tr className='text-center'>
                        <th>#</th>
                        <th>PRODUCT NAME</th>
                        <th>QUANTITY</th>
                        <th>ITEM PRICE</th>
                        <th>AMOUNT</th>
                        </tr>
                    </thead>
                    <tbody>
                    {   
                myProducts2?.items?.cartItems?.map((order, index) =>{
                        return(
                        <tr className='text-center'>
                            <td>{index+1}</td>
                            <td>{order.children}</td>
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
                       <p>COD</p>
                    </div>
                    <div>
                    <h6>DISCOUNT</h6>
                       <p>00</p>
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
                    <p className=''>{myProducts2.address}</p>
                   
                </div>
                <div className='d-flex justify-content-end print-invoice mt-1'>
                    <button className='fw-bolder'>Print Invoice
                        <PrinterIcon className='printer-icon ms-2'/>
                    </button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default OrderDetails;