import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  setMaxpriceFilter,
  setMinpriceFilter,
} from "../../features/filter/productFilterSlice";

const FilterByPrice = () => {
  const [minPrice, setminPrice] = useState(null);
  const [maxPrice, setmaxPrice] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setMinpriceFilter(minPrice));
    dispatch(setMaxpriceFilter(maxPrice));
  }, [minPrice, maxPrice]);

  return (
    <>
      <h5 className="sub-title">Price</h5>
      <div className="d-flex align-items-center gap-10  ">
        <div className="form-floating ">
          <input
            type="number"
            className="form-control "
            id="floatingInput"
            placeholder="name@example.com"
            onChange={(e) => setminPrice(e.target.value)}
          />
          <label htmlFor="floatingInput">From</label>
        </div>
        <div className="form-floating  ">
          <input
            type="number"
            className="form-control "
            id="floatingInput"
            placeholder="To"
            onChange={(e) => setmaxPrice(e.target.value)}
          />
          <label htmlFor="floatingInput1">To</label>
        </div>
      </div>
    </>
  );
};

export default FilterByPrice;
