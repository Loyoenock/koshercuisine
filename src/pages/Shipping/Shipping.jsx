import React from "react";
import HeaderImage from "../../components/HeaderImage/HeaderImage";
import headerbg from "../../assets/dinner-background.jpg";
import ShippingInfo from "./ShippingInfo/ShippingInfo";
import AddToCart from "./AddTocart/AddToCart";

const Shipping = () => {
  return (
    <div>
      <HeaderImage
        headerbg={headerbg}
        heading={["Our ", <span>Shipping</span>]}
        text="We ship our products Accross the Globe"
      />
      <ShippingInfo />
      <AddToCart />
    </div>
  );
};

export default Shipping;
