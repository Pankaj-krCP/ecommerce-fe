import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import OrderItemChildInfo from "./OrderItemChildInfo";
import ItemChildHeader from "./ItemChildHeader";

const OrderItemInfo = ({ item }) => {
  const [openItem, setOpenItem] = useState(false);
  return (
    <>
      <div className="d-flex gap-10">
        Ordered Date:
        <p className="text-success">
          {item?.createdAt.split("T").join(" ").split(".")[0]}
        </p>
      </div>
      <div className="m-2 rounded">
        <div
          className="row"
          onClick={() => setOpenItem(!openItem)}
          style={{ cursor: "pointer", backgroundColor: "rgb(0 0 0/5%)" }}
        >
          <div className="d-flex col-3 gap-10 align-items-center">
            {openItem ? (
              <IoIosArrowUp className="text-center fs-5" />
            ) : (
              <IoIosArrowDown className="text-center fs-5" />
            )}
            <p className="text-center pt-3">{item?._id}</p>
          </div>
          <div className="col-3">
            <p className="text-center pt-3">{item?.totalPrice} </p>
          </div>
          <div className="col-3">
            <p className="text-center pt-3">{item?.totalPriceAfterDiscount}</p>
          </div>
          <div className="col-3">
            <p className="text-center pt-3">{item?.orderStatus}</p>
          </div>
        </div>
        <div>
          {openItem && (
            <div>
              <ItemChildHeader />
              {item?.orderItems?.map((i, index) => {
                return <OrderItemChildInfo element={i} key={index} j={index} />;
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default OrderItemInfo;
