import React from "react";
import Container from "../common/Container";
import ProductMainImg from "./ProductMainImg";
import ProductMainDetails from "./ProductMainDetails";

const SingleProductMain = (props) => {
  const { images, details } = props;
  return (
    <Container class1="main-product-wrapper py-5 home-wrapper-2">
      <div className="row">
        <div className="col-6">
          <ProductMainImg images={images || []} />
        </div>
        <div className="col-6">
          <ProductMainDetails details={details} />
        </div>
      </div>
    </Container>
  );
};

export default SingleProductMain;
