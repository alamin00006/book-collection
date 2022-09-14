import React, { useEffect, useState } from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import auth from '../../firebase.init';

const Product4Details = () => {
    // const [user] = useAuthState(auth);
    const {details4Id} = useParams()
    const [singleProduct4, setSingleProduct4] = useState({});
    // const [error, setError] = useState('');
    //  const [reload, ] = useState(true);


 useEffect( () =>{
     const url = `https://book-collection-zs5k.onrender.com/product4Details/${details4Id}`;
     fetch(url,{
       method:"GET",
     })
     .then(res =>res.json())
     .then(data =>setSingleProduct4(data))
    
 }, [])

    return (
        <div className='container text-center bg-red-200 flex justify-center'>
        <div>
        <h1 className='text-primary text-3xl'>Details Page</h1>
          
          <div className='flex'>
            <div>
              <img className='w-44' src={singleProduct4.picture} alt=""/>
            </div>
            <div><p> product Name : {singleProduct4.name}</p>
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
   
export default Product4Details;