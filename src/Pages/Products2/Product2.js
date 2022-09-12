import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Product2 = ({product2}) => {
    const{ _id, name, description, picture, quantity, price, suppliyerName, sold} = product2;

    const navigate = useNavigate()

    const product2Details =() =>{
    navigate(`product2Details/${_id}`)
    
    }
    return (
      <div>
          <div>
        <div class='d-flex flex-column'>
        <img src={picture} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">জি.মাওলা BPSC MCQ Question Banke</h5>
          <p class="card-text"></p>
          <button onClick={product2Details} class="btn bg-dark text-xl font-bold "><Link class="text-light text-decoration-none" to="/product2Details">Details</Link></button>
        </div>
        </div>
      </div>
      
      </div>
      
    );
};

export default Product2;