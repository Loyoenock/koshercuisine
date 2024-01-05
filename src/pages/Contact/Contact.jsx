import React from "react";
import HeaderImage from "../../components/HeaderImage/HeaderImage";
import headerbg from "../../assets/contact.jpg";
import ContactForm from "./ContactForm/ContactForm";

const Contact = () => {
  return (
    <section className="contact">
      <HeaderImage
        headerbg={headerbg}
        heading={["Contact ", <span>Us</span>]}
        text="Reach Out to Us – Your Kosher Culinary Journey Awaits!"
      />
      <ContactForm />
    </section>
  );
};

export default Contact;
