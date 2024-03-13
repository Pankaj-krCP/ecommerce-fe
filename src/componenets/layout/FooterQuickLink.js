import React from "react";
import { Link } from "react-router-dom";

const FooterQuickLink = () => {
  return (
    <>
      <h4 className="text-white mb-4">Quick Links</h4>
      <div className="footer-links d-flex flex-column">
        <Link className="text-white py-2 mb-1">Laptops</Link>
        <Link className="text-white py-2 mb-1">HeadPhones</Link>
        <Link className="text-white py-2 mb-1">Tablet</Link>
        <Link className="text-white py-2 mb-1">Watch</Link>
      </div>
    </>
  );
};

export default FooterQuickLink;
