import axios from "axios";
import React from "react";
import { toast, ToastContainer } from "react-toastify";

const Coupon = () => {
  const handleCouponAdd = async (e) => {
    e.preventDefault();
    const couponAdd = {
      couponCode: e.target.couponCode.value,
      discountPercent: e.target.discountPercent.value,
    };

    try {
      const data = await axios.post(
        "https://book-collection-server.vercel.app/api/v1/coupon-add",
        couponAdd
      );

      if (data.status === 400) {
        return toast.error(data.data.error);
      }
      toast.success(data.data.message);
    } catch (error) {
      return toast.warn(error.response.data.message);
    }

    e.target.reset();
  };

  return (
    <div className="product-info ">
      <h2 className="text-center p-5 text-white">Coupon Add</h2>
      <form onSubmit={handleCouponAdd} className="category-form">
        <div className="">
          <div>
            <input
              style={{
                width: "100%",
                height: "60px",
                border: "1px solid gray",
              }}
              type="text"
              name="couponCode"
              className="rounded fs-5"
              placeholder="Enter Coupon Code"
            />

            <input
              style={{
                width: "100%",
                height: "60px",
                border: "1px solid gray",
              }}
              type="number"
              name="discountPercent"
              className="rounded fs-5 mt-1"
              placeholder="Enter Discount"
            />

            <input
              style={{ width: "100%", height: "60px" }}
              className="product-info-add rounded text-white fw-bolder fs-5 mt-1"
              type="submit"
              value="Coupon Add"
            />
          </div>
        </div>
      </form>
      <ToastContainer className="toast-position" position="top-center" />
    </div>
  );
};

export default Coupon;
