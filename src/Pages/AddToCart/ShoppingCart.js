import React, { useState } from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { getTotals } from "../store/reducers/cartSlice";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import AllShoppingCart from "./AllShoppingCart";
import TotalCart from "./TotalCart";

// {cart, carts, setCarts, setTotal, total, data}
const ShoppingCart = () => {

  const navigate = useNavigate();


  const cart = useSelector((state) => state.cart);


  return (
    <div className="custom-container mt-3 ">
      <div className="">
        {cart?.cartItems?.length !== 0 ? (
          <div className="row view-cart-content ">
            <div className="col-lg-8 col-md-8 col-sm-12 ">
              {cart.cartItems.map((data, index) => (
                <AllShoppingCart key={index} data={data}></AllShoppingCart>
              ))}
            </div>

            <div className="p-3 cart-total-content col-lg-4 col-md-4 col-sm-12 cart-total-part ">
          <TotalCart/>
            </div>
          </div>
        ) : (
          <div className="bg-dark p-5 text-center">
            <h6 className="text-white fs-5 fw-bolder">Your Cart is Empty</h6>
            <button
              className="text-center bg-danger text-white border-0 px-5 py-2 fs-5 rounded"
              onClick={() => navigate("/")}
            >
              Continue Shipping
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
