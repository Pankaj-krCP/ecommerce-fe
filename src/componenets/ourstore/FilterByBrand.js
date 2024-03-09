import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBrands } from "../../features/brand/brandSlice";
import { setBrandFilter } from "../../features/filter/filterSlice";

const FilterByBrand = () => {
  const [brand, setBrand] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBrands());
  }, []);

  useEffect(() => {
    dispatch(setBrandFilter(brand));
  }, [brand]);

  const brandState = useSelector((store) => store.brand.brand);
  const filter = useSelector((store) => store.filter);

  return (
    <>
      <h3 className="filter-title">Product Brands</h3>
      <div>
        <div className="product-tags d-flex flex-wrap align-items-center gap-10">
          {brandState &&
            brandState.map((item, index) => {
              return (
                <span
                  className={`badge text-secondary rounded-3 py-2 px-3 ${
                    item.title === filter.brand
                      ? "bg-success text-white"
                      : "bg-light"
                  }`}
                  style={{ cursor: "pointer" }}
                  key={index}
                  onClick={() =>
                    setBrand(item.title === brand ? null : item.title)
                  }
                >
                  {item.title}
                </span>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default FilterByBrand;
