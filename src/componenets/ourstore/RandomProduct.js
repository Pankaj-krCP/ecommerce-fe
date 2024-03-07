import React from "react";
import ReactStars from "react-rating-stars-component";

const RandomProduct = () => {
  return (
    <>
      <h3 className="filter-title">Random Product</h3>
      <div>
        <div className="random-products mb-3 d-flex">
          <div className="w-50">
            <img src="images/watch.jpg" className="img-fluid" alt="watch" />
          </div>
          <div className="w-50">
            <h5>kids headphones bulk 1 pack multi colored for stdents</h5>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
            <b>$ 300</b>
          </div>
        </div>
        <div className="random-products d-flex">
          <div className="w-50">
            <img src="images/watch.jpg" className="img-fluid" alt="watch" />
          </div>
          <div className="w-50">
            <h5>kids headphones bulk 1 pack multi colored for stdents</h5>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
            <b>$ 300</b>
          </div>
        </div>
      </div>
    </>
  );
};

export default RandomProduct;
