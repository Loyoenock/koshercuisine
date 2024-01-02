import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import youtube from "../../assets/youtube.svg";
import instagram from "../../assets/instagram.svg";

import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer-section">
      <div className="footer-section__top">
        <div className="footer-section__top__left">
          <Link to="/" className="logo">
            <img src={logo} alt="logo" className="logo" width={100} />
          </Link>
        </div>
        <div className="footer-section__top__right">
          <a href="/">
            <img
              src={facebook}
              alt="facebook"
              className="facebook icon"
              width={30}
            />
          </a>
          <a href="/">
            <img
              src={twitter}
              alt="twitter"
              className="twitter icon"
              width={30}
            />
          </a>
          <a href="/">
            <img
              src={youtube}
              alt="twitter"
              className="youtube icon"
              width={30}
            />
          </a>
          <a href="/">
            <img
              src={instagram}
              alt="instagram"
              className="instagram"
              width={30}
            />
          </a>
        </div>
      </div>
      <div className="footer-section__bottom">
        <div className="footer-section__bottom__address">
          <h4>Contact</h4>
          <a href="/"> Address: 123 Street, City, Country</a>
          <a href="/">Phone: +123 456 789</a>
          <a href="/">Email: info@koshercuisine.com </a>
        </div>
        <div className="footer-section__bottom__links">
          <h4>Important Links</h4>
          <a href="/">Our Cuisines </a>
          <a href="/">Book Now </a>
          <a href="/">Contact</a>
        </div>
        <div className="footer-section__bottom__policies">
          <h4>Policies </h4>
          <a href="/">Terms of Use</a>
          <a href="/">Privacy Policy</a>
          <a href="/">Cookie Policy</a>
        </div>
      </div>
      <p className="footer-section__copy-right"> &copy; 2024 Kosher Cuisine</p>
    </section>
  );
};

export default Footer;
