import React from "react";
import { BsSend } from "react-icons/bs";

const FooterUpper = () => {
  return (
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
  );
};

export default FooterUpper;
