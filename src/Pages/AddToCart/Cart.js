import { StarIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addToCart } from "../store/reducers/cartSlice";
import AddToCart from "./AddToCart";
import "./Cart.css";

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
      <div className="single-card p-0" style={{height:400}}>
        <div
          onClick={product3Details}
          className="d-flex flex-column align-items-center book-inner"
        >
          <img src={data?.image} class="" alt="..." />
          <div class="book-body mt-3">
            <h6 class="book-title">{data.nameB?.slice(0,40)} 
                  </h6>
            <p class="writer-name">{data?.writer?.writerName?.slice(0,50)} 
            </p>
            {/* <p className="mb-4">
              <StarIcon className=" star-icon " />
              <StarIcon className=" star-icon " />
              <StarIcon className=" star-icon " />
              <StarIcon className=" star-icon " />
              <StarIcon className=" star-icon " />
            </p> */}
            {/* <p className="mb-4 writer-name" >
             {
              data?.publication?.publicationName
             }
            </p> */}
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
            <div className="tk-part d-flex justify-content-between ">
           <div>
           <span className="text-decoration-line-through pre-tk">
                TK {data.price}
              </span>{" "}
              <span className="ms-2 now-tk" style={{color:'#13856B'}}>TK {discountPrice}</span>
           </div>
           {/* <div className="ms-3">
           {data?.discount <= 0 ? (
              ""
            ) : (
              <span className="discount" style={{color:'#13856B'}}>{data.discount}% of</span>
            )}
           </div> */}
            </div>
            {/* <div className=" text-center">
              <button class=" details-button " onClick={product3Details}>
                View Details
              </button>
            </div> */}
          </div>
        </div>

        {Cart ? (
          <button className=" add-to-btn">
            <Link class=" text-decoration-none " to="/cart">
              View Cart
            </Link>
          </button>
        ) : (
          <div className="">
            <button
              disabled={data.quantity === 0 ? true : false}
              className=" add-to-btn"
              onClick={() => handleAddToCart(data)}
            >
              Add to Cart
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
