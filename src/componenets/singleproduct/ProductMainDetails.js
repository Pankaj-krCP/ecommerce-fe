import React from "react";
import { useLocation } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import Color from "../other/Color";
import { dns } from "../../utils/config";

const ProductMainDetails = ({ details }) => {
  const location = useLocation();
  const productLink = location.pathname;
  const copyToClipboard = (text) => {
    text = dns + text;
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };
  return (
    <div className="main-product-details">
      <div className="border-bottom">
        <h3 className="title">{details?.title}</h3>
      </div>
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
      <div className="py-3">
        <div className="d-flex gap-10 align-items-center my-2">
          <h3 className="product-heading">Type :</h3>
          <p className="product-data">{details?.type}</p>
        </div>
        <div className="d-flex gap-10 align-items-center my-2">
          <h3 className="product-heading">Brand :</h3>
          <p className="product-data">{details?.brand}</p>
        </div>
        <div className="d-flex gap-10 align-items-center my-2">
          <h3 className="product-heading">Category :</h3>
          <p className="product-data">{details?.category}</p>
        </div>
        <div className="d-flex gap-10 align-items-center my-2">
          <h3 className="product-heading">Tags :</h3>
          <p className="product-data">{details.tag}</p>
        </div>
        <div className="d-flex gap-10 align-items-center my-2">
          <h3 className="product-heading">Availablity :</h3>
          <p className="product-data">{details?.availability}</p>
        </div>
        <div className="d-flex gap-10 flex-column mt-2 mb-3">
          <h3 className="product-heading">Size :</h3>
          <div className="d-flex flex-wrap gap-15">
            <span className="badge border border-1 bg-white text-dark border-secondary">
              S
            </span>
            <span className="badge border border-1 bg-white text-dark border-secondary">
              M
            </span>
            <span className="badge border border-1 bg-white text-dark border-secondary">
              XL
            </span>
            <span className="badge border border-1 bg-white text-dark border-secondary">
              XXL
            </span>
          </div>
        </div>
        <div className="d-flex flex-column gap-10 mt-2 mb-3">
          <h3 className="product-heading">Color :</h3>
          <Color color={details?.color} />
        </div>
        <div className="d-flex align-items-center gap-15 flex-row mt-2 mb-3">
          <h3 className="product-heading">Quantity :</h3>
          <div className="">
            <input
              type="number"
              name=""
              min={1}
              max={10}
              className="form-control"
              style={{ width: "70px" }}
              id=""
            />
          </div>
          <div className="d-flex align-items-center gap-30 ms-5">
            <button className="button border-0" type="submit">
              Add to Cart
            </button>
            <button className="button signup">Buy It Now</button>
          </div>
        </div>
        <div className="d-flex align-items-center gap-15 mt-2 mb-3">
          <div>
            <a href="">
              <TbGitCompare className="fs-5 me-2" />
              Add to Compare
            </a>
          </div>
          <div>
            <a href="">
              <AiOutlineHeart className="fs-5 me-2" /> Add to Wishlist
            </a>
          </div>
        </div>
        <div className="d-flex gap-10 flex-column my-2">
          <h3 className="product-heading">Shipping & Returns :</h3>
          <p className="product-data">
            Free shipping & returns available on all orders! We ship all US
            domestic orders within<b>5-10 business days!</b>
          </p>
        </div>
        <div className="d-flex gap-10 align-items-center my-2">
          <h3 className="product-heading">Product Link:</h3>
          <a
            href="#!"
            onClick={() => {
              copyToClipboard(productLink);
            }}
          >
            Copy Product Link
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductMainDetails;
