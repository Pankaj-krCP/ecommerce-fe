import React from "react";
import { Link } from "react-router-dom";
import {
  BsLinkedin,
  BsGithub,
  BsYoutube,
  BsInstagram,
  BsSend,
} from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <BsSend className="fs-4 text-white" />
                <h3 className="mb-0 text-white">Sign Up for Newsletter</h3>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group pe-5">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Enter Your Email..."
                  aria-label="Enter Your Email..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4 ps-4">
        <div className="row">
          <div className="col-4">
            <h4 className="text-white mb-4">Contact Us</h4>
            <div>
              <address className="text-white fs-6">
                Hno: XXX-Near Marsh Planet
                <br />
                Solar System
                <br />
                10infinte01
              </address>
              <a
                href="tel:+91 8102090648"
                className="mt-3 d-block mb-1 text-white"
              >
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
          </div>
          <div className="col-3">
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
          </div>
          <div className="col-3">
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
            <div></div>
          </div>
          <div className="col-2">
            <h4 className="text-white mb-4">Quick Links</h4>
            <div className="footer-links d-flex flex-column">
              <Link className="text-white py-2 mb-1">Laptops</Link>
              <Link className="text-white py-2 mb-1">HeadPhones</Link>
              <Link className="text-white py-2 mb-1">Tablet</Link>
              <Link className="text-white py-2 mb-1">Watch</Link>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}: Powered by E-digit
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
