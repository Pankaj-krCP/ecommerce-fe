import { useState } from "react";
import Container from "../common/Container";
import ProductListDisplay from "./ProductListDisplay";
import SortBy from "./SortBy";
import SetGrid from "./SetGrid";
import FilterList from "./FilterList";
import { resetState } from "../../features/filter/productFilterSlice";
import { useDispatch, useSelector } from "react-redux";

const StoreContainer = () => {
  const [grid, setGrid] = useState(4);
  const dispatch = useDispatch();
  const filterState = useSelector((state) => state.productFilter);
  const { sort, tag, brand, category, minPrice, maxPrice } = filterState;
  const clear = sort || tag || brand || category || minPrice || maxPrice;

  return (
    <Container class1="store-wrapper home-wrapper-2 py-5">
      <div className="row">
        <div className="col-3">
          <span
            className={`badge rounded-3 py-2 px-3 mb-2 ${
              clear ? "bg-success text-white" : "bg-white text-secondary"
            }`}
            style={{ cursor: "pointer" }}
            onClick={() => dispatch(resetState())}
          >
            Clear All
          </span>
          <FilterList />
        </div>
        <div className="col-9">
          <div className="filter-sort-grid d-flex justify-content-between mb-4">
            <SortBy />
            <SetGrid setGrid={setGrid} />
          </div>
          <ProductListDisplay grid={grid} />
        </div>
      </div>
    </Container>
  );
};

export default StoreContainer;
