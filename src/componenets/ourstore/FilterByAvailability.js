import React from "react";

const FilterByAvailability = () => {
  return (
    <>
      <h5 className="sub-title">Availablity</h5>
      <div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="" />
          <label className="form-check-label" htmlFor="">
            In Stock (1)
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="" />
          <label className="form-check-label" htmlFor="">
            Out of Stock (0)
          </label>
        </div>
      </div>
    </>
  );
};

export default FilterByAvailability;
