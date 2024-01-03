// AboutDetail.js
import React from "react";
import "./AboutDetail.css";

const AboutDetail = () => {
  return (
    <section className="about-detail__section">
      <div className="about-detail__container">
        <div className="about-detail__text">
          <h2 className="heading-secondary">
            Brief About <span>Kosher Cuisine</span>
          </h2>
          <h4 className="heading-secondary__subtitle">Learn more from us</h4>
          <p>
            Welcome to Kosher Cuisine, where our name embodies a sincere
            dedication to authentic Kosher dining. Inspired by the rich tapestry
            of traditions and culinary practices defining Kosher cuisine, each
            dish we serve reflects our commitment to the highest standards of
            Kashrut.
          </p>
          <blockquote>
            Join us on a flavorful journey into the heritage and meticulous
            preparation that make Kosher dining an art form.
          </blockquote>
          <p>
            At Kosher Cuisine, our name is a promise—a commitment to providing a
            haven for those seeking genuine, delightful, and culturally resonant
            dining experiences.
          </p>
        </div>
        <div className="about-detail__text">
          <h2 className="heading-secondary">
            Discover a Place to Dine and Wine
          </h2>
          <h4 className="heading-secondary__subtitle">
            Savor the Atmosphere, Indulge in Culinary Excellence
          </h4>
          <p>
            Experience more than just a meal; indulge in the perfect ambiance
            for your dining pleasure. Our restaurant offers an inviting
            atmosphere where you can savor exquisite Kosher cuisine while
            enjoying a carefully curated selection of wines. Whether it's an
            intimate dinner or a celebration, our place is designed to elevate
            your dining experience.
          </p>
          <blockquote>
            Unwind with a glass of fine wine as you relish the flavors of our
            thoughtfully crafted dishes.
          </blockquote>
          <p>
            At our establishment, we blend culinary mastery with a welcoming
            setting to create a haven for those who appreciate the art of dining
            and wine.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutDetail;
