import React, { useEffect, useState } from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import auth from '../../firebase.init';

const ProductDetails = () => {
    // const [user] = useAuthState(auth);
    const {detailsId} = useParams()
    const [singleProduct, setSingleProduct] = useState({});
    // const [error, setError] = useState('');
    //  const [reload, ] = useState(true);

console.log(detailsId)
 useEffect( () =>{
     const url = `https://book-collection-zs5k.onrender.com/productDetails/${detailsId}`;
     fetch(url,{
       method:"GET",
     })
     .then(res =>res.json())
     .then(data =>setSingleProduct(data))
    
 }, [])

    return (
        <div className='container text-center bg-red-200 flex justify-center'>
        <div>
        <h1 className='text-primary text-3xl'>Details Page</h1>
          
          <div className='flex'>
            <div>
              <img className='w-44' src={singleProduct.picture} alt=""/>
            </div>
            <div><p> product Name : {singleProduct.name}</p>
          <p> Minimum Order :</p>
          <p> Order Quantity:</p>
           <p> Available Stock:</p>
           <p> Unit Price:</p>
        
           
           </div>
           </div>

           </div>
           </div>

      
    );
};
   
export default ProductDetails;