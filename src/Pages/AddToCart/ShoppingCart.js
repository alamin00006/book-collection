import React, { useState } from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { getTotals } from "../store/reducers/cartSlice";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import AllShoppingCart from "./AllShoppingCart";

// {cart, carts, setCarts, setTotal, total, data}
const ShoppingCart = () => {
  const [user] = useAuthState(auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [promoCode, setPromoCode] = useState('');
  // const [promoCodeAmount, setPromoCodeAmount] = useState('');
  // const [promoCodeDiscount, setPromoCodeDiscount] = useState('');

  const cart = useSelector((state) => state.cart);
  const { cartTotalAmount } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);
  let shipping = 50;
  // let ourPromoCode = '1AD55';
  // let promoDiscount = 10;

  //    const handlePromoCode = (e) =>{
  //    e.preventDefault()
  //    const getPromoCode = e.target.promo.value;
  //    setPromoCode(getPromoCode)
  //    const totalCartAmount = shipping + cartTotalAmount;
  //    if(ourPromoCode === promoCode ){
  //     const finalCartAmountWithDiscount = parseInt(totalCartAmount/100*promoDiscount);
  //     setPromoCodeDiscount(finalCartAmountWithDiscount)
  //     const promoCodeFinalAmount = totalCartAmount-finalCartAmountWithDiscount;
  //     setPromoCodeAmount(promoCodeFinalAmount)

  //     const promoAmount = {
  //         promoCodeFinalAmount : promoCodeFinalAmount ,
  //         customer:user?.email,

  //   }

  //   fetch(`https://book-server-sg0u.onrender.com/promoCode`, {
  //   method: 'POST',
  //   headers:{
  //     'content-type': 'application/json',
  //     authorization : `Bearer ${localStorage.getItem('accessToken')}`

  //   },
  //   body: JSON.stringify(promoAmount)
  //   })
  //   .then(res => res.json()

  //   )
  //   .then(data => {

  //   })
  //     }
  //     e.target.reset()
  //    }

  const finalCartAmount = shipping + cartTotalAmount;

  return (
    <div className="bg-white">
      <div className="container">
        {cart?.cartItems?.length !== 0 ? (
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-12">
              {cart.cartItems.map((data, index) => (
                <AllShoppingCart key={index} data={data}></AllShoppingCart>
              ))}
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 p-4 cart-total-part">
              <h6 className="mb-4 fs-5 text-center text-danger">
                চেক-আউট সামারি
              </h6>
              <div className="d-flex justify-content-between">
                <p>Sub Total</p>
                <p>{cartTotalAmount}</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Shipping</p>
                <p>{shipping}</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Total</p>
                <p>{finalCartAmount}</p>
              </div>
              {/* {
                    promoCodeAmount?<div className='d-flex justify-content-between'>
                    <p>{promoCodeAmount? 'Discount':''}</p>
                    <p>{promoCodeDiscount?promoCodeDiscount:''}</p>
                </div>:''
                } */}
              <div className="d-flex justify-content-between">
                <p>Payable Total</p>
                <p>{finalCartAmount}</p>
              </div>
              <div className="text-center checkout-button mt-3 roundend">
                <button className="btn text-center">
                  <Link className="text-white" to="/shipping">
                    চেক আউট করতে এগিয়ে যান
                  </Link>
                </button>
              </div>
              <div className="mt-3">
                {/* <form onSubmit={handlePromoCode}>
            <label> If You Have a Promo Code</label>
            <input type='text' name='promo' className='w-100 rounded' placeholder='Enter Your Promo Code'/>
            <input type='submit' className='bg-primary text-white mt-1'/>
            </form> */}
              </div>
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
