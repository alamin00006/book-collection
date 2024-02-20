import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../Loading/Loading";
import useUser from "../../Hooks/useUser";
import axios from "axios";
import "./SingUp.css";
const ResetPassword = () => {
  const [user, refetch, isLoading] = useUser();
  const token = localStorage.getItem("token");

  const { id, userCode } = useParams();
  console.log(userCode);
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    confirmPass: "",
  });

  const [error, setError] = useState({
    emailError: "",
    passWordError: "",
  });

  //   const [token] = useToken(user)
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!user?.email) {
      refetch();
    } else {
      navigate("/");
    }
  }, [refetch, token, user, isLoading, navigate]);
  const passwordCheck = (e) => {
    const passwordRegex = /.{6,}/;

    const validPassWord = passwordRegex.test(e.target.value);
    if (validPassWord) {
      setUserInfo({ ...userInfo, password: e.target.value });
      setError({ ...error, passWordError: "" });
    } else {
      setError({ ...error, passWordError: "Invalid Password" });
      setUserInfo({ ...userInfo, password: "" });
    }
  };

  const confirmPasswordCheck = (e) => {
    if (e.target.value === userInfo.password) {
      setUserInfo({ ...userInfo, confirmPass: e.target.value });
      setError({ ...error, passWordError: "" });
    } else {
      setError({ ...error, passWordError: "dont Match" });
      setUserInfo({ ...userInfo, confirmPass: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .patch(
        `https://book-collection-server.vercel.app/api/v1/user/password-reset`,
        { password: userInfo?.password },
        {
          headers: {
            Authorization: `Bearer ${userCode}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
        return toast.warn(error.response.data.message);
      });
  };

  return (
    <div className="bg-white">
      <div className="custom-container">
        <div className=" signup-part">
          <form onSubmit={handleSubmit} className="login-form">
            <div>
              <h3 className="mb-4">
                <b className="text-danger">পাসওয়ার্ড </b> রিসেট
              </h3>

              <label className="mt-2" htmlFor="password">
                নতুন পাসওয়ার্ড
              </label>
              <input
                onChange={passwordCheck}
                className="d-block mt-2"
                type="password"
                placeholder="Enter Your New Password"
                name="password"
                id="password"
                required
              />
              {error?.passWordError && (
                <p className="text-danger">{error.passWordError}</p>
              )}
              <label className="mt-2" htmlFor="password">
                কনফার্ম পাসওয়ার্ড
              </label>
              <input
                onChange={confirmPasswordCheck}
                className="d-block mt-2"
                type="password"
                placeholder="Enter Your Password"
                name="confirmPassword"
                id="password"
                required
              />
              <p></p>
              <input
                className="bg-danger text-white border-0 py-2 mt-2 fs-5"
                type="submit"
                value="পাসওয়ার্ড রিসেট করুন"
              />
            </div>
          </form>
        </div>
      </div>
      <ToastContainer className="toast-position" position="top-center" />
    </div>
  );
};

export default ResetPassword;
