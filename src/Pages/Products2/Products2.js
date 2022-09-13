import React from 'react';
import useProduct2 from '../../Hooks/UseProduct2';
import Product2 from './Product2';
import '../Products2/Products2.css'

const Products2 = () => {
    const [myProducts2] = useProduct2();
    return (
        <div className='container'>
            <h3 className='mt-5 text-center mb-5'>উপ-সহকারী প্রকৌশলী চাকরি প্রস্তুতি বই</h3>
            
       <div className='my-card-main my-card'>
       {
            myProducts2.slice(0,5).map(( product2, index )=> <Product2 key={index} product2={product2}></Product2>) 
        }

       </div>
       <div className='text-center'>  <button href='..' className='my-button btn btn-primary text-white'>আরও দেখুন</button></div>
        </div>
        
    );
};

export default Products2;
