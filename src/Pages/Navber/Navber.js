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
    
      <div className="container main-Navbar " >
        <nav className="navbar navbar-expand-lg" >
          <div className="container-fluid linkup p-0" >
            <Link
              to="/"
              className="navbar-brand subject-link text-decorarion-none "
              onClick={() => setNaValue("/")}
              style={{ color: navVlaue === "/" ? "white" : "black",
                backgroundColor: navVlaue === "/" ? "#12856a" : ""}}
                >
              হোম
            </Link>
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
              style={{ marginLeft: "-20px" }}
            >
              <ul className="navbar-nav " >
                <li className="nav-item  " >
                  <span className=" subject-link2 pb-4">
                  <Link to="/writer" className="text-decoration-none subject-link "  onClick={() => setNaValue("/writer")} style={{ color: navVlaue === "/writer" ? "white" : "black",
                backgroundColor: navVlaue === "/writer" ? "#12856a" : ""}}>লেখক</Link>
                    
                  </span>
                
                </li>
                <li className="nav-item n">
                  <span className=" subject-link2  pb-4">
                    
                    <Link to="/category" className="text-decoration-none subject-link "  onClick={() => setNaValue("/category")} style={{ color: navVlaue === "/category" ? "white" : "black",
                backgroundColor: navVlaue === "/category" ? "#12856a" : ""}}>বিষয়</Link>
                  </span>
                 
                </li>
                <li className="nav-item  ">
                  <span className="subject-link2  pb-4 ">
                   
                    <Link to="/publication" className="text-decoration-none subject-link " onClick={() => setNaValue("/publication")} style={{ color: navVlaue === "/publication" ? "white" : "black",
                backgroundColor: navVlaue === "/publication" ? "#12856a" : ""}}> প্রকাশনী</Link>
                  </span>
              
                </li>

                <li className="nav-item ">
                  <span className=" subject-link2 pb-4 book-fair-part">
                   
                    <Link to="/up-comming-book" className="text-decoration-none subject-link " onClick={() => setNaValue("/up-comming-book")} style={{ color: navVlaue === "/up-comming-book" ? "white" : "black",
                backgroundColor: navVlaue === "/up-comming-book" ? "#12856a" : ""}}>  বইমেলা</Link>
                  </span>
             
                </li>
                <li className="nav-item ">
                  <span className=" subject-link2 pb-4 book-fair-part">
                   
                    <Link to="/up-comming-academic" className="text-decoration-none subject-link  " onClick={() => setNaValue("/up-comming-academic")}  style={{ color: navVlaue === "/up-comming-academic" ? "white" : "black",
                backgroundColor: navVlaue === "/up-comming-academic" ? "#12856a" : ""}}>  একাডেমিক বই</Link>
                  </span>
             
                </li>
                <li className="nav-item ">
                  <span className=" subject-link2 pb-4 book-fair-part">
                   
                    <Link to="/up-comming-offer" className="text-decoration-none subject-link " onClick={() => setNaValue("/up-comming-offer")} style={{ color: navVlaue === "/up-comming-offer" ? "white" : "black",
                backgroundColor: navVlaue === "/up-comming-offer" ? "#12856a" : ""}}>  অফারের বই</Link>
                  </span>
             
                </li>
                <li className="nav-item ">
                  <span className=" subject-link2 pb-4 book-fair-part">
                   
                    <Link to="/up-comming-stesonary" className="text-decoration-none subject-link " onClick={() => setNaValue("/up-comming-stesonary")} style={{ color: navVlaue === "/up-comming-stesonary" ? "white" : "black",
                backgroundColor: navVlaue === "/up-comming-stesonary" ? "#12856a" : ""}}>  ষ্টেশনারী</Link>
                  </span>
             
                </li>

             
              
               
              </ul>
              <ul className="navbar-nav ms-auto ">
                <li className="nav-item">+8801540186257</li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navber;
