import React from "react";

const DetailsShippingReturns = ({ details }) => {
  return (
    <div className="d-flex gap-10 flex-column my-2">
      <h3 className="product-heading">Shipping & Returns :</h3>
      <p className="product-data">
        Free shipping & returns available on all orders! We ship all US domestic
        orders within<b>5-10 business days!</b>
      </p>
    </div>
  );
};

export default DetailsShippingReturns;
