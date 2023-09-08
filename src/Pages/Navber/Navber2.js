import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo2 from "../../Images/logo2.png";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

import "../Navber/Navber2.css";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import useUser from "../../Hooks/useUser";
import SearchIcon from "../../svgIcons/SearchIcon";

const Navber2 = () => {
  const [user] = useUser();
  const token = localStorage.getItem("token");

  // refetch()

  const cart = useSelector((state) => state.cart);

  return (
    <div className="container p-0">
      <Navbar className="searching-nav" expand="lg">
        <Container fluid>
          <Link to="/">
            <img className="logo" src={logo2} alt="" />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <div className="search-little-icon">
              <SearchIcon />
            </div>
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="ms-1 my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex search-field">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button className="text-white search-button">Search</Button>
            </Form>
          </Navbar.Collapse>

          <Nav.Link
            className="ms-5 text-decoration-none text-white"
            as={Link}
            to="/cart"
          >
            <div className="cart-icon">
              <ShoppingCartIcon className="add-to-icon1" />
              {cart?.cartItems?.length}
            </div>
          </Nav.Link>

          {token ? (
            <>
              <p className="mt-3 ms-3 text-black sing-Out my-account-aria">
                <Link className="text-white account-part" to="/side-navbar">
                  আমার একাউন্ট
                </Link>
              </p>
            </>
          ) : (
            <p className="login-aria">
              <Nav.Link
                as={Link}
                to="/login"
                className="ms-3 text-white d-flex align-items-center"
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-person-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path
                      fill-rule="evenodd"
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                    />
                  </svg>
                </div>
                <div className="ms-2 mt-2">
                  <span>লগ ইন</span>
                </div>
              </Nav.Link>
            </p>
          )}
        </Container>
      </Navbar>
    </div>
  );
};

export default Navber2;
