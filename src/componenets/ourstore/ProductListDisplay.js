import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../features/products/productSlice";

const ProductListDisplay = ({ grid }) => {
  const dispatch = useDispatch();

  const productState = useSelector((state) => state?.product?.product);
  const filterState = useSelector((state) => state.productFilter);

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
          <ProductCard data={productState ? productState : []} grid={grid} />
        </div>
      </div>
    </>
  );
};

export default ProductListDisplay;
