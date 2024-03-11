import React from "react";
import Meta from "../componenets/common/Meta";
import BreadCrumb from "../componenets/common/BreadCrumb";
import SingleProductContainer from "../componenets/singleproduct/SingleProductContainer";
import GoBack from "../componenets/common/GoBack";

const SingleProduct = () => {
  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrumb title="Product Name" />
      <GoBack />
      <SingleProductContainer />
    </>
  );
};

export default SingleProduct;
