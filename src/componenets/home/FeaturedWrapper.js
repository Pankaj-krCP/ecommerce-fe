import React from "react";
import { useSelector } from "react-redux";
import Container from "../common/Container";
import ProductCard from "../productcard/ProductCard";

const FeaturedWrapper = () => {
  const productState = useSelector((state) => state?.product?.product);
  const featuredProduct = productState
    ? productState.filter((item) => item.tags === "Featured").slice(0, 4)
    : [];

  return (
    <Container class1="featured-wrapper home-wrapper-2 py-5">
      <div className="row">
        <div className="col-12">
          <h3 className="section-heading">Featured Collection</h3>
        </div>
        {featuredProduct &&
          featuredProduct.map((item) => (
            <ProductCard key={item?._id} item={item} />
          ))}
      </div>
    </Container>
  );
};

export default FeaturedWrapper;
