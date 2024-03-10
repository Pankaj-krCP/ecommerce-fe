import React from "react";
import { useSelector } from "react-redux";
import Container from "../common/Container";
import ProductCard from "../ourstore/ProductCard";

const PopularWrapper = () => {
  const productState = useSelector((state) => state?.product?.product);
  const popularProduct = productState
    ? productState.filter((item) => item.tags === "Popular")
    : [];

  return (
    <Container class1="popular-wrapper home-wrapper-2 py-5">
      <div className="row">
        <div className="col-12">
          <h3 className="section-heading">Our Popular Products</h3>
        </div>
        <ProductCard data={popularProduct.slice(0, 4)} />
      </div>
    </Container>
  );
};

export default PopularWrapper;
