import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider01 from "../../../assets/slider-01.jpg";
import slider02 from "../../../assets/slider-02.jpg";
import slider03 from "../../../assets/slider-03.jpg";
import slider04 from "../../../assets/slider-04.jpg";
import slider05 from "../../../assets/slider-05.jpg";
import slider06 from "../../../assets/slider-06.jpg";
import { BsFillStarFill } from "react-icons/bs";
import Slider from "react-slick";

import "./OurCulinary.css";

const OurCulinary = () => {
  const [images, setImages] = useState([
    { id: 1, url: slider01 },
    { id: 2, url: slider02 },
    { id: 3, url: slider03 },
    { id: 4, url: slider04 },
    { id: 5, url: slider05 },
    { id: 6, url: slider06 },
  ]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <section className="slider-section">
      <div className="slider-container">
        <div className="slider-wrapper">
          <div className="slider-content">
            <h2 className="slider_content__title">
              Explore Our Culinary Masterpiece
            </h2>
            <h3 className="slider_content__subtitle">
              Savor the Richness of Kosher Delights
            </h3>
            <p className="slider_content__text">
              As you feast your eyes on our visual gallery, let us narrate the
              stories behind each creation. Our chefs pour their expertise and
              love into every dish, creating a dining experience that goes
              beyond taste. Each meal is a reflection of our commitment to
              quality, authenticity, and the timeless traditions of kosher
              cuisine.
              <br />
              <br />
              Come join us on this culinary adventure, where every bite is a
              celebration of heritage and flavor. At Kosher Cuisine, we don't
              just serve meals; we create memories through the language of food.
              Indulge in the extraordinary, and let your senses revel in the
              extraordinary journey of kosher dining.
            </p>
            <blockquote className="slider_content__blockquote">
              At Kosher Cuisine, we believe that every dish tells a story, and
              each bite is a chapter in the rich narrative of culinary
              traditions. Join us on a journey where passion meets palate, and
              every meal is a celebration of taste and heritage
            </blockquote>
          </div>
          <div className="slider-carousal">
            <div>
              <Slider {...settings}>
                {images.map((image) => (
                  <div key={image.id}>
                    <img src={image.url} alt="slider" />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
        <div className="slider-footer__container">
          <div className="slide_card slider-card__left">
            <img src={slider01} alt="slider" className="slider-card__image" />

            <div className="slider-card__content">
              <div className="slider-card__title">
                <BsFillStarFill className="slider-card__icon" />
                <h3 className="slider-card__heading">Assorted Ingredients</h3>
              </div>
              <p className="slider-card__text">
                We use only the freshest ingredients to ensure the highest
                quality of taste and nutrition. Our chefs handpick each
                ingredient to make sure that every dish is a masterpiece.
              </p>
            </div>
          </div>

          <div className="slide_card slider-card__right">
            <img src={slider02} alt="slider" className="slider-card__image" />

            <div className="slider-card__content">
              <div className="slider-card__title">
                <BsFillStarFill className="slide-card__icon" />
                <h3 className="slider-card__heading">Reservation</h3>
              </div>
              <p className="slider-card__text">
                Reserve your spot and let us craft moments of culinary delight
                tailored just for you. We can't wait to welcome you to Kosher
                Cuisine
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCulinary;
