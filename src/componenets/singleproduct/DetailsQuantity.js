import React from "react";
import { useDispatch } from "react-redux";
import { selectCount } from "../../features/temp/selectedProductSlice";

const DetailsQuantity = ({ details }) => {
  const dispatch = useDispatch();
  return (
    <div className="d-flex align-items-center gap-10">
      <h3 className="product-heading">Quantity :</h3>
      <div className="">
        <input
          type="number"
          name=""
          min={1}
          max={10}
          className="form-control"
          style={{ width: "70px" }}
          onChange={(e) => {
            dispatch(selectCount(e.target.value));
          }}
        />
      </div>
    </div>
  );
};

export default DetailsQuantity;
