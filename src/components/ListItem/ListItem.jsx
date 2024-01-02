import React from "react";
import "./ListItem.css";

const ListItem = ({ title, description, price, itemImage }) => {
  return (
    <div className="list-items">
      <ul>
        <li>
          {itemImage && <img src={itemImage} alt="item" />}
          <div>
            <h3>{title}</h3>
            {description && <p> {description}</p>}
          </div>
          <h3>${price}</h3>
        </li>
      </ul>
    </div>
  );
};

export default ListItem;
