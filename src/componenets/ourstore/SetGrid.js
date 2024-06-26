import React from "react";
import { useSelector } from "react-redux";

const SetGrid = ({ setGrid }) => {
  const total = useSelector((state) => state?.product?.product?.length);

  return (
    <div className="d-flex align-items-center gap-10">
      <p className="totalproducts mb-0">{total} Product</p>
      <div className="d-flex gap-10 align-items-center grid">
        <img
          onClick={() => {
            setGrid(4);
          }}
          src="images/gr4.svg"
          className="d-block img-fluid"
          alt="grid"
        />
        <img
          onClick={() => {
            setGrid(3);
          }}
          src="images/gr3.svg"
          className="d-block img-fluid"
          alt="grid"
        />
        <img
          onClick={() => {
            setGrid(2);
          }}
          src="images/gr2.svg"
          className="d-block img-fluid"
          alt="grid"
        />
        <img
          onClick={() => {
            setGrid(1);
          }}
          src="images/gr.svg"
          className="d-block img-fluid"
          alt="grid"
        />
      </div>
    </div>
  );
};

export default SetGrid;
