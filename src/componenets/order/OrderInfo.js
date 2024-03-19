import React from "react";
import { useSelector } from "react-redux";
import OrderItemInfo from "./OrderItemInfo";

const OrderInfo = () => {
  const orderState = useSelector((state) => state?.auth?.getorderedProduct);

  return (
    <div>
      <div className="row">
        <div className="col-12 mt-3">
          {orderState &&
            orderState
              .slice()
              .reverse()
              .map((item, index) => {
                return <OrderItemInfo item={item} key={index} />;
              })}
        </div>
      </div>
    </div>
  );
};

export default OrderInfo;
