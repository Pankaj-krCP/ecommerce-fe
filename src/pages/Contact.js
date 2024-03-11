import React from "react";
import Meta from "../componenets/common/Meta";
import BreadCrumb from "../componenets/common/BreadCrumb";
import ContactContainer from "../componenets/contact/ContactContainer";

const Contact = () => {
  return (
    <>
      <Meta title={"contact us"} />
      <BreadCrumb title="Contact Us" />
      <ContactContainer />
    </>
  );
};

export default Contact;
