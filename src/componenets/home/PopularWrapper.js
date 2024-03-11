import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Container from "../common/Container";
import ProductCard from "../productcard/ProductCard";
import { getAllProducts } from "../../features/products/productSlice";

const PopularWrapper = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  const productState = useSelector((state) => state?.product?.product);
  const popularProduct = productState
    ? productState.filter((item) => item.tags === "Popular").slice(0, 4)
    : [];

  return (
    <Container class1="popular-wrapper home-wrapper-2 py-5">
      <div className="row">
        <div className="col-12">
          <h3 className="section-heading">Our Popular Products</h3>
        </div>
        {popularProduct &&
          popularProduct.map((item) => (
            <ProductCard key={item?._id} item={item} />
          ))}
      </div>
    </Container>
  );
};

export default PopularWrapper;
