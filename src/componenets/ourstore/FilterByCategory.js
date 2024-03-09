import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../features/pcategory/pcategorySlice";
import { setCategoryFilter } from "../../features/filter/productFilterSlice";

const FilterByCategory = () => {
  const [category, setCategory] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
  }, []);

  useEffect(() => {
    dispatch(setCategoryFilter(category));
  }, [category]);

  const catState = useSelector((store) => store.pcategory.category);
  const filter = useSelector((store) => store.productFilter);

  return (
    <>
      <h3 className="filter-title">Shop By Categories</h3>
      <div>
        <div className="product-tags d-flex flex-wrap align-items-center gap-10">
          {catState &&
            catState.map((item, index) => {
              return (
                <span
                  className={`badge text-secondary rounded-3 py-2 px-3 ${
                    item.title === filter.category
                      ? "bg-success text-white"
                      : "bg-light"
                  }`}
                  style={{ cursor: "pointer" }}
                  key={index}
                  onClick={() =>
                    setCategory(item.title === category ? null : item.title)
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

export default FilterByCategory;
