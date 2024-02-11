import React from "react";
import Meta from "../componenets/Meta";
import BreadCrumb from "../componenets/BreadCrumb";

function Wishlist() {
  return (
    <>
      {" "}
      <Meta title="wishlist" />
      <BreadCrumb title="wishlist" />
      <div className="wishlist-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="wihslist-card-image">
                  <img
                    src="images/watch.jpg"
                    className="img-fluid w-100"
                    alt="watch"
                  />
                </div>
                <div className="py-3 px-3">
                  <h5 className="title">
                    Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch with Wi-Fi+3G Tablet
                  </h5>
                  <h6 className="price mb-3 mt-3">$ 100</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Wishlist;
