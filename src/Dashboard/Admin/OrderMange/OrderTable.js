import axios from "axios";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
import DeleteIcon from "../../../svgIcons/DeleteIcon";
import DetailsIcon from "../../../svgIcons/DetailsIcon";
import OrderStatusCancel from "./OrderStatusCancel";

import OrderStatusUpdate from "./OrderStatusUpdate";
import SeeOrderDetails from "./SeeOrderDetails";
// import './ProductTable.css'

const OrderTable = ({ refetch, order, index, setOrderDelete, orderDelete }) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleDelete = async () => {
    try {
      const data = await axios.delete(
        `https://book-collection-server.vercel.app/api/v1/order/${orderDelete?._id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      refetch();
      toast.success(data?.data?.message);
    } catch (error) {
      return toast.error(error.response.data.message);
    }
  };

  const shipping = 50;
  const total = order?.orderItems?.[0]?.cartTotalAmount + shipping;

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{order?.name}</td>
      <td className="text-center">{order?.paymentType.slice(0, 4)}</td>
      <td className="text-center">
        {order?.orderItems?.[0]?.cartItems?.length}
      </td>
      <td className="text-center">Tk {total}</td>
      <td>
        <div className="d-flex">
          <div>
            <h6
              className={`${
                order?.orderStatus === "Approved"
                  ? "order-status"
                  : "text-danger fw-bold"
              }`}
            >
              {order?.orderStatus}
            </h6>
            <OrderStatusUpdate order={order} refetch={refetch} />
          </div>
          <div className="ms-5">
            <span className="fw-bold">Cancel</span>
            <OrderStatusCancel order={order} refetch={refetch} />
          </div>
        </div>
      </td>
      <td className="text-center">
        <div>
          <Button className="details-icon" onClick={handleShow}>
            <span>
              <DetailsIcon />
            </span>
          </Button>

          <SeeOrderDetails order={order} setShow={setShow} show={show} />
        </div>
      </td>
      <td>
        <div>
          <div onClick={setOrderDelete(order)} className="ms-5">
            <span onClick={handleDelete} className="delete-icon">
              <DeleteIcon />
            </span>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default OrderTable;
