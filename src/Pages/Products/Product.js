import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Product = ({product}) => {
    const{_id, name, description, picture, quantity, price, suppliyerName, sold} = product;

    const navigate = useNavigate()

    const productDetails =() =>{
    navigate(`productDetails/${_id}`)
    
    }
    return (
      <div>
          <div>
        <div class='d-flex flex-column'>
        <img src={picture} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text"></p>
          <button onClick={productDetails} class="btn bg-dark text-xl font-bold "><Link class="text-light text-decoration-none" to="/productDetails">Details</Link></button>
        </div>
        </div>
      </div>
      </div>
      
    );
};

export default Product;