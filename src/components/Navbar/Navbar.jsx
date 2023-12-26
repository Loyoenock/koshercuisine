import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

import "./Navbar.css";

const Navbar = () => {
  return (
    <section className="header">
      <div className="container">
        <div className="navbar">
          <Link to="/" className="logo">
            <img
              src="./assets/logo-1.png"
              alt="logo"
              className="logo-img"
              width={80}
            />
          </Link>

          <ul className="nav-item">
            <li>
              <Link to="/" className="navigation">
                Home
              </Link>
            </li>
            <li>
              <Link to="/OurCuisine" className="navigation">
                OurCuisine
              </Link>
            </li>
            <li>
              <Link to="/about" className="navigation">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/shipping" className="navigation">
                Shipping
              </Link>
            </li>
            <li>
              <Link to="/contact" className="navigation">
                Contact Us
              </Link>
            </li>
            <li>
              <button>Make Order</button>
            </li>
          </ul>
          <div className="mobile-nav">
            <FaTimes size={25} style={{ color: "white" }} />
            <FaBars size={25} style={{ color: "white" }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
