import React from 'react';

const Product5 = ({product5}) => {
    const{ name, description, picture, quantity, price, suppliyerName, userEmail} = product5;
    return (
      <div>
          <div>
        <div className='d-flex flex-column'>
        <img src={picture} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">জি.মাওলা BPSC MCQ Question Banke</h5>
          <p class="card-text"></p>
          <a href=".." class="btn details btn-primary">Details</a>
        </div>
        </div>
      </div>
      
      </div>
      
    );
};

export default Product5;