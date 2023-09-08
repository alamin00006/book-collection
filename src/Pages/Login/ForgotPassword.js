import axios from "axios";
import React from "react";
import { ToastContainer, toast } from "react-toastify";

const ForgotPassword = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "https://book-collection-server.vercel.app/api/v1/user/forgot",
        {
          email: e.target.email.value,
        }
      );
      toast.success("Please Check Your Email");
    } catch (error) {
      toast.warn(error?.response?.data?.message);
    }
    e.target.reset();
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h4>Forgot Password</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
            />
          </div>
          <button type="submit" className="btn btn-danger w-100 rounded-0">
            Send
          </button>
          <ToastContainer className="toast-position" position="top-center" />
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
