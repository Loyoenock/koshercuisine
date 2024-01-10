import React, { useState } from "react";
import "./OrderForm.css";

const OrderForm = (props) => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    address: "",
    order: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the form data here
    if (
      !formData.fullname ||
      !formData.email ||
      !formData.phone ||
      !formData.address ||
      !formData.order
    ) {
      alert("Please fill in all fields");
      return;
    }

    // Perform further actions (e.g., submit the form data)
    // You can replace this alert with your form submission logic
    alert("Form submitted successfully!");
    setFormData({
      fullname: "",
      email: "",
      phone: "",
      address: "",
      order: "",
    });
    props.setTrigger(false);
  };

  return props.trigger ? (
    <div className="order-popup__form">
      <div className="popup-form__inner">
        <h1>Order Form</h1>
        <form onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input
            type="text"
            name="fullname"
            placeholder="Your name.."
            value={formData.fullname}
            onChange={handleChange}
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
          />

          <label>Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Your phone number"
            value={formData.phone}
            onChange={handleChange}
          />

          <label>Address</label>
          <input
            type="text"
            name="address"
            placeholder="Your address"
            value={formData.address}
            onChange={handleChange}
          />

          <label>Order</label>
          <textarea
            name="order"
            placeholder="Write your order here..."
            value={formData.order}
            onChange={handleChange}
          ></textarea>

          <button type="submit" className="btn-submit">
            Make an Order
          </button>
        </form>

        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          close
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
};

export default OrderForm;
