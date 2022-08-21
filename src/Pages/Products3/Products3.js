import React from 'react';
import useProduct3 from '../../Hooks/UseProduct3';
import '../Products2/Products2.css'
import Product3 from './Product3';

const Products3 = () => {
    const [myProducts3] = useProduct3();
    return (
        <div className='container'>
            <h3 className='mt-5 text-center mb-5'>নন টেক চাকরি প্রস্তুতি বই</h3>
            
       <div className='my-card-main my-card'>
       {
            myProducts3.slice(0,5).map(( product3, index )=> <Product3 key={index} product3={product3}></Product3>) 
        }

       </div>
       <button href='..' className='my-button text-center btn btn-primary text-white'>আরও দেখুন</button>
        </div>
        
    );
};

export default Products3;