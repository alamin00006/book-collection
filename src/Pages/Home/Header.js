import React from "react";
import Navber from "../Navber/Navber";
import Navber2 from "../Navber/Navber2";
import "./Header.css";
import OffCanvasNavbar from "../OffCanvasNavbar/OffCanvasNavbar";

const Header = () => {
  return (
    <>
      <div
        className="first-navbar navbar-section "
        style={{ position: "sticky", top: 0, zIndex: 999 }}
      >
        <Navber2></Navber2>
      </div>
      <div className="second-navbar">
        <Navber></Navber>
      </div>
      <OffCanvasNavbar />
    </>
  );
};

export default Header;
