import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { selectColor } from "../../features/temp/selectedProductSlice";
import { FaCircle, FaCheckCircle } from "react-icons/fa";
import { FaRegCircle, FaRegCircleCheck } from "react-icons/fa6";

const DetailsColor = ({ details }) => {
  const dispatch = useDispatch();
  const [selectedColor, setSelectedColor] = useState("");
  const addColor = (item) => {
    dispatch(selectColor(item));
    setSelectedColor(item);
  };

  return (
    <div className="border-bottom py-3">
      <div className="d-flex flex-column gap-10">
        <h3 className="product-heading">Color :</h3>
        <div className="d-flex gap-2">
          {details?.color?.map((item, index) => (
            <div
              key={index}
              style={{
                cursor: "pointer",
                position: "relative",
              }}
              onClick={() => addColor(item)}
            >
              {selectedColor === item ? (
                item === "white" ? (
                  <FaRegCircleCheck className="fs-5" />
                ) : (
                  <FaCheckCircle
                    style={{
                      color: item,
                    }}
                    className="fs-5"
                  />
                )
              ) : item === "white" ? (
                <FaRegCircle className="fs-5" />
              ) : (
                <FaCircle
                  style={{
                    color: item,
                  }}
                  className="fs-5"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailsColor;
