import React, { useState } from "react";
import FilterByCategory from "./FilterByCategory";
import FilterByAvailability from "./FilterByAvailability";
import FilterByPrice from "./FilterByPrice";
import FilterByColors from "./FilterByColors";
import FilterBySize from "./FilterBySize";
import FilterByTag from "./FilterByTag";
import RandomProduct from "./RandomProduct";
import FilterByBrand from "./FilterByBrand";

const FilterList = () => {
  return (
    <>
      <div className="filter-card mb-3">
        <FilterByCategory />
      </div>

      <div className="filter-card mb-3">
        <h3 className="filter-title">Filter By</h3>
        <div>
          {/* <FilterByAvailability /> */}
          <FilterByPrice />
          {/* <FilterByColors /> */}
          {/* <FilterBySize /> */}
        </div>
      </div>

      <div className="filter-card mb-3">
        <FilterByTag />
      </div>

      <div className="filter-card mb-3">
        <FilterByBrand />
      </div>

      {/* <div className="filter-card mb-3">
        <RandomProduct />
      </div> */}
    </>
  );
};

export default FilterList;
