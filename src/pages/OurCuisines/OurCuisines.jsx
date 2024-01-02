import React from "react";
import HeaderImage from "../../components/HeaderImage/HeaderImage";
import headerbg from "../../assets/headerbg.png";
import ToDaysCuisine from "./ToDaysCuisine/ToDaysCuisine";

const OurCuisines = (props) => {
  return (
    <div>
      <HeaderImage
        headerbg={headerbg}
        heading={["Our", <span>Cuisines</span>]}
        text="Discover Divine Flavors: A Culinary Journey through our Kosher Delights"
      />
      <ToDaysCuisine />
    </div>
  );
};

export default OurCuisines;
