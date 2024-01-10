import React from "react";
import "./Drinks.css";
import ListItem from "../../../components/ListItem/ListItem";

const kosherDrinksLeft = [
  {
    title: "Pomegranate Passion",
    price: "3.50",
  },
  {
    title: "Minty Mojito Fusion",
    price: "4.20",
  },
  {
    title: "Tropical Paradise Smoothie",
    price: "5.00",
  },
  {
    title: "Maté Mango Madness",
    price: "4.75",
  },
  {
    title: "Classic Iced Coffee",
    price: "3.99",
  },
];
const kosherDrinksMiddle = [
  {
    title: "Cranberry Citrus Sparkler",
    price: "4.50",
  },
  {
    title: "Ginger Zing Infusion",
    price: "4.25",
  },
  {
    title: "Chai Latte Elegance",
    price: "4.99",
  },
  {
    title: "Pomegranate Passion",
    price: "3.50",
  },
  {
    title: "Minty Mojito Fusion",
    price: "4.20",
  },
];

const kosherDrinksRight = [
  {
    title: "Tropical Paradise Smoothie",
    price: "5.00",
  },
  {
    title: "Maté Mango Madness",
    price: "4.75",
  },
  {
    title: "Classic Iced Coffee",
    price: "3.99",
  },
  {
    title: "Cranberry Citrus Sparkler",
    price: "4.50",
  },
  {
    title: "Blueberry Burst Mocktail",
    price: "4.75",
  },
];
const Drinks = () => {
  return (
    <section className="drinks">
      <div className="container drinks-container">
        <h1>
          Soft <span>Drinks</span>
        </h1>

        <div className="container-grid">
          <div>
            {kosherDrinksLeft.map((item, index) => (
              <ListItem key={index} title={item.title} price={item.price} />
            ))}
          </div>
          <div>
            {kosherDrinksMiddle.map((item, index) => (
              <ListItem key={index} title={item.title} price={item.price} />
            ))}
          </div>
          <div>
            {kosherDrinksRight.map((item, index) => (
              <ListItem key={index} title={item.title} price={item.price} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Drinks;
