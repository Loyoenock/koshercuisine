import React from "react";
import HeaderImage from "../../components/HeaderImage/HeaderImage";
import headerbg from "../../assets/about.jpg";

const Contact = () => {
  return (
    <HeaderImage
      headerbg={headerbg}
      heading={["About ", <span>Us</span>]}
      text="Discover the Rich Heritage and Culinary Delights of Kosher Cuisine"
    />
  );
};

export default Contact;
