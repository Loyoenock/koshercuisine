import React from "react";

import { Link, NavLink } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo.png";
const Navbar = () => {
  return (
    <section className="header-section">
      <div className="container">
        <div className="navbar">
          <Link to="/" className="logo">
            <img src={logo} alt="logo" className="logo" width={100} />
          </Link>
          <ul className="nav-item">
            <li className="nav-link">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/ourcuisines" className="nav-link">
                OurCuisines
              </NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/shipping" className="nav-link">
                {" "}
                Shipping{" "}
              </NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/contact" className="nav-link">
                {" "}
                Contact
              </NavLink>
            </li>
            <li>
              <button>Make an Order</button>
            </li>
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
