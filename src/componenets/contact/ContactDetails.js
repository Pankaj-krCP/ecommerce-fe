import React from "react";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall, BiInfoCircle } from "react-icons/bi";

const ContactDetails = () => {
  return (
    <div>
      <h3 className="contact-title">Get in touch with us</h3>
      <div>
        <ul className="ps-0">
          <li className="mb-3 d-flex gap-15 align-items-center">
            <AiOutlineHome className="fs-5" />
            <address className="mb-0">
              Hno: XXX-Near Marsh Planet Solar System 10infinte01
            </address>
          </li>
          <li className="mb-3 d-flex gap-15 align-items-center">
            <BiPhoneCall className="fs-5" />
            <a href="tel:- 91 8102090648">+91 8102090648</a>
          </li>
          <li className="mb-3 d-flex gap-15 align-items-center">
            <AiOutlineMail className="fs-5" />
            <a href="mailto:pankajkumar70792@gmail.com">
              pankajkumar70792@gmail.com
            </a>
          </li>
          <li className="mb-3 d-flex gap-15 align-items-center">
            <BiInfoCircle className="fs-5" />
            <p className="mb-0">Monday - Friday 10 AM - 8 PM</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactDetails;
