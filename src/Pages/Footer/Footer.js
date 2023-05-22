import React from "react";
import logo from "../../Images/booklogo.jpg";
import "../Footer/Footer.css";

const Footer = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div>
            <img className="logo" src={logo} alt="" />
          </div>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-telephone-plus-fill"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM12.5 1a.5.5 0 0 1 .5.5V3h1.5a.5.5 0 0 1 0 1H13v1.5a.5.5 0 0 1-1 0V4h-1.5a.5.5 0 0 1 0-1H12V1.5a.5.5 0 0 1 .5-.5z"
              />
            </svg>
            <span className="ms-2"> 01749718743</span>
          </p>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-envelope-open-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8.941.435a2 2 0 0 0-1.882 0l-6 3.2A2 2 0 0 0 0 5.4v.314l6.709 3.932L8 8.928l1.291.718L16 5.714V5.4a2 2 0 0 0-1.059-1.765l-6-3.2ZM16 6.873l-5.693 3.337L16 13.372v-6.5Zm-.059 7.611L8 10.072.059 14.484A2 2 0 0 0 2 16h12a2 2 0 0 0 1.941-1.516ZM0 13.373l5.693-3.163L0 6.873v6.5Z" />
            </svg>
            <span className="ms-2">alamin1090@gmail.com</span>
          </p>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-geo-alt-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
            </svg>
            <span className="ms-2">Dhaka, Bangladesh</span>
          </p>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <h3> GET TO KNOW US </h3>
          <ul>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Contact us</a>
            </li>
            <li>
              <a href="">Term and conditions</a>
            </li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <h3>POLICY</h3>

          <ul>
            <li>
              <a href="">My account</a>
            </li>
            <li>
              <a href="">Account details</a>
            </li>
            <li>
              <a href="">My Orders</a>
            </li>
            <li>
              <a href="">My Cart</a>
            </li>
            <li>
              <a href="">Go to Shop</a>
            </li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <h3>Stay Connected With Us</h3>
          <div className="social-media">
            <h6>
              <a href=""> Facebook</a>
            </h6>
            <h6>
              <a href=""> Lnkedin</a>
            </h6>
            <h6>
              <a href=""> Twitter</a>
            </h6>
          </div>
        </div>
      </div>
      <div className="text-center">
        <span>
          &copy; Copyright 2022 <b>Boi Collection</b> All rights reserved |
          Developed by : Mohammad Al Amin
        </span>
      </div>
    </div>
  );
};

export default Footer;
