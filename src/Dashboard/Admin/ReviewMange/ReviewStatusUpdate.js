import axios from "axios";
import React from "react";
import { toast } from "react-toastify";

const ReviewStatusUpdate = ({ review, refetch }) => {
  const handleReviewStatus = async () => {
    const formData = new FormData();

    formData.append("status", "Approved");

    try {
      const data = await axios.patch(
        `https://book-server-sg0u.onrender.com/api/v1/review/${review._id}`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      refetch();
      toast.success(data.data.message);
      // setOrderStatusUpdate(true)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {review?.status === "Approved" ? (
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
        <div onClick={handleReviewStatus} class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
          />
        </div>
      )}
    </div>
  );
};

export default ReviewStatusUpdate;
