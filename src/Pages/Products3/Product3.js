import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Product3 = ({product3}) => {
    const{_id, name, description, picture, quantity, price, suppliyerName, sold} = product3;

    const navigate = useNavigate()

    const product3Details =() =>{
    navigate(`product3Details/${_id}`)
    
    }

    return (
      <div>
          <div>
        <div className='d-flex flex-column'>
        <img src={picture} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">জি.মাওলা BPSC MCQ Question Banke</h5>
          <p class="card-text"></p>
          <button onClick={product3Details} class="btn bg-dark text-xl font-bold "><Link class="text-light text-decoration-none" to="/product2Details">Details</Link></button>
        </div>
        </div>
      </div>
      
      </div>
      
    );
};

export default Product3;