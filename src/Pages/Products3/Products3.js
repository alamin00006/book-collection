
// import React from "react";
// import { popularProducts } from "../../fakeData/fakeProducts";
// import Cart from "../AddToCart/Cart";


// function Products3() {

//   return (
//     <div
//       id="discount"
//       className="bg-gray-50 lg:py-16 py-10 mx-auto max-w-screen-2xl px-3 sm:px-10"
//     >
//       <div className="mb-10 flex justify-center">
//         <div className="text-center w-full lg:w-2/5">
//           <h2 className="text-xl lg:text-2xl mb-2 text-black font-semibold">
//             Popular Products for Daily Shopping
//           </h2>
//           <p className="text-base text-gray-600 leading-6">
//             See all our popular products in this week. You can choose your daily
//             needs products from this list and get some special offer with free
//             shipping.
//           </p>
//         </div>
//       </div>
//       <div className="flex">
//         <div className="w-full">
//           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-2 md:gap-3 lg:gap-3 ">
//             {popularProducts.map((data, index) => (
//               <Cart key={index} data={data} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Products3;























import { Link } from 'react-router-dom';
import useProduct3 from '../../Hooks/UseProduct3';

import '../Products2/Products2.css'

import Cart from "../AddToCart/Cart";

const Products3 = ({AddToCarts}) => {

    const [myProducts3] = useProduct3();
    console.log(myProducts3)
  
    return (
        <div className='container card-area bg-white p-4'>
            <h3 className='mt-0 text-center mb-5'>নন টেক চাকরি প্রস্তুতি বই</h3>
            
       <div className='my-card-main my-card'>
       {
            myProducts3?.data?.slice(0,5).map((data, index)=> <Cart key={data._id} data={data} AddToCarts={AddToCarts}></Cart >) 
        }

       </div>
     <div className='text-center'>  <Link to="/nonTeckAll">
     <button className='my-button btn btn-primary text-white'>আরও দেখুন</button>
     </Link></div>
        </div>
        
    );
};

export default Products3;