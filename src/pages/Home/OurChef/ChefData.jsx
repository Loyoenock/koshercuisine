import React from "react";
import "./OurChef.css";

const ChefData = (props) => {
  return (
    <div className="chef-card">
      <div className="chef-imaage">
        <img src={props.image} alt="image" className="chef-card__image" />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.description}</p>
    </div>
  );
};

export default ChefData;
