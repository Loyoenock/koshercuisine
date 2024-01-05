import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <section className="contact-form__container">
      <h1>Reach us on e-mail</h1>
      <form className="contact-form">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Your name.." />
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" placeholder="Your email.." />
        <label htmlFor="subject">Subject</label>
        <textarea
          id="subject"
          name="subject"
          placeholder="Write something.."
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default ContactForm;
