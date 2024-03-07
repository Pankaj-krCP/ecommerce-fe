import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

function ProductCard(props) {
  const { grid, data } = props;
  let location = useLocation();

  return (
    <>
      {data?.map((item, index) => {
        return (
          <div
            key={index}
            className={` ${
              location.pathname == "/store" ? `gr-${12 / grid}` : "col-3"
            } `}
          >
            <div className="product-card position-relative mt-2">
              <div className="product-image">
                <img
                  src={
                    item?.images[0]?.url
                      ? item.images[0].url
                      : "images/watch.jpg"
                  }
                  className="img-fluid"
                  alt="product-image"
                  srcset=""
                />
                <img
                  src={
                    item?.images[1]?.url
                      ? item.images[1].url
                      : "images/watch.jpg"
                  }
                  className="img-fluid"
                  alt="product-image"
                  srcset=""
                />
              </div>

              <div className="product-details">
                <h6 className="brand">{item?.brand}</h6>
                <h5 className="product-title">
                  {grid != 1
                    ? item?.title.substring(0, 30) + " ..."
                    : item?.title}
                </h5>
                <ReactStars
                  edit={false}
                  count={5}
                  value={parseFloat(item?.totalrating)}
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
                    __html: item?.description.substring(0, 200) + " ...",
                  }}
                ></p>
                <p className="price">$ {item?.price}</p>
              </div>

              <div className="wishlist-icon position-absolute">
                <button className="border-0 bg-transparent">
                  <img src="images/wish.svg" alt="wishlist" />
                </button>
              </div>

              <div className="action-bar position-absolute">
                <div className="d-flex flex-column ">
                  {/* <button className="border-0 bg-transparent"><img src={prodcompare} alt="compare" /></button> */}
                </div>

                <div className="d-flex flex-column">
                  <Link
                    to={"/product/" + item?._id}
                    className="border-0 bg-transparent"
                  >
                    <img src="images/view.svg" alt="view" />
                  </Link>
                </div>

                <div className="d-flex flex-column">
                  {/* <button className="border-0 bg-transparent"><img src={addcart}  alt="addcart" /></button> */}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ProductCard;
