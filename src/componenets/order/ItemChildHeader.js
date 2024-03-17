import React from "react";

const ItemChildHeader = () => {
  return (
    <div className="row p-3" style={{ backgroundColor: "rgb(0 0 0/10%)" }}>
      <div className="col-3">
        <h6 className="text-center">Product Name </h6>
      </div>
      <div className="col-3">
        <h6 className="text-center">Quantity</h6>
      </div>
      <div className="col-3">
        <h6 className="text-center">Price </h6>
      </div>
      <div className="col-3">
        <h6 className="text-center">Color </h6>
      </div>
    </div>
  );
};

export default ItemChildHeader;
