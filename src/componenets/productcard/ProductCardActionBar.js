import React from "react";
import { Link } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";

const ProductCardActionBar = (props) => {
  const { id } = props;
  return (
    <div className="action-bar position-absolute">
      <div className="d-flex flex-column ">
        {/* <button className="border-0 bg-transparent"><img src={prodcompare} alt="compare" /></button> */}
      </div>

      <div className="d-flex flex-column">
        <Link to={"/product/" + id} className="border-0 bg-transparent">
          <IoEyeOutline className="fs-5 text-black" />
          {/* <img src="images/view.svg" alt="view" /> */}
        </Link>
      </div>

      <div className="d-flex flex-column">
        {/* <button className="border-0 bg-transparent"><img src={addcart}  alt="addcart" /></button> */}
      </div>
    </div>
  );
};

export default ProductCardActionBar;
