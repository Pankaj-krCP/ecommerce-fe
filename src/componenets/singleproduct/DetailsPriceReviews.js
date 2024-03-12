import React from "react";
import ReactStars from "react-rating-stars-component";

const DetailsPriceReviews = ({ details }) => {
  return (
    <div className="border-bottom py-3">
      <p className="price">Rs. {details?.price}</p>
      <div className="d-flex align-items-center gap-10">
        <ReactStars
          count={5}
          size={24}
          value={details?.rating}
          edit={false}
          activeColor="#ffd700"
        />
        <p className="mb-0 t-review">({details?.ratinglen} Reviews)</p>
      </div>
      <a className="review-btn" href="#review">
        Write a Review
      </a>
    </div>
  );
};

export default DetailsPriceReviews;
