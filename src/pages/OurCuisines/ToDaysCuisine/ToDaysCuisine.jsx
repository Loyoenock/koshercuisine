import React from "react";
import ListItem from "../../../components/ListItem/ListItem";

import meal1 from "../../../assets/meal-1.png";
import meal2 from "../../../assets/meal-2.png";
import meal3 from "../../../assets/meal-3.png";

import "./ToDaysCuisine.css";

const CuisineData = [
  {
    title: "Chicken Soup",
    description: "Chicken Soup with Matzah Balls",
    price: "8.00",
    itemImage: meal1,
  },
  {
    title: "Fried Chicken",
    description: "Fried Chicken with Mashed Potatoes and Gravy",
    price: "12.00",
    itemImage: meal2,
  },
  {
    title: "Baked Salmon",
    description: "Baked Salmon with Roasted Potatoes and Vegetables",
    price: "15.00",
    itemImage: meal3,
  },
];
const ToDaysCuisine = () => {
  return (
    <section className="todays-cuisine__section">
      <div className="container todays-cuisine">
        <h1 className="primary-heading">
          <span>Today's</span> Cuisine
        </h1>
        {CuisineData.map((item, index) => (
          <ListItem
            key={index}
            title={item.title}
            description={item.description}
            price={item.price}
            itemImage={item.itemImage}
          />
        ))}
      </div>
    </section>
  );
};

export default ToDaysCuisine;
