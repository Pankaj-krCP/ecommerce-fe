import React from "react";
import { Link } from "react-router-dom";

const ProductCardImg = (props) => {
  const { id, images } = props;
  return (
    <div className="product-image">
      <Link to={`/product/${id}`}>
        <img
          src={images[0]?.url ? images[0].url : "images/watch.jpg"}
          className="img-fluid"
          alt="product-image"
          srcSet=""
        />
        <img
          src={images[1]?.url ? images[1].url : "images/watch.jpg"}
          className="img-fluid"
          alt="product-image"
          srcSet=""
        />
      </Link>
    </div>
  );
};

export default ProductCardImg;
