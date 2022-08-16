import React from 'react';
import '../Products/Product.css'

const Product = ({product}) => {
    const{_id, name, description, picture, quantity, price, suppliyerName, userEmail} = product;
    return (
      <div className='col-lg-3 col-md-6 col-sm-12'>
          <div class="card" style={{width: '15rem'}}>
        <img src={picture} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">জি.মাওলা BPSC MCQ Question Banke</h5>
          <p class="card-text"></p>
          <a href="#" class="btn btn-primary">Details</a>
        </div>
      </div>
      </div>
      
    );
};

export default Product;