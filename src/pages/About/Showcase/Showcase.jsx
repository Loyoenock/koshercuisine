import React from "react";
import "./Showcase.css";

import showcase1 from "../../../assets/headerimage.jpg";
import showcase2 from "../../../assets/headerimg.jpg";
import showcase3 from "../../../assets/headerimg-3.jpg";
import showcase4 from "../../../assets/headerimg-4.jpg";
import showcase5 from "../../../assets/headerimg-5.jpg";
import showcase6 from "../../../assets/about-5.jpg";
import showcase7 from "../../../assets/about-4.jpg";
import showcase8 from "../../../assets/about-3.jpg";
import showcase9 from "../../../assets/dinner.jpg";
import showcase10 from "../../../assets/about-1.jpg";

const Showcase = () => {
  return (
    <section className="showcase">
      <figure className="showcase__item-1">
        <img src={showcase1} alt="showcase 1" className="showcase__img" />
      </figure>
      <figure className="showcase__item-2">
        <img src={showcase2} alt="showcase 2" className="showcase__img" />
      </figure>
      <figure className="showcase__item-3">
        <img src={showcase3} alt="showcase 3" className="showcase__img" />
      </figure>
      <figure className="showcase__item-4">
        <img src={showcase4} alt="showcase 4" className="showcase__img" />
      </figure>
      <figure className="showcase__item-5">
        <img src={showcase5} alt="showcase 5" className="showcase__img" />
      </figure>
      <figure className="showcase__item-6">
        <img src={showcase6} alt="showcase 6" className="showcase__img" />
      </figure>
      <figure className="showcase__item-7">
        <img src={showcase7} alt="showcase 7" className="showcase__img" />
      </figure>
      <figure className="showcase__item-8">
        <img src={showcase8} alt="showcase 8" className="showcase__img" />
      </figure>
      <figure className="showcase__item-9">
        <img src={showcase9} alt="showcase 9" className="showcase__img" />
      </figure>
      <figure className="showcase__item-10">
        <img src={showcase10} alt="showcase 10" className="showcase__img" />
      </figure>
    </section>
  );
};

export default Showcase;
