import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useProduct3 from '../../Hooks/UseProduct3';
import '../Products2/Products2.css'
import Product3 from './Product3';

const Products3 = ({handleAddToCart}) => {

    const [myProducts3] = useProduct3();

    // const [cart, setCart] = useState([]);

    // const handleAddToCart = (item)=>{
    //     const newCart = [...cart, item];
    //     setCart(newCart)
    //     console.log(newCart);
    // } 
    return (
        <div className='container card-area bg-white p-4'>
            <h3 className='mt-0 text-center mb-5'>নন টেক চাকরি প্রস্তুতি বই</h3>
            
       <div className='my-card-main my-card'>
       {
            myProducts3.slice(0,5).map(( product3, index )=> <Product3 key={index} product3={product3} handleAddToCart={handleAddToCart}></Product3 >) 
        }

       </div>
     <div className='text-center'>  <Link to="/nonTeckAll">
     <button className='my-button btn btn-primary text-white'>আরও দেখুন</button>
     </Link></div>
        </div>
        
    );
};

export default Products3;