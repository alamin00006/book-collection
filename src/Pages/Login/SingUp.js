import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../Loading/Loading";
import useUser from "../../Hooks/useUser";
import axios from "axios";
import "./SingUp.css";
const SignUp = () => {
  const [user, refetch, isLoading] = useUser();
  const token = localStorage.getItem("token");
  const [name, setName] = useState();
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
  const from = location.state?.from?.pathname || "/";
  // useEffect(() =>{
  //     if(user){
  //         navigate('/')

  //     }
  // },[ user, navigate])

  // useEffect(() =>{

  //     if(!token){
  //         navigate(from, { replace: true });
  //   }

  // }, [token, from, navigate])
  // useEffect(() =>{
  //     if(hookError){
  //         toast(hookError.message)
  //  }
  // },[hookError])

  const emailCheck = (e) => {
    const emailRegex = /\S+@\S+\.\S+/;
    const validEmail = emailRegex.test(e.target.value);
    if (validEmail) {
      setUserInfo({ ...userInfo, email: e.target.value });
      setError({ ...error, emailError: "" });
    } else {
      setError({ ...error, emailError: "Invalid Email" });
      setUserInfo({ ...userInfo, email: "" });
    }
  };

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
      .post("https://book-server-sg0u.onrender.com/api/v1/user/signup", {
        name: name,
        email: userInfo?.email,
        password: userInfo?.password,
      })
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
        return toast.warn(error.response.data.message);
      });
  };
  useEffect(() => {
    if (!user?.email) {
      refetch();
    } else {
      navigate("/");
    }
  }, [refetch, token, user, isLoading, navigate]);
  return (
    <div className="bg-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 singup-image">
            <img
              src="https://boiferry.com/assets/images/register-1.webp"
              alt=""
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 signup-part">
            <form onSubmit={handleSubmit} className="login-form">
              <div>
                <h3 className="mb-4">
                  <b className="text-danger">নাফিউনে </b> আকাউন্ট করুন
                </h3>

                <label htmlFor="name">পুরো নাম</label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  className="d-block"
                  placeholder="Enter Your Name"
                  type="text"
                  name="name"
                  id="email"
                  required
                />

                <label className="mt-2" htmlFor="email">
                  ইমেইল ঠিকানা
                </label>
                <input
                  onChange={emailCheck}
                  className="d-block"
                  placeholder="Enter Your Email"
                  type="email"
                  name="email"
                  id="email"
                  required
                />
                {error?.emailError && (
                  <p className="text-danger">{error.emailError}</p>
                )}

                <label className="mt-2" htmlFor="password">
                  পাসওয়ার্ড
                </label>
                <input
                  onChange={passwordCheck}
                  className="d-block mt-2"
                  type="password"
                  placeholder="Enter Your Password"
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
                  value="রেজিস্টার"
                />
                <p className="mt-3">
                  আমাদের সাথে একাউন্ট আছে?
                  <Link className="text-danger" to="/login">
                    {" "}
                    সাইন ইন
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer className="toast-position" position="top-center" />
    </div>
  );
};

export default SignUp;
