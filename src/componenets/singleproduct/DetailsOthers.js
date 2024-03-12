import React from "react";

const DetailsOthers = ({ details }) => {
  return (
    <div className="border-bottom py-3">
      <div className="d-flex gap-10 align-items-center my-2">
        <h3 className="product-heading">Type :</h3>
        <p className="product-data">{details?.type}</p>
      </div>
      <div className="d-flex gap-10 align-items-center my-2">
        <h3 className="product-heading">Brand :</h3>
        <p className="product-data">{details?.brand}</p>
      </div>
      <div className="d-flex gap-10 align-items-center my-2">
        <h3 className="product-heading">Category :</h3>
        <p className="product-data">{details?.category}</p>
      </div>
      <div className="d-flex gap-10 align-items-center my-2">
        <h3 className="product-heading">Tags :</h3>
        <p className="product-data">{details.tag}</p>
      </div>
      <div className="d-flex gap-10 align-items-center my-2">
        <h3 className="product-heading">Availablity :</h3>
        <p className="product-data">{details?.availability}</p>
      </div>
    </div>
  );
};

export default DetailsOthers;
