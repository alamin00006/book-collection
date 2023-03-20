import React, { useState } from "react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
// import Loading from '../Loading/Loading';
import "./OrderDetails.css";
import nafiuenLogo from "../../Images/nafieun-logo.jpeg";
import { Table } from "react-bootstrap";
import { PrinterIcon } from "@heroicons/react/24/outline";

const OrderDetails = () => {
  const navigate = useNavigate();
  const [orderProduct, setOrderProducts] = useState({});
  const { orderDetailsId } = useParams();
  const shipping = 50;

  const { isLoading, refetch } = useQuery(
    ["orderProduct", orderDetailsId],
    () =>
      fetch(
        `https://book-server-sg0u.onrender.com/api/v1/order/orderDetails/${orderDetailsId}`,
        {
          method: "GET",
        }
      )
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            navigate("/");
            localStorage.removeItem("token");
          }
          return res.json();
        })
        .then((data) => {
          setOrderProducts(data.data);
        })
  );

  // if(isLoading){
  //     refetch()
  // }
  const total = orderProduct?.orderItems?.[0]?.cartTotalAmount + shipping;

  return (
    <div className="bg-white">
      <div className="container">
        <div className="pt-2">
          <div className="thanks px-3 py-3 rounded">
            <h6>
              Thank you {orderProduct?.name}, Your order have been received !
            </h6>
          </div>
          <div className="">
            <div className="d-lg-flex flex-sm-none justify-content-between invoice-part p-4 mt-2">
              <h6>INVOICE</h6>
              <div className="">
                <div className="d-flex align-items-center">
                  <div className="mb-2">
                    <img className="invoice-logo" src={nafiuenLogo} alt="" />
                  </div>
                </div>
                <div className="our-address">
                  <p>Bangla Bazar, Dhaka</p>
                  <p>105 No. House</p>
                </div>
              </div>
            </div>

            <div className="d-lg-flex flex-sm-none justify-content-between invoice-part border-top border-white p-4">
              <div>
                <h6>ORDER DATE</h6>
                <p>{orderProduct?.updatedAt?.split("T")?.[0]}</p>
              </div>
              <div>
                <h6>INVOICR NO.</h6>
                <p>#{orderProduct?.phone?.slice(6, 11)}</p>
              </div>
              <div className="">
                <div className="d-flex align-items-center">
                  <h6>INVOICE TO</h6>
                </div>
                <div className="our-address">
                  <h6>{orderProduct.name}</h6>
                  <p> District : {orderProduct.district}</p>
                  <p>City : {orderProduct.city}</p>
                  <p>
                    Zip Code : {orderProduct.zip ? orderProduct.zip : "..."}
                  </p>
                  <p>Phone : {orderProduct.phone}</p>
                </div>
              </div>
            </div>
            <div className="bg-white pt-2">
              <Table responsive bordered size="sm">
                <thead>
                  <tr className="text-center">
                    <th>#</th>
                    <th>Product</th>
                    <th>PRODUCT NAME</th>
                    <th>QUANTITY</th>
                    <th>ITEM PRICE</th>
                    <th>AMOUNT</th>
                  </tr>
                </thead>
                <tbody>
                  {orderProduct?.orderItems?.[0]?.cartItems?.map(
                    (order, index) => {
                      return (
                        <tr className="text-center">
                          <td>{index + 1}</td>
                          <td className="order-image">
                            <img
                              src={`https://book-server-sg0u.onrender.com/${order?.image?.[0]}`}
                              alt=""
                            />
                          </td>
                          <td>{order.nameB}</td>
                          <td className="fw-bolder"> {order.cartQuantity}</td>
                          <td className="fw-bolder">{order.price}</td>
                          <td className="total-quantity-amount fw-bolder">
                            {order.singleCartTotal}
                          </td>
                        </tr>
                      );
                    }
                  )}
                </tbody>
              </Table>
            </div>

            <div className="d-lg-flex flex-sm-none justify-content-between invoice-footer p-4 text-center">
              <div>
                <h6>PAYMENT METHOD</h6>
                <p>{orderProduct.paymentType}</p>
              </div>
              <div>
                <h6>SHIPPING COST</h6>
                <p className="fs-5 fw-bolder invoice-shipping-cost">50</p>
              </div>
              <div>
                <h6>TOTAL AMOUNT</h6>
                <p className="final-total-amount fw-bolder fs-5">{total} TK</p>
              </div>
            </div>
            <div className="invoice-details-address text-center border py-2 d-none d-lg-block">
              <p className="fw-bolder"> Customer Details Address :</p>
              <p className="">{orderProduct.address}</p>
            </div>
            <div className="d-flex justify-content-end print-invoice mt-1">
              <button disabled className="fw-bolder">
                Print Invoice
                <PrinterIcon className="printer-icon ms-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
