import React from 'react';
import useProduct from '../../Hooks/UseProduct';
import Product from './Product';

const Products = () => {

    const [myProducts] = useProduct();
    return (
        <div className='container'>
            <h1 className='mt-5'>গত সপ্তাহের বেষ্ট সেলার বই</h1>
            
       <div className='row gy-5 my-card'>
       {
            myProducts.slice(0,5).map( product => <Product product={product}></Product>) 
        }

       </div>


        </div>
    );
};

export default Products;