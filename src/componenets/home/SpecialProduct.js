import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

function SpecialProduct(props) {
  const { title, brand, image, totalrating, price, sold, quantity, id } = props;
  return (
    <div className="col-4">
      <div className="special-product-card">
        <div className="d-flex justify-content-between">
          <div className="product-image">
            <img
              src={image ? image : "images/watch.jpg"}
              className="img-fluid"
              alt="watch"
            />
          </div>
          <div className="special-product-content">
            <h5 className="brand">
              {brand?.slice(0, 20) + `${brand?.length > 20 ? " ..." : ""}`}
            </h5>
            <h6 className="title">
              {title?.slice(0, 40) + `${title?.length > 40 ? " ..." : ""}`}
            </h6>
            <ReactStars
              edit={false}
              count={5}
              value={parseFloat(totalrating)}
              size={24}
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd700"
            />
            <p className="price">
              <span className="red-p">Rs. {price}</span>&nbsp;
              {/* <strike>$200</strike> */}
            </p>
            <div className="discount-till d-flex align-items-center gap-10">
              <p className="mb-0">
                <b>5 Days </b>
              </p>
              <div className="d-flex gap-10 align-items-center">
                <span className="badge rounded-circle p-3 bg-warning">1</span>:
                <span className="badge rounded-circle p-3 bg-warning">1</span>:
                <span className="badge rounded-circle p-3 bg-warning">1</span>
              </div>
            </div>
            <div className="prod-count my-3">
              <p>Products: {quantity}</p>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: (quantity / (quantity + sold)) * 100 + "%" }}
                  aria-valuenow={quantity}
                  aria-valuemin={0}
                  aria-valuemax={sold + quantity}
                ></div>
              </div>
            </div>
            <Link className="button" to={`/product/` + id}>
              View
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecialProduct;
