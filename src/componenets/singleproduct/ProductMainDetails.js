import React from "react";
import { useSelector } from "react-redux";
import DetailsTitle from "./DetailsTitle";
import DetailsPriceReviews from "./DetailsPriceReviews";
import DetailsOthers from "./DetailsOthers";
import DetailsSize from "./DetailsSize";
import DetailsColor from "./DetailsColor";
import DetailsQuantity from "./DetailsQuantity";
import AddToCart from "./AddToCart";
import BuyNow from "./BuyNow";
import AddToCompare from "./AddToCompare";
import AddToWishlist from "./AddToWishlist";
import DetailsShippingReturns from "./DetailsShippingReturns";
import DetailsProductLink from "./DetailsProductLink";

const ProductMainDetails = () => {
  const productState = useSelector((state) => state?.product?.singleProduct);
  const details = {
    id: productState?._id || "",
    title: productState?.title || "title",
    price: productState?.price || "price",
    rating: parseFloat(productState?.totalrating) || 0,
    ratinglen: productState?.ratings?.length || 0,
    type: productState?.category || "type",
    brand: productState?.brand || "brand",
    category: productState?.category || "category",
    tag: productState?.tags || "tag",
    availability:
      parseInt(productState?.quantity) > 0 ? "In Stock" : "Out Of Stock",
    color: productState?.color || [],
    quantity: productState?.quantity || 0,
  };

  return (
    <div className="main-product-details">
      <DetailsTitle details={details} />
      <DetailsPriceReviews details={details} />
      <DetailsOthers details={details} />
      <DetailsSize details={details} />
      <DetailsColor details={details} />

      <div className="border-bottom d-flex align-items-center justify-content-between py-3 gap-15">
        <DetailsQuantity details={details} />
        <AddToCart details={details} />
        <BuyNow details={details} />
      </div>

      <div className="d-flex align-items-center gap-15 py-3">
        <AddToCompare details={details} />
        <AddToWishlist details={details} />
      </div>

      <DetailsShippingReturns details={details} />
      <DetailsProductLink details={details} />
    </div>
  );
};

export default ProductMainDetails;
