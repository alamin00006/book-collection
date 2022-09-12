import React, { useEffect, useState } from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import auth from '../../firebase.init';

const Product3Details = () => {
    // const [user] = useAuthState(auth);
    const {details3Id} = useParams()
    const [singleProduct3, setSingleProduct3] = useState({});
    // const [error, setError] = useState('');
    //  const [reload, ] = useState(true);


 useEffect( () =>{
     const url = `http://localhost:5000/product3Details/${details3Id}`;
     fetch(url,{
       method:"GET",
     })
     .then(res =>res.json())
     .then(data =>setSingleProduct3(data))
    
 }, [])

    return (
        <div className='container text-center bg-red-200 flex justify-center'>
        <div>
        <h1 className='text-primary text-3xl'>Details Page</h1>
          
          <div className='flex'>
            <div>
              <img className='w-44' src={singleProduct3.picture} alt=""/>
            </div>
            <div><p> product Name : {singleProduct3.name}</p>
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
   
export default Product3Details;