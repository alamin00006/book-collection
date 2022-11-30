import React from 'react';

import Banner from '../Banner/Banner';
import Payment from '../Payment/Payment';
import Products from '../Products/Products';
import Products2 from '../Products2/Products2';
import Products3 from '../Products3/Products3';
import Products4 from '../Products4/Products4';
import Products5 from '../Products5/Products5';
import Products6 from '../Products6/Products6';
const Home = ({AddToCarts, carts, isLoading, setTotal, total}) => {
    return (
        <div className='container'>
         
            <Banner></Banner>
            <Products></Products>
      <Products2></Products2>
      <Products3 setTotal={setTotal} total={total} AddToCarts={AddToCarts} carts={carts} isLoading={isLoading}></Products3>
      <Products4></Products4>
      <Products5></Products5>
      <Products6></Products6>
      <Payment></Payment>
        </div>
    );
};

export default Home;