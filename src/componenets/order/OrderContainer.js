import React from "react";
import Container from "../common/Container";
import TitleHeader from "./TitleHeader";
import OrderInfo from "./OrderInfo";

const OrderContainer = () => {
  return (
    <Container class1="cart-wrapper home-wrapper-2 p-5">
      <TitleHeader />
      <OrderInfo />
    </Container>
  );
};

export default OrderContainer;
