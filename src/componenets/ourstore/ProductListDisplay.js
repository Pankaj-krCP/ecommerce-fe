import React, { useEffect, useMemo } from "react";
import ProductCard from "../productcard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../features/products/productSlice";

const ProductListDisplay = ({ grid }) => {
  const dispatch = useDispatch();

  const searchBar = useSelector((state) => state?.searchBar?.searchedProduct);
  const productState = useSelector((state) => state?.product?.product) || [];
  const filterState = useSelector((state) => state.productFilter);

  const searchedProduct = useMemo(() => {
    return productState?.filter((item) =>
      item?.title?.toLowerCase().includes(searchBar?.toLowerCase())
    );
  }, [searchBar, productState]);

  useEffect(() => {
    const { sort, tag, brand, category, minPrice, maxPrice } = filterState;
    dispatch(
      getAllProducts({ sort, tag, brand, category, minPrice, maxPrice })
    );
  }, [filterState]);

  return (
    <>
      <div className="product-list pb-5">
        <div className="d-flex gap-10 flex-wrap">
          {searchBar
            ? searchedProduct.map((item) => (
                <ProductCard key={item?._id} item={item} grid={grid} />
              ))
            : productState.map((item) => (
                <ProductCard key={item?._id} item={item} grid={grid} />
              ))}
        </div>
      </div>
    </>
  );
};

export default ProductListDisplay;
