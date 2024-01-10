import React, { useState } from "react";

import "./Hero.css";
import OrderForm from "../../../components/OrderForm/OrderForm";

const Hero = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <section className="hero-section hero-section__img">
      <div className="hero-content">
        <h1 className="hero-content__title">
          Experience Authentic Kosher Dining
        </h1>
        <p className="hero-content__text">
          Embark on a culinary journey at Kosher Cuisine, where tradition meets
          innovation. Our menu, a blend of rich flavors and authenticity,
          invites you to experience the essence of kosher dining. Join us for a
          delightful encounter with tradition and taste.
        </p>
        <button
          onClick={() => setButtonPopup(true)}
          className="hero-content__btn"
        >
          Make an Order
        </button>
        <OrderForm
          trigger={buttonPopup}
          setTrigger={setButtonPopup}
        ></OrderForm>
      </div>
    </section>
  );
};

export default Hero;
