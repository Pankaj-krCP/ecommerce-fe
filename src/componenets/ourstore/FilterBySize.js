import React from "react";

const FilterBySize = () => {
  return (
    <>
      <h5 className="sub-title">Size</h5>
      <div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="color-2"
          />
          <label className="form-check-label" htmlFor="color-2">
            S (2)
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="color-2"
          />
          <label className="form-check-label" htmlFor="color-2">
            M (2)
          </label>
        </div>
      </div>
    </>
  );
};

export default FilterBySize;
