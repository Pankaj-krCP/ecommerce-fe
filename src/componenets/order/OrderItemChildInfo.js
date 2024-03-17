import React from "react";
import { FaCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const OrderItemChildInfo = ({ element, j }) => {
  const navigate = useNavigate();
  return (
    <div className="row p-3" style={{ backgroundColor: "rgb(0 0 0/15%)" }}>
      <div
        className="d-flex align-items-center gap-10 col-3"
        onClick={() => {
          navigate(`/product/${element?.product?._id}`);
        }}
        style={{ cursor: "pointer" }}
      >
        <p>{j + 1}.</p>
        <img
          className="rounded"
          src={element?.product?.images[0]?.url}
          style={{
            padding: "3px",
            width: "60px",
            height: "60px",
            objectFit: "contain",
            background: "white",
          }}
        />
        <p className=" text-center">
          {element?.product?.title?.slice(0, 40) +
            (element?.product?.title?.length > 40 ? "..." : "")}
        </p>
      </div>
      <div className="col-3">
        <p className=" text-center">{element?.count} </p>
      </div>
      <div className="col-3">
        <p className=" text-center">{element?.price} </p>
      </div>
      <div className="col-3 text-center">
        <FaCircle
          style={{
            color: element?.color,
          }}
          className="fs-5"
        />
      </div>
    </div>
  );
};

export default OrderItemChildInfo;
