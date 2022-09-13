import React from 'react';
import useProduct3 from '../../Hooks/UseProduct3';
import '../Products2/Products2.css'
import Product3AllSingle from './Procuct3AllSingle';

const Products3All = () => {
    const [myProducts3] = useProduct3();
    return (
        <div className='container'>
            <h3 className='mt-5 text-center mb-5'>নন টেক চাকরি প্রস্তুতি বই</h3>
            
       <div className='my-card-main my-card'>
       {
            myProducts3.slice(5|'').map(product3All=> <Product3AllSingle key={product3All._id} product3All={product3All}></Product3AllSingle>) 
        }

       </div>
       </div>
     
        
    );
};

export default Products3All;