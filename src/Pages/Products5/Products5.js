import React from 'react';
import useProduct5 from '../../Hooks/UseProduct5';
import '../Products2/Products2.css'
import Product5 from './Product5';

const Products5 = () => {
    const [myProducts5] = useProduct5();
    return (
        <div className='container'>
            <h3 className='mt-5 text-center mb-5'>এডমিশন গাইড</h3>
            
       <div className='my-card-main my-card'>
       {
            myProducts5.slice(0,5).map(( product5, index )=> <Product5 key={index} product5={product5}></Product5>) 
        }

       </div>
       <div className='text-center'>  <button href='..' className='my-button btn btn-primary text-white'>আরও দেখুন</button></div>
        </div>
        
    );
};

export default Products5;