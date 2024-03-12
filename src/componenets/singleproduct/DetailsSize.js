import React from "react";

const DetailsSize = ({ details }) => {
  return (
    <div className="border-bottom py-3">
      <div className="d-flex gap-10 flex-column">
        <h3 className="product-heading">Size :</h3>
        <div className="d-flex flex-wrap gap-15">
          <span className="badge border border-1 bg-white text-dark border-secondary">
            S
          </span>
          <span className="badge border border-1 bg-white text-dark border-secondary">
            M
          </span>
          <span className="badge border border-1 bg-white text-dark border-secondary">
            XL
          </span>
          <span className="badge border border-1 bg-white text-dark border-secondary">
            XXL
          </span>
        </div>
      </div>
    </div>
  );
};

export default DetailsSize;
