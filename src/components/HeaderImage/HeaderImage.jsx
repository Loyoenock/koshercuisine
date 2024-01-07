import React from "react";
import "./HeaderImage.css";

const HeaderImage = (props) => {
  return (
    <div
      className="container"
      style={{
        background: `url(${props.headerbg}) no-repeat bottom center / cover`,
        height: "60vh",
      }}
    >
      <div className="header-content">
        <h1 className="main-heading">{props.heading}</h1>
        <p className="subtitle-text">{props.text}</p>
      </div>
    </div>
  );
};

export default HeaderImage;
