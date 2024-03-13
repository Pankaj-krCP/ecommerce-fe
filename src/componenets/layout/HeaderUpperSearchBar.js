import React from "react";
import { BsSearch } from "react-icons/bs";

const HeaderUpperSearchBar = () => {
  return (
    <div className="input-group mb-0">
      <input
        type="text"
        className="form-control"
        placeholder="Seach Product Here..."
        aria-label="Seach Product Here..."
        aria-describedby="basic-addon2"
      />
      <span className="input-group-text p-2" id="basic-addon2">
        <BsSearch className="fs-6" />
      </span>
    </div>
  );
};

export default HeaderUpperSearchBar;
