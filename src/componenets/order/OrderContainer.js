import React, { useEffect } from "react";
import Container from "../common/Container";
import TitleHeader from "./TitleHeader";
import OrderInfo from "./OrderInfo";
import Empty from "../common/Empty";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../features/user/userSlice";

const OrderContainer = () => {
  const dispatch = useDispatch();
  const orderState = useSelector((state) => state?.auth?.getorderedProduct);
  const orderedProduct = useSelector((state) => state?.auth?.orderedProduct);
  useEffect(() => {
    dispatch(getOrders());
  }, [orderedProduct]);
  return (
    <Container class1="cart-wrapper home-wrapper-2 p-5">
      {orderState ? (
        <>
          <TitleHeader />
          <OrderInfo />
        </>
      ) : (
        <Empty message={"Not Ordered Yet"} />
      )}
    </Container>
  );
};

export default OrderContainer;
