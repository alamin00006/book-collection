import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getTotals } from '../store/reducers/cartSlice';

const TotalCart = () => {

    const navigate = useNavigate();
    // const [promoCode, setPromoCode] = useState('');
    // const [promoCodeAmount, setPromoCodeAmount] = useState('');
    // const [promoCodeDiscount, setPromoCodeDiscount] = useState('');
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
  
    const [totalAmount, setTotalAmount] = useState(0);
    const [discountAmount, setDiscountAmount] = useState(0);
    const [isPromoCode, setIsPromoCode] = useState(false);
  
    useEffect(() => {
      if (cart && cart.cartItems) {
        let totalAmount = 0;
        let discountAmount = 0;
  
        for (const item of cart.cartItems) {
          totalAmount += item.singleCartTotal;
          discountAmount +=
            ((item.price * item?.cartQuantity) / 100) * item.discount;
        }
        setTotalAmount(totalAmount);
        setDiscountAmount(Math.ceil(discountAmount.toFixed(2)));
      }
  
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
  
    //   fetch(`https://book-collection-server.vercel.app/promoCode`, {
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
  
    const finalCartAmount = shipping + (totalAmount - discountAmount);
    return (
        <>
           <div className="d-flex justify-content-between">
                <p>দাম</p>
                <p>{totalAmount?.toLocaleString()} ৳</p>
              </div>
              <div
                className="d-flex justify-content-between"
                style={{
                  borderBottom: "1px solid lightgrey",
                }}
              >
                <p>ছাড়</p>
                <p>-{discountAmount?.toLocaleString()} ৳</p>
              </div>

              <div
                className="d-flex justify-content-between mt-3"
                style={{
                  borderBottom: "1px solid lightgrey",
                }}
              >
                <p>মোট</p>
                <p>{(totalAmount - discountAmount)?.toLocaleString()} ৳</p>
              </div>

              <div className="d-flex justify-content-between mt-3">
                <p>শিপিং চার্জ</p>
                <p>{shipping} ৳</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>সর্বমোট</p>
                <p className="fw-bold">{finalCartAmount?.toLocaleString()} ৳</p>
              </div>
              {/* {
                    promoCodeAmount?<div className='d-flex justify-content-between'>
                    <p>{promoCodeAmount? 'Discount':''}</p>
                    <p>{promoCodeDiscount?promoCodeDiscount:''}</p>
                </div>:''
                } */}

              <div className="text-center checkout-button mt-3 roundend">
                <button className="btn text-center">
                  <Link className="text-white" to="/shipping">
                    অর্ডার সম্পন্ন করুন
                  </Link>
                </button>
              </div>
              <div className="mt-3">
                <form
                //  onSubmit={handlePromoCode}
                >
                  {!isPromoCode ? (
                    <p
                      onClick={() => setIsPromoCode(true)}
                      style={{
                        cursor: "pointer",
                        color: "red",
                      }}
                      className="promo_text"
                    >
                      {" "}
                      If you have promo code
                    </p>
                  ) : (
                    ""
                  )}

                  {isPromoCode ? (
                    <div className="d-flex search-field2">
                      <input
                        type="text"
                        name="promo"
                        className="w-100 rounded"
                        style={{
                          height: "40px",
                        }}
                        placeholder="Enter Promo Code"
                      />
                      <input
                        type="submit"
                        className="bg-white text-black ms-2 promo_button"
                        style={{
                          borderColor: "#065644",
                          height: "40px",
                        }}
                      />
                    </div>
                  ) : (
                    ""
                  )}
                </form>
              </div> 
        </>
    );
};

export default TotalCart;