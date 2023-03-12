import { StarIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  addToCart,
  decreaseCart,
  incrementCart,
} from "../store/reducers/cartSlice";
import AddToCart from "./AddToCart";
import "./Cart.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const Cart = ({ data }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const discount = parseFloat((data.price / 100) * data.discount).toFixed(2);
  const discountPrice = data.price - Math.ceil(discount);
  const navigate = useNavigate();
  AddToCart(data);
  const product3Details = () => {
    navigate(`/product3Details/${data._id}`);
  };
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const Cart = cart?.cartItems?.find((cartItem) => cartItem._id === data._id);

  return (
    <>
      {" "}
      <div className="single-card">
        <div
          onClick={product3Details}
          className="d-flex flex-column align-items-center book-inner"
        >
          <img src={`http://localhost:5000/${data.image}`} class="" alt="..." />
          <div class="book-body mt-3">
            <h6 class="book-title">{data.nameB} </h6>
            <p class="writer-name">{data.nameB}</p>
            <p className="mb-4">
              <StarIcon className=" star-icon " />
              <StarIcon className=" star-icon " />
              <StarIcon className=" star-icon " />
              <StarIcon className=" star-icon " />
              <StarIcon className=" star-icon " />
            </p>
            {data.quantity !== 0 ? (
              ""
            ) : (
              <span className="stock-out">Stock Out</span>
            )}
            {data?.discount <= 5 ? (
              ""
            ) : (
              <span className="discount">{data.discount}%</span>
            )}
            <p className="tk-part">
              <span className="text-decoration-line-through pre-tk">
                TK {data.price}
              </span>{" "}
              <span className="ms-2 now-tk">TK {discountPrice}</span>
            </p>
            <div className=" text-center">
              <button class=" details-button " onClick={product3Details}>
                View Details
              </button>
            </div>
          </div>
        </div>

        {Cart ? (
          <button className=" add-to-btn">
            <Link class=" text-decoration-none " to="/cart">
              View Cart
            </Link>
          </button>
        ) : (
          <button
            disabled={data.quantity === 0 ? true : false}
            className=" add-to-btn"
            onClick={() => handleAddToCart(data)}
          >
            Add to Cart
          </button>
        )}
      </div>
    </>
  );
};

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
