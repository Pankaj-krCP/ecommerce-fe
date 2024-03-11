import React from "react";

import PopularWrapper from "../home/PopularWrapper";
import SingleProductMain from "./SingleProductMain";
import SingleProductDescription from "./SingleProductDescription";
import SingleProductReview from "./SingleProductReview";

const SingleProductContainer = (props) => {
  const { product } = props;
  const details = {
    title: product?.title || "title",
    price: product?.price || "price",
    rating: parseFloat(product?.totalrating) || 0,
    ratinglen: product?.ratings?.length || 0,
    type: product?.category || "type",
    brand: product?.brand || "brand",
    category: product?.category || "category",
    tag: product?.tags || "tag",
    availability: parseInt(product?.quantity) > 0 ? "In Stock" : "Out Of Stock",
    color: product?.color || [],
  };
  return (
    <>
      <SingleProductMain images={product?.images} details={details} />
      <SingleProductDescription description={product?.description} />
      <SingleProductReview />
      <PopularWrapper />
    </>
  );
};

export default SingleProductContainer;
