import React, { useEffect, useState } from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import auth from '../../firebase.init';

const Product6Details = () => {
    // const [user] = useAuthState(auth);
    const {details6Id} = useParams()
    const [singleProduct6, setSingleProduct6] = useState({});
    // const [error, setError] = useState('');
    //  const [reload, ] = useState(true);


 useEffect( () =>{
     const url = `https://book-collection-zs5k.onrender.com/product6Details/${details6Id}`;
     fetch(url,{
       method:"GET",
     })
     .then(res =>res.json())
     .then(data =>setSingleProduct6(data))
    
 }, [])

    return (
        <div className='container text-center bg-red-200 flex justify-center'>
        <div>
        <h1 className='text-primary text-3xl'>Details Page</h1>
          
          <div className='flex'>
            <div>
              <img className='w-44' src={singleProduct6.picture} alt=""/>
            </div>
            <div><p> product Name : {singleProduct6.name}</p>
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
   
export default Product6Details;