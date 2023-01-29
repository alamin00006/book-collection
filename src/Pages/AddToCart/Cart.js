


import { StarIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addToCart, decreaseCart, incrementCart } from "../store/reducers/cartSlice";
import AddToCart from "./AddToCart";
import './Cart.css'


const Cart = ({ data }) =>{
  
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const discount = parseFloat(data.price / 100*data.discount).toFixed(2);
    const discountPrice = data.price - Math.ceil(discount);
 const navigate = useNavigate()
   AddToCart(data)
  const product3Details =() =>{
    navigate(`/product3Details/${data._id}`)
    
    }
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const Cart = cart?.cartItems?.find((cartItem) => cartItem._id === data._id);
  console.log(Cart)
  return (
    <>
      {" "}
      {/* <div className="group box-border overflow-hidden flex rounded-md shadow-sm pe-0 flex-col items-center bg-white relative">
        <div
    
          className="relative flex justify-center w-full cursor-pointer"
        >
          {data.discount === 0 ? (
            ""
          ) : (
            <span className="absolute text-dark text-xs bg-orange-500 text-white py-1 px-2 rounded font-medium z-10 right-4 top-4">
              {Math.ceil(data.discount)}% Off
            </span>
          )}
          {data.quantity !== 0 ? (
            ""
          ) : (
            <span className="absolute inline-flex items-center justify-center px-2 py-1 bg-red-100 text-red-600 border-0 rounded-full text-xs font-semibold z-10 left-4 top-4">
              Stock Out
            </span>
          )}

          <span
            style={{
              boxSizing: "borderBox",
              display: "inline-block",
              overflow: "hidden",
              width: "initial",
              height: "initial",
              background: "none",
              opacity: "1",
              border: "0px",
              margin: "0px",
              padding: "0px",
              position: "relative",
              maxWidth: "100%",
            }}
          >
            <span
              style={{
                boxSizing: "border-box",
                display: "block",
                width: "initial",
                height: "initial",
                background: "none",
                opacity: "1",
                border: "0",
                margin: "0",
                padding: "0",
                maxWidth: "100%",
              }}
            >
              <img
                style={{
                  display: "block",
                  maxWidth: "100%",
                  width: "initial",
                  height: "initial",
                  background: "none",
                  opacity: "1",
                  border: "0",
                  margin: "0",
                  padding: "0",
                }}
              alt=''/>
            </span>
            <img
              src={data.image}
              decoding="async"
              data-nimg="intrinsic"
              className="object-cover transition duration-150 ease-linear transform group-hover:scale-105"
              style={{
                inset: "0px",
                boxSizing: " border-box",
                padding: "0px",
                border: "none",
                margin: "auto",
                display: " block",
                width: "160px",
                height: "160px",
                minWidth: "100%",
                maxWidth: "100%",
                minHeight: "100%",
                maxHeight: " 100%",
              }}
           alt='' />
          </span>
        </div>
        <div className="w-full px-3 lg:px-4 pb-4 overflow-hidden">
          <div className="relative mb-1">
            <span className="text-gray-400 font-medium text-xs d-block mb-1">
              {data.unit}
            </span>
            <h2 className="text-heading truncate mb-0 block text-sm font-medium text-gray-600">
              <span className="line-clamp-2">{data.title}</span>
            </h2>
          </div>
          <div className="flex justify-between items-center text-heading text-sm sm:text-base space-s-2 md:text-base lg:text-xl">
            <div className="product font-bold">
              <span className="inline-block text-lg font-semibold text-gray-800">
                ${data.price}
              </span>
              {data.price ===data.originalPrice ? (
                ""
              ) : (
                <del className="sm:text-sm font-normal text-base text-gray-400 ml-1">
                  ${data.originalPrice}
                </del>
              )}
            </div>

            {Cart ? (
              <div>
                <div className="h-9 w-auto flex flex-wrap items-center justify-evenly py-1 px-2 bg-emerald-500 text-white rounded">
                  <button onClick={() => dispatch(decreaseCart(data))}>
                    <span className="text-dark text-base">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="32"
                          d="M400 256H112"
                        ></path>
                      </svg>
                    </span>
                  </button>
                  <p className="text-sm text-dark px-1 font-semibold">
                    {Cart.cartQuantity}
                  </p>
                  <button onClick={() => dispatch(incrementCart(data))}>
                    <span className="text-dark text-base">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="32"
                          d="M256 112v288m144-144H112"
                        ></path>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            ) : (
              <button
                disabled={data.quantity === 0 ? true : false}
                onClick={() => handleAddToCart(data)}
                ariallabel="chart"
                className={data.quantity === 0 ? "!cursor-default h-9 w-9 flex items-center justify-center border border-gray-200 rounded text-emerald-500 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white transition-all":"!cursor-pointer h-9 w-9 flex items-center justify-center border border-gray-200 rounded text-emerald-500 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white transition-all"}
              >
                <span className="text-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  > 
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                </span>
              </button>
            )}
          </div>
        </div>
      </div> */}
       <div className='single-card'>
        <div onClick={product3Details} className='d-flex flex-column align-items-center book-inner'>
        <img src={`http://localhost:5000/${data.image}`}class="" alt="..."/>
        <div class="book-body mt-3">
          <h6 class="book-title">{data.nameB} </h6>
          <p class="writer-name">{data.nameB}</p>
          <p className='mb-4'>
              <StarIcon className=" star-icon "/>
              <StarIcon className=" star-icon "/>
              <StarIcon className=" star-icon "/>
              <StarIcon className=" star-icon "/>
              <StarIcon className=" star-icon "/>
          </p>
          {data.quantity !== 0 ? "" : 
            <span className="stock-out">
              Stock Out
            </span>
          }
          {data.discount <= 20 ? "" : 
            <span className="discount">
              {data.discount}%
            </span>
          }
          <p className="tk-part"><span className='text-decoration-line-through pre-tk'>TK {data.price}</span> <span className='ms-2 now-tk'>TK {discountPrice}</span></p>
          <div className=' text-center'>
          <button class=" details-button " onClick={product3Details}>View Details</button>
     
      
         </div>
        </div>
        </div>
       
            {
              Cart? <button className=" add-to-btn"><Link class=" text-decoration-none " to="/cart">View Cart</Link></button>
             :<button  disabled={data.quantity === 0 ? true : false} className=" add-to-btn" onClick={() => handleAddToCart(data)}>Add to Cart</button>
            }
        
  
        
      </div>
    </>
  );
}

export default Cart;












// import React, { useState } from 'react';
// import './Cart.css'
// import { TrashIcon } from '@heroicons/react/24/outline'
// import { PlusSmallIcon } from '@heroicons/react/24/outline'
// import { MinusSmallIcon } from '@heroicons/react/24/outline'

// const Cart = ({cart, carts, setCarts, setTotal, total, data}) => {
//     // const [reload, setReload] = useState(true);
//     let [count, setCount] = useState(cart.quantity);

//     // const [cartAmount, setCartAmount] = useState(cart.price*cart.quantity);
   
//     const handleCountInc = () =>{
//         // setTotal(total+1)
//         setCount(parseInt(++ count));
//          const quantity = parseInt(count);
      
//          const price = cart.price*parseInt(count);
//          const totalPrice = price;

//         const newQuantity = {quantity, totalPrice };
//         const url = `http://localhost:5000/carts/${cart._id}`;
//               fetch(url, {
//                   method: 'PUT',
//                   headers: {
//                       'content-type': 'application/json'
//                   },
//                   body: JSON.stringify(newQuantity)
//               })
//               .then(res => res.json())
//               .then(data =>{
              
//               })  

//     }
//     const handleCountDec = () =>{
//         // setTotal(total-1)
//        if(count<=1){
//         return;
//        }
//        setCount(parseInt(-- count));
       
//        const quantity = parseInt(count);
//        const price = cart.price*parseInt(count);
//        const totalPrice = price;

//       const newQuantity = {quantity, totalPrice };
//        const url = `http://localhost:5000/carts/${cart._id}`;
//              fetch(url, {
//                  method: 'PUT',
//                  headers: {
//                      'content-type': 'application/json'
//                  },
//                  body: JSON.stringify(newQuantity)
//              })
//              .then(res => res.json())
//              .then(data =>{
              
//              })
   
//     }

//     const handleDeleteCart = (id)=>{
    
//         const url = `http://localhost:5000/carts/${id}`;
//             fetch(url , {
//                 method: "DELETE",
//               }).then(res => res.json())
//                 .then(data => {
//                     if(data.deletedCount >0 ){
//                        const reaminingData = carts.filter(cart => cart._id !==id);
//                        setCarts(reaminingData)
                       
                      
//                     }
//                 })

//     }
//     return (
//         <div className='row p-5 cart-item border'>
//             <div className='col-lg-6 d-flex'>
//                 <div className='cart-image'>
//                 <img src={cart.picture} alt=''/>
//                 </div>
//                 <div className='ms-4'>
//                     <p>মোহাম্মদ আলীর বাংলাদেশ বিজয়</p>
//                     <p>মুহাম্মদ লুৎফুল হক</p>
//                 </div>
//             </div>
//             <div className='col-lg-6 d-flex mt-5'>
//              <div className='cart-input-part'>
//               <MinusSmallIcon onClick={handleCountDec}  className='cart-minus-icon border-0 rounded'/>
//               <input type="text" value={cart.quantity} disabled className="cart-input rounded"/>
//               <PlusSmallIcon  onClick={handleCountInc}  className="cart-plus-icon border-0 rounded"/>
//              </div>
//              <div className='d-flex'>
//                 <p>Tk {cart.totalPrice}</p>
//                 <p onClick={()=>handleDeleteCart(cart._id)}><TrashIcon className='cart-trash-icon ms-5 '/></p>
//              </div>
//             </div>
//         </div>
        
//     );
// };

// export default Cart;