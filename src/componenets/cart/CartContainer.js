import React from "react";
import { useSelector } from "react-redux";
import Container from "../common/Container";
import CartHeader from "./CartHeader";
import CartData from "./CartData";
import CartCheckout from "./CartCheckout";
import EmptyCart from "./EmptyCart";

const CartContainer = () => {
  const cartProducts = useSelector((state) => state?.auth?.cartProducts);
  return (
    <Container class1="cart-wrapper home-wrapper-2 py-5">
      {!cartProducts ? (
        <EmptyCart />
      ) : (
        <>
          <CartHeader />
          <CartData />
          <CartCheckout />
        </>
      )}
    </Container>
  );
};

export default CartContainer;
