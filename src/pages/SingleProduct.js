import React from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Meta from "../componenets/common/Meta";
import BreadCrumb from "../componenets/common/BreadCrumb";
import SingleProductContainer from "../componenets/singleproduct/SingleProductContainer";
import GoBack from "../componenets/common/GoBack";
import { useEffect } from "react";
import { getAProduct } from "../features/products/productSlice";

const SingleProduct = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const getProductId = location.pathname.split("/")[2];
  const productState = useSelector((state) => state?.product?.singleProduct);

  useEffect(() => {
    dispatch(getAProduct(getProductId));
  }, []);

  return (
    <>
      <Meta title={productState?.title} />
      <BreadCrumb title={productState?.title} />
      <GoBack />
      <SingleProductContainer />
    </>
  );
};

export default SingleProduct;
