import React from "react";
import ListItem from "../../../components/ListItem/ListItem";

import meal1 from "../../../assets/meal-1.png";
import meal2 from "../../../assets/meal-2.png";
import meal3 from "../../../assets/meal-3.png";

import "./AddToCart.css";

const cuisineCartLeft = [
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
const cuisineCartRight = [
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
const AddToCart = () => {
  return (
    <section className="section-addtocart">
      <h1 className="heading-addtocart">
        Click <span> to add to Cart</span>
      </h1>
      <div className="addtocart-container">
        <div className="container todays-cuisine">
          <h1>
            <span>Today's</span> Cuisine
          </h1>
          {cuisineCartLeft.map((item, index) => (
            <ListItem
              key={index}
              title={item.title}
              description={item.description}
              price={item.price}
              itemImage={item.itemImage}
            />
          ))}
        </div>
        <div className="container todays-cuisine">
          <h1 className="heading-secondary">
            <span>Today's</span> Cuisine
          </h1>
          {cuisineCartRight.map((item, index) => (
            <ListItem
              key={index}
              title={item.title}
              description={item.description}
              price={item.price}
              itemImage={item.itemImage}
            />
          ))}
        </div>
      </div>
      <div className="addtocart-btn">
        <h1 className="heading-addtocart">
          <span>Have you </span> Finished?
        </h1>
        <button className="btn-addtocart"> Show cart $ Checkout</button>
      </div>
    </section>
  );
};

export default AddToCart;
