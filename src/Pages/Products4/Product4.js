import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Product4 = ({product4}) => {
    const{_id, name, description, picture, quantity, price, suppliyerName, sold} = product4;

    const navigate = useNavigate()

    const productDetails =() =>{
    navigate(`product4Details/${_id}`)
    
    }

    return (
      <div>
          <div>
        <div className='d-flex flex-column'>
        <img src={picture} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">জি.মাওলা BPSC MCQ Question Banke</h5>
          <p class="card-text"></p>
          <button onClick={productDetails} class="btn bg-dark text-xl font-bold "><Link class="text-light text-decoration-none" to="/productDetails">Details</Link></button>
        </div>
        </div>
      </div>
      
      </div>
      
    );
};

export default Product4;