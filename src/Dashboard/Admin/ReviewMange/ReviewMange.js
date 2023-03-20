import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { useQuery } from "react-query";
import { ToastContainer } from "react-toastify";
import ReviewTable from "./ReviewTable";

const ReviewMange = () => {
  const [reviewDelete, setReviewDelete] = useState(null);

  const [reviews, setAllReviews] = useState([]);

  const { isLoading, refetch } = useQuery(["reviews"], () =>
    fetch(`https://book-server-sg0u.onrender.com/api/v1/review`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setAllReviews(data?.data);
      })
  );

  return (
    <div>
      <h5 className="mt-4">Review Manage</h5>
      <Table striped bordered responsive className="mt-3">
        <thead>
          <tr className="text-center">
            <th>#</th>
            <th>Customer</th>
            <th>Rating</th>
            <th>Status</th>
            <th>Details</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {reviews?.map((review, index) => (
            <ReviewTable
              review={review}
              index={index}
              setReviewDelete={setReviewDelete}
              reviewDelete={reviewDelete}
              refetch={refetch}
            ></ReviewTable>
          ))}
          <ToastContainer className="toast-position" position="top-center" />
        </tbody>
      </Table>
    </div>
  );
};

export default ReviewMange;
