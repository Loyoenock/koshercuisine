import React, { useState } from "react";

import { Link, NavLink } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <section className="header-section">
      <div className="container">
        <div className="navbar">
          <Link to="/" className="logo">
            <img src={logo} alt="logo" className="logo" width={100} />
          </Link>
          <ul className={click ? "nav-item active" : "nav-item"}>
            <li onClick={handleClick}>
              <NavLink to="/" className="navigation-link">
                Home
              </NavLink>
            </li>
            <li onClick={handleClick}>
              <NavLink to="/about" className="navigation-link">
                About
              </NavLink>
            </li>
            <li onClick={handleClick}>
              <NavLink to="/ourcuisines" className="navigation-link">
                Our Cuisines
              </NavLink>
            </li>
            <li onClick={handleClick}>
              <NavLink to="/shipping" className="navigation-link">
                Shipping
              </NavLink>
            </li>
            <li onClick={handleClick}>
              <NavLink to="/Contact" className="navigation-link">
                Contact
              </NavLink>
            </li>
            <button>Make an Order</button>
          </ul>
          <div className="mobile-menu" onClick={handleClick}>
            {click ? (
              <FaTimes size={22} style={{ color: "white" }} />
            ) : (
              <FaBars size={22} style={{ color: "white" }} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
