import React from "react";
import "./OurChef.css";
import ChefData from "./ChefData";
import chef1 from "../../../assets/chef-1.png";
import chef2 from "../../../assets/chef-2.png";
import chef3 from "../../../assets/chef-3.png";

const OurChef = () => {
  return (
    <section className="chef-section">
      <h2 className="chef-section__title">Our Chefs</h2>
      <p className="chef-section__subtitle">
        Our chefs are the best in the world
      </p>
      <div className="chefcard">
        <ChefData
          image={chef1}
          heading="Chef 1"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates."
        />
        <ChefData
          image={chef2}
          heading="Chef 2"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates."
        />
        <ChefData
          image={chef3}
          heading="Chef 3"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates."
        />
      </div>
    </section>
  );
};

export default OurChef;
