import axios from "axios";
import React from "react";
import { toast } from "react-toastify";

const OrderStatusCancel = ({ order, refetch }) => {
  const handleOrderStatus = async () => {
    const formData = new FormData();

    formData.append("orderStatus", "Cancelled");

    //    if(orderStatusUpdate){
    //     setOrderStatusUpdate(false)
    //     formData.append('orderStatus', "Pending")
    //    }

    try {
      const data = await axios.patch(
        `https://book-collection-server.vercel.app/api/v1/order/${order._id}`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (data.status === 400) {
        return toast.error(data.data.error);
      }
      refetch();
      toast.success(data.data.message);
      // setOrderStatusUpdate(true)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {order?.orderStatus === "Cancelled" ? (
        <div class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            id="flexSwitchCheckCheckedDisabled"
            checked
            disabled
          />
        </div>
      ) : (
        ""
      )}
      {order?.orderStatus === "Approved" ? (
        <div onClick={handleOrderStatus} class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
          />
        </div>
      ) : (
        ""
      )}
      {order?.orderStatus === "Pending" ? (
        <div onClick={handleOrderStatus} class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default OrderStatusCancel;
