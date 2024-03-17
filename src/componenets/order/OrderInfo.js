import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import OrderItemInfo from "./OrderItemInfo";
import { getOrders } from "../../features/user/userSlice";

const OrderInfo = () => {
  const dispatch = useDispatch();
  const orderState = useSelector((state) => state?.auth?.getorderedProduct);
  const orderedProduct = useSelector((state) => state?.auth?.orderedProduct);
  useEffect(() => {
    dispatch(getOrders());
  }, [orderedProduct]);
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
