import React from "react";
import Meta from "../componenets/common/Meta";
import BreadCrumb from "../componenets/common/BreadCrumb";
import CartContainer from "../componenets/cart/CartContainer";

const Cart = () => {
  return (
    <>
      <Meta title={"Cart"} />
      <BreadCrumb title={"Cart"} />
      <CartContainer />
    </>
  );
};

export default Cart;
