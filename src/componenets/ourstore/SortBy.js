import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSortFilter } from "../../features/filter/filterSlice";

const SortBy = () => {
  const [sort, SetSort] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSortFilter(sort));
  }, [sort]);

  return (
    <div className="d-flex align-items-center gap-10">
      <p className="mb-0 d-block" style={{ width: "100px" }}>
        Sort By:
      </p>
      <select
        name=""
        defaultValue={sort === null || sort === undefined ? "" : sort}
        className="form-control form-select"
        id=""
        onChange={(e) => SetSort(e.target.value)}
      >
        <option value="title">Alphabetically, A-Z</option>
        <option value="-title">Alphabetically, Z-A</option>
        <option value="price">Price, low to high</option>
        <option value="-price">Price, high to low</option>
        <option value="createdAt">Date, old to new</option>
        <option value="-createdAt">Date, new to old</option>
      </select>
    </div>
  );
};

export default SortBy;
