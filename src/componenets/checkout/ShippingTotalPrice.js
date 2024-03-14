import React from "react";
import { useSelector } from "react-redux";

const ShippingTotalPrice = () => {
  const userCartState = useSelector((state) => state.auth.cartProducts);

  return (
    <>
      <div className="border-bottom py-4">
        <div className="d-flex justify-content-between align-items-center">
          <p className="total">Subtotal</p>
          <p className="total-price">Rs. {userCartState?.cartTotal}</p>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <p className="mb-0 total">Shipping</p>
          <p className="mb-0 total-price">Rs. 50</p>
        </div>
      </div>
      <div className="d-flex py-4 justify-content-between align-items-center">
        <h4 className="total">Total</h4>
        <h5 className="total-price">Rs. {userCartState?.cartTotal + 50}</h5>
      </div>
    </>
  );
};

export default ShippingTotalPrice;
