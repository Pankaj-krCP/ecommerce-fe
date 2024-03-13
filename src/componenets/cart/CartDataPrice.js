import React from "react";

const CartDataPrice = ({ price }) => {
  return (
    <div className="cart-col-2">
      <h5 className="price">Rs. {price}</h5>
    </div>
  );
};

export default CartDataPrice;
