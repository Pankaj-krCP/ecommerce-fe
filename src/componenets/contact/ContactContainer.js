import React from "react";
import Container from "../common/Container";
import ContactMap from "./ContactMap";
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";

const ContactContainer = () => {
  return (
    <Container class1="contact-wrapper py-5 home-wrapper-2">
      <ContactMap />
      <div className="contact-inner-wrapper d-flex justify-content-between mt-5">
        <ContactForm />
        <ContactDetails />
      </div>
    </Container>
  );
};

export default ContactContainer;
