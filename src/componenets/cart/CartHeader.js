import React from "react";

const CartHeader = () => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="cart-header py-3 d-flex justify-content-between align-items-center">
          <h4 className="cart-col-1">Product</h4>
          <h4 className="cart-col-2">Price</h4>
          <h4 className="cart-col-3">Quantity</h4>
          <h4 className="cart-col-4">Total</h4>
        </div>
      </div>
    </div>
  );
};

export default CartHeader;
