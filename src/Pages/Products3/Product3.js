import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { StarIcon } from '@heroicons/react/24/solid'

const Product3 = ({product3, AddToCarts}) => {
    const{_id, name, description, picture, quantity, price, suppliyerName, sold} = product3;

    const navigate = useNavigate()
  
    const product3Details =() =>{
    navigate(`product3Details/${_id}`)
    
    }

    return (
     
          <div className='single-card'>
        <div className='d-flex flex-column align-items-center book-inner' onClick={product3Details}>
        <img src='https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/f36a3dc025f4_117302.gif' class="" alt="..."/>
        <div class="book-body mt-3">
          <h6 class="book-title">মোহাম্মদ আলীর বাংলাদেশ বিজয় </h6>
          <p class="writer-name">মুহাম্মদ লুৎফুল হক</p>
          <p className='mt-0'>
              <StarIcon className=" star-icon "/>
              <StarIcon className=" star-icon "/>
              <StarIcon className=" star-icon "/>
              <StarIcon className=" star-icon "/>
              <StarIcon className=" star-icon "/>
          </p>
          <p className="tk-part"><span className='text-decoration-line-through pre-tk'>TK 500</span> <span className='ms-2 now-tk'>TK {product3.price}</span></p>
          <div className=' text-center'>
          <button onClick={product3Details} class=" details-button "><Link class=" text-decoration-none button-hover " to="/product3Details"> View Details</Link></button>
         </div>
        </div>
        </div>
       
        <button class=" add-to-btn" onClick={() =>AddToCarts(product3)}><Link class=" text-decoration-none " to="/cart">Add to Cart</Link></button>
      </div>
      
     
      
    );
};

export default Product3;