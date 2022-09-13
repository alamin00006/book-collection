import React from 'react';
import useProduct4 from '../../Hooks/UseProduct4';
import '../Products2/Products2.css'
import Product4 from './Product4';

const Products4 = () => {
    const [myProducts4] = useProduct4();
    return (
        <div className='container'>
            <h3 className='mt-5 text-center mb-5'>সহকারী প্রকৌশলী চাকরি প্রস্তুতি বই</h3>
            
       <div className='my-card-main my-card'>
       {
            myProducts4.slice(0,5).map(( product4, index )=> <Product4 key={index} product4={product4}></Product4>) 
        }

       </div>
       <div className='text-center'>  <button href='..' className='my-button btn btn-primary text-white'>আরও দেখুন</button></div>
        </div>
        
    );
};

export default Products4;