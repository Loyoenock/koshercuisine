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
          heading="Chef Miriam Levy"
          description="Miriam brings a rich culinary heritage to Kosher Cuisine, drawing inspiration from her Jewish roots. Trained in both traditional and modern culinary techniques, Chef Miriam's expertise lies in creating innovative dishes that seamlessly blend authenticity with contemporary flavors."
        />
        <ChefData
          image={chef2}
          heading="Chef David Cohen"
          description="David is a passionate advocate for kosher cooking. With a keen eye for detail, he transforms everyday ingredients into extraordinary culinary experiences. Chef David's commitment to quality and taste is evident in every dish he creates, making him a cornerstone of Kosher Cuisine."
        />
        <ChefData
          image={chef3}
          heading="Chef Rachel Weiss"
          description="Rachel is known for her innovative approach to kosher cuisine. With a background in experimenting with diverse flavors and textures, Chef Rachel adds a modern twist to classic kosher dishes. Her creations are a fusion of creativity and respect for tradition, offering a delightful culinary journey."
        />
      </div>
    </section>
  );
};

export default OurChef;
