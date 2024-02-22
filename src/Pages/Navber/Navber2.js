import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import logo2 from "../../Images/logo2.png";
import logo2 from "../../Images/abiyanLogo11.png";

import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi2";

import "../Navber/Navber2.css";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { useSelector } from "react-redux";
import useUser from "../../Hooks/useUser";
import SearchIcon from "../../svgIcons/SearchIcon";

const Navber2 = () => {
  const [user] = useUser();
  const token = localStorage.getItem("token");

  // refetch()

  const cart = useSelector((state) => state.cart);

  return (
    <nav className="custom-container p-0 ">
      <Navbar className="searching-nav " expand="lg">
        <Link to="/" className="">
          <img
            className="logo "
            style={{ width: "100px", height: "70px", marginLeft: "30px" }}
            src={logo2}
            alt=""
          />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <div className="search-little-icon">
            <SearchIcon />
          </div>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <div className="d-flex justify-content-center search-field">
            <input
              type="text"
              placeholder="বইয়ের নাম ও লেখকের নাম দিয়ে অনুসন্ধান করুন"
              style={{ borderRadius: " 8px 0px 0px 8px" }}
            />
            <span className="search-button px-3 ">
              {" "}
              <IoSearch
                className=" font-bold"
                style={{
                  color: "white",
                  width: "16px",
                  height: "16px",
                  marginTop: 11,
                }}
              />
            </span>
          </div>
        </Navbar.Collapse>

        <Nav.Link
          className=" text-decoration-none text-black"
          as={Link}
          to="/cart"
        >
          <div className="cart-icon">
            <HiOutlineShoppingBag
              className="add-to-icon1"
              style={{ width: "30px", height: "30px" }}
            />

            {cart?.cartItems?.length}
          </div>
        </Nav.Link>

        {token ? (
          <>
            <p
              className=" sing-Out my-account-aria"
              style={{
                marginRight: "-19px",
              }}
            >
              {/* <Link className=" account-part text-black" to="/side-navbar">
                  আমার একাউন্ট
                </Link> */}
              <Nav.Link
                as={Link}
                to="/side-navbar"
                className="text-black d-flex flex-column align-items-center account-part"
              >
                <div>
                  <AiOutlineUser style={{ width: "30px", height: "30px" }} />
                </div>
                <div className="">
                  <span style={{ fontSize: "14px" }}>My Account</span>
                </div>
              </Nav.Link>
            </p>
          </>
        ) : (
          <p
            className="login-aria"
            style={{
              marginRight: "-14px",
            }}
          >
            <Nav.Link
              as={Link}
              to="/login"
              className="text-black d-flex flex-column align-items-center "
            >
              <div>
                <AiOutlineUser style={{ width: "30px", height: "30px" }} />
              </div>
              <div className="">
                <span style={{ fontSize: "14px" }}>Sign Up/In</span>
              </div>
            </Nav.Link>
          </p>
        )}
      </Navbar>
    </nav>
  );
};

export default Navber2;
