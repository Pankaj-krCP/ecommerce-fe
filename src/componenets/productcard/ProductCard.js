import React from "react";
import { useLocation } from "react-router-dom";
import ProductCardImg from "./ProductCardImg";
import ProductCardDetails from "./ProductCardDetails";
import ProductCardWishIcon from "./ProductCardWishIcon";
import ProductCardActionBar from "./ProductCardActionBar";

function ProductCard(props) {
  const { item, grid } = props;
  let location = useLocation();

  return (
    <>
      <div
        className={` ${
          location.pathname == "/store" ? `gr-${12 / grid}` : "col-3"
        } `}
      >
        <div className="product-card position-relative mt-2">
          <ProductCardImg id={item?._id} images={item?.images} />

          <ProductCardDetails
            brand={item?.brand}
            title={item?.title}
            totalrating={item?.totalrating}
            description={item?.description}
            price={item?.price}
            grid={grid}
          />

          <ProductCardWishIcon id={item?._id} />

          <ProductCardActionBar id={item?._id} />
        </div>
      </div>
    </>
  );
}

export default ProductCard;
