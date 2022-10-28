import React, { useEffect, useState } from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, useParams } from 'react-router-dom';
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
import useProduct from '../../Hooks/UseProduct';
import Product from '../Products/Product';
import Product3Related2 from './Product3Related2';


const Product3Details = () => {
    // const [user] = useAuthState(auth);
    const {details3Id} = useParams()
    const [singleProduct3, setSingleProduct3] = useState({});
    // const [error, setError] = useState('');
    //  const [reload, ] = useState(true);
    const [myProducts] = useProduct();
 useEffect( () =>{
     const url = `https://book-collection-zs5k.onrender.com/product3Details/${details3Id}`;
     fetch(url,{
       method:"GET",
     })
     .then(res =>res.json())
     .then(data =>setSingleProduct3(data))
    
 }, [])

    return (
      <div class="container">
      <div class="details-page">
        <div class="container-fliud details-side">
          <div class="row gx-2">
            <div class="col-lg-4 details-side-1">
              
              <div class="">
                <div class="tab-pane active" id="pic-1">
                  <img className='details-pic' src={singleProduct3.picture} alt="" /></div>
                </div>
          
              
            </div>
            <div class="details col-lg-5 details-side-2">
              <h3 class="product-title">ইলেকট্রিক্যাল লাইসেন্স ভাইভা গাইড (ক, খ, ও গ শ্রেণীর জন্য)</h3>
              <p>লেখক : <span className='text-primary'>প্রকৌশলী ভবসিন্ধু বিশ্বাস</span></p>
              <div>
              <StarIcon className=" star-icon "/>
              <StarIcon className=" star-icon "/>
              <StarIcon className=" star-icon "/>
              <StarIcon className=" star-icon "/>
              <StarIcon className=" star-icon "/>
              <span>/ 14 Reviews</span>
              </div>
              <p>Publisher : টেকনিক্যাল প্রকাশনী</p>
              <p className='previous-tk'>TK.350</p>
              <p>
                <span className='present-tk text-primary'>TK.240</span>
                <span className='text-warning save-tk'>You save TK.110 (31%)</span>
                </p>
              <p className='book-tag'>Electrical Licence Viva Guide</p>
               <div className='d-flex'>
                <div>
                <CheckCircleIcon className=" stock-in-icon "/>
                
                </div>
               <p>
                <span className='stock-in'>In Stock 
                </span>
                <span className='text-danger ms-2'>(only 18 copies left)</span>
               </p>
               </div>
                <div className='d-flex'>
                <div>
                <button class="reading-button btn btn-default" type="button">একটু পড়ে দেখুন</button>
                </div>
                <div className='d-flex align-items-center add-to-button'>
                  <div>
                  <ShoppingCartIcon className="add-to-icon "/>
                  </div>
                  <div>
                  <button class="add-to-cart add-To-Cart btn btn-default text-white" type="button">add to cart</button>
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
      <h3>Product Specification & Summary</h3>
      <NavLink className='text-black book-collection fs-5' to="/summary">Summary</NavLink>
      <NavLink className='text-black book-collection fs-5' to="">Specification</NavLink>
      <NavLink className='text-black book-collection fs-5' to="">Author</NavLink>
      <hr/>
      <h3 className='mt-5 mb-3'>Related Products</h3>
            
            <div className='my-card-main my-card'>
            {
                 myProducts.slice(0,5).map( product => <Product product={product}></Product>) 
             }
             
            </div>
    </div>
      
    );
};

export default Product3Details;