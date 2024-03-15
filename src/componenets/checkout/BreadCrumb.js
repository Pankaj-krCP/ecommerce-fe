import React from "react";
import { Link } from "react-router-dom";

const BreadCrumb = ({ success }) => {
  return (
    <div>
      <nav style={{ "--bs-breadcrumb-divider": "" }} aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link className="text-dark total-price" to="/cart">
              Cart
            </Link>
          </li>

          <li
            className={`breadcrumb-item total-price ${
              success === "shipping" ? "text-success active" : "active"
            }`}
            aria-current="page"
          >
            Shipping
          </li>
          <li
            className={`breadcrumb-item total-price ${
              success === "payment" ? "text-success active" : "active"
            }`}
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
