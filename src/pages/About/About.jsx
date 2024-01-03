import React from "react";
import HeaderImage from "../../components/HeaderImage/HeaderImage";
import headerbg from "../../assets/about.jpg";
import AboutDetail from "./AboutDetail/AboutDetail";
import OurInfo from "./OurInfo/OurInfo";
import Showcase from "./Showcase/Showcase";

const About = () => {
  return (
    <div>
      <HeaderImage
        headerbg={headerbg}
        heading={["About ", <span>Us</span>]}
        text="Discover the Rich Heritage and Culinary Delights of Kosher Cuisine"
      />
      <AboutDetail />
      <OurInfo />
      <Showcase />
    </div>
  );
};

export default About;
