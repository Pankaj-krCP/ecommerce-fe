import React from "react";
import { Link } from "react-router-dom";

const FooterInformation = () => {
  return (
    <>
      <h4 className="text-white mb-4">Information</h4>
      <div className="footer-links d-flex flex-column">
        <Link to="/privacy-policy" className="text-white py-2 mb-1">
          Privacy Policy
        </Link>
        <Link to="/refund-policy" className="text-white py-2 mb-1">
          Refund Policy
        </Link>
        <Link to="/shipping-policy" className="text-white py-2 mb-1">
          Shipping Policy
        </Link>
        <Link to="/term-condition" className="text-white py-2 mb-1">
          Terms & Conditions
        </Link>
        <Link to="/blog" className="text-white py-2 mb-1">
          Blogs
        </Link>
      </div>
    </>
  );
};

export default FooterInformation;
