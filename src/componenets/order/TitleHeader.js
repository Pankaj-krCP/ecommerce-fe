import React from "react";

const TitleHeader = () => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="row ">
          <div className="col-3">
            <h5 className="text-center">Order Id</h5>
          </div>
          <div className="col-3">
            <h5 className="text-center">Total Amount </h5>
          </div>
          <div className="col-3">
            <h5 className="text-center">Total Amount After Discount </h5>
          </div>
          <div className="col-3">
            <h5 className="text-center">Status </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleHeader;
