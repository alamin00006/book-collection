import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Product3AllSingle = ({product3All}) => {
    const{_id, name, description, picture, quantity, price, suppliyerName, sold} = product3All;
   
    const navigate = useNavigate()

    const product3AllDetails =() =>{
    navigate(`product3AllDetails/${_id}`)
    
    }
    return (
      <div>
          <div>
        <div class='d-flex flex-column'>
        <img src={picture} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text"></p>
          <div className=' text-center'>
         <button onClick={product3AllDetails} class=" details-button text-xl "><Link class=" text-decoration-none button-hover" to="/product3AllDetails">Details</Link></button>
         </div>
        </div>
        </div>
      </div>
      </div>
      
    );
};

export default Product3AllSingle;