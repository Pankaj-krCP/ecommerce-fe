import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CartCheckout = () => {
  const userCartState = useSelector((state) => state?.auth?.cartProducts);
  return (
    <div className="row">
      <div className="col-12 py-2 mt-4">
        <div className="d-flex justify-content-between align-items-baseline">
          <Link to="/store" className="button">
            Continue To Shopping
          </Link>
          <div className="d-flex flex-column align-items-end">
            <h4>SubTotal: Rs. {userCartState?.cartTotal}</h4>
            <p>Taxes and shipping calculated at checkout</p>
            <Link to="/checkout" className="button">
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCheckout;
