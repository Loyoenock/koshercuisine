import React from "react";
import "./MorningMeal.css";
import ListItem from "../../../components/ListItem/ListItem";

const cuisinesDataLeft = [
  {
    title: "Classic Hebrew Breakfast",
    description:
      "A delightful Jewish breakfast with sweet cheese-filled blintzes, potato latkes, and a side of applesauce. Paired perfectly with a hot cup of tea",
    price: "15.95",
  },
  {
    title: " Mediterranean Breakfast Bliss",
    description:
      "Taste the Mediterranean with shakshuka, poached eggs in a flavorful tomato sauce, served with pita and a refreshing cucumber salad.",
    price: "11.95",
  },
  {
    title: "Wholesome Morning Feast",
    description:
      "Indulge in a wholesome breakfast with a vegetable omelet, Greek yogurt, seasonal berries, and a warm bagel with coffee.",
    price: "12.95",
  },
  {
    title: " Sunrise Delight",
    description:
      "Start your day right with scrambled eggs, smoked salmon, fresh fruits, and whole-grain toast. Complete with your choice of hot beverage",
    price: "13.95",
  },
];

const cuisinesDataRight = [
  {
    title: " Bagel Extravaganza",
    description:
      "Dive into a delightful breakfast with fresh bagels, lox, cream cheese, and traditional toppings. A classic New York-style experience.",
    price: "14.95",
  },
  {
    title: "Garden Fresh Morning",
    description:
      "Embrace the garden with a vegetable frittata, spinach and tomato salad, whole-grain toast, and herbal tea",
    price: "12.95",
  },
  {
    title: "Israeli Breakfast Platter",
    description:
      "Experience Israel with hummus, falafel, Israeli salad, and warm pita. Complete with tahini and aromatic Middle Eastern coffee.",
    price: "11.95",
  },
  {
    title: "Sweet Beginnings",
    description:
      "Indulge your sweet tooth with fluffy pancakes, maple syrup, fresh berries, and a choice of crispy bacon or vegetarian sausage.",
    price: "10.95",
  },
];
const MorningMeal = () => {
  return (
    <section className="morning-meal">
      <h1>
        Morning <span>Meal</span>
      </h1>
      <div className="container-grid">
        <div>
          {cuisinesDataLeft.map((cuisine, index) => (
            <ListItem
              title={cuisine.title}
              description={cuisine.description}
              price={cuisine.price}
            />
          ))}
        </div>

        <div>
          {cuisinesDataRight.map((cuisine, index) => (
            <ListItem
              title={cuisine.title}
              description={cuisine.description}
              price={cuisine.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MorningMeal;
