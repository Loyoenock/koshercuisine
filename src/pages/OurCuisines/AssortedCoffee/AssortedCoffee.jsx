import React from "react";
import "./AssortedCoffee.css";
import ListItem from "../../../components/ListItem/ListItem";
import coffeeimg from "../../../assets/coffee.jpg";

const cuisineCoffeeLeft = [
  {
    title: "Espresso Elegance",
    description:
      "A rich and bold espresso blend, carefully crafted for those who appreciate the intensity and complexity of a fine coffee. Ideal for a quick pick-me-up.",
    price: "3.00",
  },
  {
    title: "Vanilla Velvet Latte",
    description:
      "Experience the perfect balance of coffee and chocolate in our Mocha Bliss. A delightful blend of rich espresso, steamed milk, and a hint of sweet cocoa.",
    price: "4.40",
  },
  {
    title: " Hazelnut Harmony",
    description:
      "Delight your senses with the aromatic and nutty flavor of Hazelnut Harmony coffee. A well-balanced brew that brings warmth and comfort to every sip.",
    price: "4.50",
  },
  {
    title: "Mocha Bliss",
    description:
      "Experience the perfect balance of coffee and chocolate in our Mocha Bliss. A delightful blend of rich espresso, steamed milk, and a hint of sweet cocoa.",
    price: "5.40",
  },
];

const AssortedCoffee = () => {
  return (
    <section className="container assorted-coffee">
      <h1>
        Assorted <span>Coffee</span>
      </h1>
      <div className="container-grid">
        <div>
          <img src={coffeeimg} alt="coffee" />
        </div>
        <div>
          {cuisineCoffeeLeft.map((item, index) => (
            <ListItem
              key={index} // Add a unique key for each ListItem
              title={item.title}
              description={item.description}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AssortedCoffee;
