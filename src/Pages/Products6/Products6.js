import React from 'react';
import useProduct6 from '../../Hooks/UseProduct5';
import '../Products2/Products2.css'
import Product6 from './Product6';

const Products6 = () => {
    const [myProducts6] = useProduct6();
    return (
        <div className='container'>
            <h3 className='mt-5 text-center mb-5'>ট্রেড কোর্স</h3>
            
       <div className='my-card-main my-card'>
       {
            myProducts6.slice(0,5).map(( product6, index )=> <Product6 key={index} product6={product6}></Product6>) 
        }

       </div>
       <button href='..' className='my-button text-center btn btn-primary text-white'>আরও দেখুন</button>
        </div>
        
    );
};

export default Products6;