import React from "react";
import { Link } from "react-router-dom";

const BreadCrumb = () => {
  return (
    <div>
      <h3 className="website-name">E Digit</h3>
      <nav style={{ "--bs-breadcrumb-divider": "" }} aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link className="text-dark total-price" to="/cart">
              Cart
            </Link>
          </li>

          <li
            className="breadcrumb-item total-price text-success"
            aria-current="page"
          >
            Information
          </li>
          <li className="breadcrumb-item total-price active">Shipping</li>
          <li
            className="breadcrumb-item total-price active"
            aria-current="page"
          >
            Payment
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default BreadCrumb;
