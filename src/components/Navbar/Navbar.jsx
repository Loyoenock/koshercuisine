import React from "react";

import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo.png";
const Navbar = () => {
  return (
    <section className="header-section">
      <div className="container">
        <div className="navbar">
          <img src={logo} alt="logo" className="logo" width={100} />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
