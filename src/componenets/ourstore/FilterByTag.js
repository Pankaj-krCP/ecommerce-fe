import React, { useEffect, useState } from "react";
import { tags } from "../../utils/constant";
import { setTagFilter } from "../../features/filter/productFilterSlice";
import { useDispatch, useSelector } from "react-redux";

const FilterByTag = () => {
  const [tag, setTag] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTagFilter(tag));
  }, [tag]);

  const filter = useSelector((store) => store.productFilter);

  return (
    <>
      <h3 className="filter-title">Product Tags</h3>
      <div>
        <div className="product-tags d-flex flex-wrap align-items-center gap-10">
          {tags &&
            tags.map((item, index) => {
              return (
                <span
                  className={`badge text-secondary rounded-3 py-2 px-3 ${
                    item.title === filter.tag
                      ? "bg-success text-white"
                      : "bg-light"
                  }`}
                  style={{ cursor: "pointer" }}
                  key={index}
                  onClick={() => setTag(item.title === tag ? null : item.title)}
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

export default FilterByTag;
