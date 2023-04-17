import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <>
      <div id="header-container">
        <Link to="/">
          <span id="header-btn"> knowild </span>
          <img id="knowild-logo" src={logo} alt="knowild logo" />
        </Link>
      </div>
    </>
  );
}

export default Header;
