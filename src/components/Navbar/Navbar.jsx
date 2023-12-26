import React from "react";

import { Link, NavLink } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <section className="header-section">
      <div className="container">
        <div className="navbar">
          <Link to="/" className="logo">
            <img src={logo} alt="logo" className="logo" width={100} />
          </Link>
          <ul className="nav-item">
            <li>
              <NavLink to="/" className="navigation-link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="navigation-link">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/ourcuisines" className="navigation-link">
                Our Cuisines
              </NavLink>
            </li>
            <li>
              <NavLink to="/shipping" className="navigation-link">
                Shipping
              </NavLink>
            </li>
            <li>
              <NavLink to="/Contact" className="navigation-link">
                Contact
              </NavLink>
            </li>
            <button>Make an Order</button>
          </ul>
          <div className="mobile-menu">
            <FaBars size={22} style={{ color: "white" }} />
            <FaTimes size={22} style={{ color: "white" }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
