import React from "react";
import HeaderImage from "../../components/HeaderImage/HeaderImage";
import headerbg from "../../assets/headerbg.png";
import ToDaysCuisine from "./ToDaysCuisine/ToDaysCuisine";
import MorningMeal from "./MorningMeal/MorningMeal";
import LunchTime from "./LunchTime/LunchTime";
import AssortedCoffee from "./AssortedCoffee/AssortedCoffee";
import Drinks from "./Drinks/Drinks";
import "./OurCuisines.css";

const OurCuisines = (props) => {
  return (
    <div>
      <HeaderImage
        headerbg={headerbg}
        heading={["Our", <span>Cuisines</span>]}
        text="Discover Divine Flavors: A Culinary Journey through our Kosher Delights"
      />
      <ToDaysCuisine />
      <MorningMeal />
      <LunchTime />
      <AssortedCoffee />
      <Drinks />
    </div>
  );
};

export default OurCuisines;
