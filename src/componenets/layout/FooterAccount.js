import React from "react";
import { Link } from "react-router-dom";

const FooterAccount = () => {
  return (
    <>
      <h4 className="text-white mb-4">Account</h4>
      <div className="footer-links d-flex flex-column">
        <Link to="/about" className="text-white py-2 mb-1">
          About Us
        </Link>
        <Link to="/faq" className="text-white py-2 mb-1">
          Faq
        </Link>
        <Link to="/contact" className="text-white py-2 mb-1">
          Contact
        </Link>
      </div>
    </>
  );
};

export default FooterAccount;
