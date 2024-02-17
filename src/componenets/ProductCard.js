import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

function ProductCard(props) {
  const { grid } = props;
  let location = useLocation();
  return (
    <div
      className={`${
        location.pathname == "/store" ? `gr-${12 / grid}` : "col-3"
      }`}
    >
      <Link to="/product/id" className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
          <Link>
            <img src="images/wish.svg" alt="wishlist" />
          </Link>
        </div>
        <div className="product-image">
          <img
            src="images/watch.jpg"
            className="img-fluid"
            alt="product image"
          />
          <img
            src="images/watch.jpg"
            className="img-fluid"
            alt="product image"
          />
        </div>
        <div className="product-details">
          <h6 className="brand">Havels</h6>
          <h5 className="product-title">
            kids HeadPhones bulk 10 pack multi colored for students
          </h5>
          <ReactStars
            count={5}
            size={24}
            value={3}
            edit={false}
            activeColor="#ffd700"
          />
          <p className={`description ${grid === 1 ? "d-block" : "d-none"}`}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book...
          </p>
          <p className="price">$100.00</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <Link>
              <img src="images/prodcompare.svg" alt="compare" />
            </Link>
            <Link>
              <img src="images/view.svg" alt="view" />
            </Link>
            <Link>
              <img src="images/add-cart.svg" alt="addcart" />
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
