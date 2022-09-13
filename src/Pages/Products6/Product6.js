import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Product6 = ({product6}) => {
    const{_id, name, description, picture, quantity, price, suppliyerName, sold} = product6;

    const navigate = useNavigate()

    const product6Details =() =>{
    navigate(`product6Details/${_id}`)
    
    }
    return (
      <div>
          <div>
        <div className='d-flex flex-column'>
        <img src={picture} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">জি.মাওলা BPSC MCQ Question Banke</h5>
          <p class="card-text"></p>
          <div className=' text-center'>
         <button onClick={product6Details} class=" details-button text-xl "><Link class=" text-decoration-none button-hover" to="/product6Details">Details</Link></button>
         </div>
        </div>
        </div>
      </div>
      
      </div>
      
    );
};

export default Product6;