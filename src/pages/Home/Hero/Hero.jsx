import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-section hero-section__img">
      <div className="hero-content">
        <h1 className="hero-content__title">Welcome to Kosher Cuisine</h1>
        <p className="hero-content__text">
          We gurantee you the best food for a healthy Living
        </p>
        <button className="hero-content__btn">Make an Order</button>
      </div>
    </section>
  );
};

export default Hero;
