import React from "react";
import "./LunchTime.css";
import ListItem from "../../../components/ListItem/ListItem";

const cuisinesDataLeft = [
  {
    title: "Savory Matzo Ball Soup",
    description:
      "Description: A classic Kosher delight featuring light and fluffy matzo balls in a rich chicken broth with carrots and dill.",
    price: "15.95",
  },
  {
    title: "Mediterranean Falafel Platter",
    description:
      "Enjoy a taste of the Middle East with crispy falafel balls, hummus, tahini, and a vibrant Israeli salad.",
    price: "19.95",
  },
  {
    title: "Balsamic Glazed Salmon",
    description:
      "Delight in a perfectly grilled Kosher salmon fillet, marinated in a balsamic glaze, served with quinoa and roasted vegetables.",
    price: "16.95",
  },
  {
    title: "Stuffed Cabbage Rolls",
    description:
      "Tender cabbage leaves filled with a flavorful mixture of ground beef, rice, and spices, simmered in a sweet tomato sauce.",
    price: "13.95",
  },
];

const cuisinesDataRight = [
  {
    title: "Eggplant Parmesan",
    description:
      "Layers of crispy eggplant slices, marinara sauce, and melted cheese create a satisfying and Kosher-friendly vegetarian delight",
    price: "14.95",
  },
  {
    title: "Grilled Chicken Shawarma",
    description:
      "Experience the bold flavors of Kosher cuisine with marinated grilled chicken, served with pita, tahini, and a side of tabbouleh.",
    price: "14.95",
  },
  {
    title: "Mushroom Risotto",
    description:
      "Creamy and rich Kosher risotto infused with the earthy flavors of mushrooms, topped with Parmesan cheese",
    price: "17.99",
  },
  {
    title: "Honey Glazed Roast Brisket",
    description:
      "Slow-cooked and succulent brisket, glazed with honey and savory spices, accompanied by roasted root vegetables.",
    price: "18.99",
  },
];

const LunchTime = () => {
  return (
    <section className="container lunch-time">
      <h1 className="primary-heading">
        Lunch <span>Meal</span>
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

export default LunchTime;
