import React from "react";
import Meta from "../componenets/common/Meta";
import BreadCrumb from "../componenets/common/BreadCrumb";
import OrderContainer from "../componenets/order/OrderContainer";

const Orders = () => {
  return (
    <>
      <Meta title="myorders" />
      <BreadCrumb title="myorders" />
      <OrderContainer />
    </>
  );
};

export default Orders;
