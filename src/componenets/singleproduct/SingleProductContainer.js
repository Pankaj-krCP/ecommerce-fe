import React from "react";
import PopularWrapper from "../home/PopularWrapper";
import SingleProductMain from "./SingleProductMain";
import SingleProductDescription from "./SingleProductDescription";
import SingleProductReview from "./SingleProductReview";

const SingleProductContainer = () => {
  return (
    <>
      <SingleProductMain />
      <SingleProductDescription />
      <SingleProductReview />
      <PopularWrapper />
    </>
  );
};

export default SingleProductContainer;
