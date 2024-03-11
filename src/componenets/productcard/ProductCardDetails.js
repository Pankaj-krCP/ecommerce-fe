import React from "react";
import ReactStars from "react-rating-stars-component";

const ProductCardDetails = (props) => {
  const { brand, title, totalrating, description, price, grid } = props;

  return (
    <div className="product-details">
      <h6 className="brand">{brand}</h6>
      <h5 className="product-title">
        {grid != 1
          ? `${
              title.length > 30
                ? title.substring(0, 30) + " ..."
                : title.substring(0, 30)
            }`
          : `${
              title.length > 75
                ? title.substring(0, 75) + " ..."
                : title.substring(0, 75)
            }`}
      </h5>
      <ReactStars
        edit={false}
        count={5}
        value={parseFloat(totalrating) || 0}
        size={24}
        isHalf={true}
        emptyIcon={<i className="far fa-star"></i>}
        halfIcon={<i className="fa fa-star-half-alt"></i>}
        fullIcon={<i className="fa fa-star"></i>}
        activeColor="#ffd700"
      />
      <p
        className={`description ${grid === 1 ? "d-block" : "d-none"}`}
        dangerouslySetInnerHTML={{
          __html: `${
            description.length > 200
              ? description.substring(0, 200) + " ..."
              : description.substring(0, 200)
          }`,
        }}
      ></p>
      <p className="price">Rs. {price}</p>
    </div>
  );
};

export default ProductCardDetails;
