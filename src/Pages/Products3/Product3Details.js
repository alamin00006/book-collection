import React, { useEffect, useState } from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useParams } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import auth from '../../firebase.init';
import './Product3AllDetails.css'
import { BanknotesIcon } from '@heroicons/react/24/outline'
import { ArrowPathIcon } from '@heroicons/react/24/outline'
import { TruckIcon } from '@heroicons/react/24/outline'
import { TicketIcon } from '@heroicons/react/24/outline'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/24/solid'
import Product from '../Products/Product';
import Product3Related2 from './Product3Related2';
import Product3ToggleButton from './Product3ToggleButton';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/reducers/cartSlice';



const Product3Details = ({AddToCarts}) => {
  
    const {details3Id} = useParams()
    const [singleProduct3, setSingleProduct3] = useState({});
    const discount = parseFloat(singleProduct3.price / 100*singleProduct3.discount).toFixed(2);
    const discountPrice = singleProduct3.price - Math.ceil(discount);
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch()
   
  const Cart = cart.cartItems.find((cartItem) => cartItem._id === singleProduct3._id);
 
   
   
    const handleAddToCart = (product) => {
      dispatch(addToCart(product));
    };

    
 useEffect( () =>{
     const url = `http://localhost:5000/api/v1/product/${details3Id}`;
     fetch(url,{
       method:"GET",
     })
     .then(res =>res.json())
     .then(data =>setSingleProduct3(data?.data))
    
 }, [])

    return (
      <div class="container">
      <div class="details-page">
        <div class="container-fluid details-side">
          <div class="row ">
            
            <div class="col-lg-4 details-side-1">
              
              <div class="">
           
                <div class="tab-pane active" id="pic-1">
                  <img className='details-pic'   alt=''
                    src={`http://localhost:5000/${singleProduct3?.image}`} /></div>
                </div>
          
              
            </div>
            <div class="details col-lg-5 details-side-2">
              <h3 class="product-title">{singleProduct3.nameB}</h3>
              <p>লেখক : <span className='text-primary'>{singleProduct3.nameB}</span></p>
              <div>
              <StarIcon className=" star-icon "/>
              <StarIcon className=" star-icon "/>
              <StarIcon className=" star-icon "/>
              <StarIcon className=" star-icon "/>
              <StarIcon className=" star-icon "/>
              <span>/ 14 Reviews</span>
              </div>
              <p>Publisher : টেকনিক্যাল প্রকাশনী</p>
              {singleProduct3.discount !== 0? <p className='previous-tk'>TK.{singleProduct3.price}</p>:'' }
              <p>
                <span className='present-tk text-primary'>TK.{discountPrice}</span>
                <span className='text-warning save-tk'>You save TK.{discount} ({singleProduct3.discount}%)</span>
                </p>
              <p className='book-tag'>Electrical Licence Viva Guide</p>
               <div className='d-flex'>
                <div>
                <CheckCircleIcon className=" stock-in-icon "/>
                
                </div>
               <p>
               {singleProduct3.quantity !== 0 ? <span className='stock-in'>In Stock 
                </span> : (
            <span className=" stock-in">
              Stock Out
            </span>
          )}
                
               {
                singleProduct3.quantity !== 0? <span className='text-danger available-quantity'>({singleProduct3.quantity} copies Available)</span>:<span className='text-danger available-quantity'>This Product Stock 0 </span>
               }
               </p>
               </div>
                <div className='d-flex'>
                {/* <div>
                <button class="reading-button btn btn-default" type="button">একটু পড়ে দেখুন</button>
                </div> */}
                <div className='d-flex align-items-center add-to-button'>
                  <div>
                  <ShoppingCartIcon className="add-to-icon "/>
                  </div>
                  <div>
            
            
               {
                  Cart?<button class="add-to-cart add-To-Cart btn btn-default" type="button"><Link to="/cart">View Cart</Link></button>:<button onClick={() =>handleAddToCart(singleProduct3)} disabled={singleProduct3.quantity === 0 ? true : false} class="add-to-cart add-To-Cart btn btn-default text-white" type="button">Add to cart</button>
                 
                 }
              
                  </div>
                </div>
                
              </div>
            </div>
            <div className='col-lg-3 delivery-info'>
              <div className='d-flex'>
                <div>
                  <BanknotesIcon className=" cash-icon text-blue-500"/>
                  </div>
                  <p>Cash On Delivery</p>
              </div>
              <div className='d-flex'>
                <div>
                <ArrowPathIcon className=" return-icon text-blue-500"/>
                </div>
                 <p>7 Days Happy Return</p>
              </div>
               <div className='d-flex'>
                <div>
                <TruckIcon className=" delivery-icon text-blue-500"/>
                </div>
                <p>Delivery Charge Tk. 50(Online Order)</p>
               </div>
               <div className='d-flex'>
                <div>
                <TicketIcon className=" earn-icon text-blue-500"/>
                </div>
                <p>Purchase & Earn</p>
               </div>
               <div>
                <hr/>
                <h5>Related Products</h5>
                <Product3Related2/>
               </div>
            </div>
          </div>
        </div>
      </div>
      {/* Product Summary Section */}
      <div className='bg-white product-summary-section pb-5'>
      <div className=' mt-3 py-5 px-4'>
      <h5 className='mb-4'>Product Specification & Summary</h5>
     <Product3ToggleButton/>
      
      </div>
       <hr/>
      {/* <h3 className='mb-3 px-4'>Related Products</h3>
            
            <div className='my-card-main my-card px-4 mt-4'>
            {
                 myProducts.slice(0,5).map( product => <Product product={product}></Product>) 
             }
             
            </div> */}
      </div>
    </div>
      
    );
};

export default Product3Details;