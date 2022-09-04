import React from 'react';
import '../Products/Product.css'

const Product = ({product}) => {
    const{ name, description, picture, quantity, price, suppliyerName, userEmail} = product;
    return (
      <div>
          <div>
        <div className='d-flex flex-column'>
        <img src={picture} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text"></p>
          <a href=".." class="btn details btn-primary">Details</a>
        </div>
        </div>
      </div>
      </div>
      
    );
};

export default Product;