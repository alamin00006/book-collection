import React from "react";
import { TrashIcon } from "@heroicons/react/24/outline";
import { PlusSmallIcon } from "@heroicons/react/24/solid";
import { MinusSmallIcon } from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseCart,
  incrementCart,
  removeFromCart,
} from "../store/reducers/cartSlice";
const AllShoppingCart = ({ data }) => {
  const dispatch = useDispatch();

  const discount = parseFloat(
    ((data.price * data?.cartQuantity) / 100) * data.discount
  ).toFixed(2);
  const discountPrice = Math.ceil(discount);

  return (
    <div
      className="row mb-3  view_cart_list"
      style={{
        padding: "0 12px",
        paddingRight:"8px"
      }}
    >
      <div className="card-area p-3">
        <div className="col-lg-5 d-flex ">
          <div className="cart-image ">
            <img src={data.image} alt="" />
          </div>
          <div className="ms-4 mt-3">
            <p style={{}}>{data.nameB}</p>
            <p>{data?.writer?.writerName}</p>
          </div>
        </div>
        <div className="col-lg-7 d-flex mt-5">
          <div className="cart-input-part">
            <MinusSmallIcon
              onClick={() => dispatch(decreaseCart(data))}
              className="cart-minus-icon border-0"
            />
            <input
              type="text"
              value={data.cartQuantity}
              readOnly
              className="cart-input fw-bold"
              style={{ fontSize: "1rem", fontFamily: "Atma cursive" }}
            />
            <PlusSmallIcon
              onClick={() => {
                dispatch(incrementCart(data));
              }}
              className="cart-plus-icon border-0"
            />
          </div>
          <div className="d-flex justify-content-center">
            {data.discount !== 0 ? (
              <p className="previous-tk">{data.singleCartTotal} ৳</p>
            ) : (
              ""
            )}
            <p className="mx-4 fw-bold">
              {" "}
              {data.singleCartTotal - discountPrice} ৳
            </p>
            <p>
              <TrashIcon
                onClick={() => dispatch(removeFromCart(data))}
                className="cart-trash-icon "
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllShoppingCart;
