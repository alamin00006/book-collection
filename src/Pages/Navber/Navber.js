import React, { useEffect, useState } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import useCategories from "../../Hooks/useCategories";
import "../Navber/Navber.css";
import useBookFairs from "../../Hooks/useBookFair";
import usePublications from "../../Hooks/usePublications";
import useWriters from "../../Hooks/useWriters";
import { Nav, Navbar } from "react-bootstrap";
import LIneIcon from "../../svgIcons/LIneIcon";

const Navber = () => {
  const { pathname } = useLocation();

  const [navVlaue, setNaValue] = useState(pathname);

  useEffect(() => {
    setNaValue(pathname);
  }, [pathname]);

  return (
    <div>
      <div className="custom-container main-Navbar ">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid linkup p-0">
            {/* <Link
              to="/"
              className="navbar-brand subject-link text-decorarion-none "
              onClick={() => setNaValue("/")}
              style={{
                color: navVlaue === "/" ? "white" : "black",
                backgroundColor: navVlaue === "/" ? "#f29434" : "",
              }}
            >
              হোম
            </Link> */}
            <button
              className="navbar-toggler "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#main_nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <Navbar.Toggle aria-controls="basic-navbar-nav">
                <LIneIcon />
              </Navbar.Toggle>
            </button>
            <div
              className="collapse navbar-collapse"
              id="main_nav"
              // style={{ marginLeft: "-22px" }}
            >
              <ul className="navbar-nav nav-item">
                <Link
                  to="/"
                  style={{
                    color: navVlaue === "/" ? "white" : "black",
                    backgroundColor: navVlaue === "/" ? "#f29434" : "",
                  }}
                  className=" subject-link text-decorarion-none "
                  onClick={() => setNaValue("/")}
                >
                  <li>
                    <span className=" subject-link2 pb-4">হোম</span>
                  </li>
                </Link>
                <Link
                  to="/writer"
                  style={{
                    color: navVlaue === "/writer" ? "white" : "black",
                    backgroundColor: navVlaue === "/writer" ? "#f29434" : "",
                  }}
                  className="text-decoration-none subject-link "
                  onClick={() => setNaValue("/writer")}
                >
                  <li>
                    <span className=" subject-link2 pb-4">লেখক</span>
                  </li>
                </Link>
                <Link
                  to="/category"
                  className="text-decoration-none subject-link "
                  style={{
                    color: navVlaue === "/category" ? "white" : "black",
                    backgroundColor: navVlaue === "/category" ? "#f29434" : "",
                  }}
                  onClick={() => setNaValue("/category")}
                >
                  <li className="">
                    <span className=" subject-link2  pb-4">বিষয়</span>
                  </li>
                </Link>
                <Link
                  to="/publication"
                  className="text-decoration-none subject-link "
                  style={{
                    color: navVlaue === "/publication" ? "white" : "black",
                    backgroundColor:
                      navVlaue === "/publication" ? "#f29434" : "",
                  }}
                  onClick={() => setNaValue("/publication")}
                >
                  <li className=" ">
                    <span className="subject-link2  pb-4 "> প্রকাশনী</span>
                  </li>
                </Link>
                <Link
                  to="/up-comming-book"
                  className="text-decoration-none subject-link "
                  style={{
                    color: navVlaue === "/up-comming-book" ? "white" : "black",
                    backgroundColor:
                      navVlaue === "/up-comming-book" ? "#f29434" : "",
                  }}
                  onClick={() => setNaValue("/up-comming-book")}
                >
                  <li className=" ">
                    <span className=" subject-link2 pb-4 book-fair-part">
                      {" "}
                      বইমেলা
                    </span>
                  </li>
                </Link>
                <Link
                  to="/up-comming-academic"
                  className="text-decoration-none subject-link  "
                  style={{
                    color:
                      navVlaue === "/up-comming-academic" ? "white" : "black",
                    backgroundColor:
                      navVlaue === "/up-comming-academic" ? "#f29434" : "",
                  }}
                  onClick={() => setNaValue("/up-comming-academic")}
                >
                  <li className=" ">
                    <span className=" subject-link2 pb-4 book-fair-part">
                      {" "}
                      একাডেমিক বই
                    </span>
                  </li>
                </Link>
                <Link
                  to="/up-comming-offer"
                  className="text-decoration-none subject-link "
                  style={{
                    color: navVlaue === "/up-comming-offer" ? "white" : "black",
                    backgroundColor:
                      navVlaue === "/up-comming-offer" ? "#f29434" : "",
                  }}
                  onClick={() => setNaValue("/up-comming-offer")}
                >
                  <li>
                    <span className=" subject-link2 pb-4 book-fair-part">
                      {" "}
                      অফারের বই
                    </span>
                  </li>
                </Link>
                <Link
                  to="/up-comming-stesonary"
                  className="text-decoration-none subject-link "
                  style={{
                    color:
                      navVlaue === "/up-comming-stesonary" ? "white" : "black",
                    backgroundColor:
                      navVlaue === "/up-comming-stesonary" ? "#f29434" : "",
                  }}
                  onClick={() => setNaValue("/up-comming-stesonary")}
                >
                  <li>
                    <span className=" subject-link2 pb-4 book-fair-part">
                      {" "}
                      ষ্টেশনারী
                    </span>
                  </li>
                </Link>
              </ul>
              <ul className="navbar-nav ms-auto ">
                <li className="">+8801540186257</li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navber;
