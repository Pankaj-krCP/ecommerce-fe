import React from "react";
import {
  BsLinkedin,
  BsGithub,
  BsYoutube,
  BsInstagram,
  BsSend,
} from "react-icons/bs";

const FooterContact = () => {
  return (
    <>
      <h4 className="text-white mb-4">Contact Us</h4>
      <div>
        <address className="text-white fs-6">
          Hno: XXX-Near Marsh Planet
          <br />
          Solar System
          <br />
          10infinte01
        </address>
        <a href="tel:+91 8102090648" className="mt-3 d-block mb-1 text-white">
          +91 8102090648
        </a>
        <a
          href="mailto:pankajkumar70792@gmail.com"
          className="mt-4 d-block mb-0 text-white"
        >
          pankajkumar70792@gmail.com
        </a>
        <div className="social_icon d-flex align-items-center gap-30 mt-4">
          <a href="#" className="text-white" alt="social icon">
            <BsLinkedin className="fs-4" />
          </a>
          <a href="#" className="text-white" alt="social icon">
            <BsInstagram className="fs-4" />
          </a>
          <a href="#" className="text-white" alt="social icon">
            <BsGithub className="fs-4" />
          </a>
          <a href="#" className="text-white" alt="social icon">
            <BsYoutube className="fs-4" />
          </a>
        </div>
      </div>
    </>
  );
};

export default FooterContact;
