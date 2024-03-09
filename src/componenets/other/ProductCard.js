import React, { useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../../features/products/productSlice";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { getUserProductWishlist } from "../../features/user/userSlice";

function ProductCard(props) {
  const { grid, data } = props;
  let location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserProductWishlist());
  }, []);

  const addToWish = (prodId) => {
    dispatch(addToWishlist(prodId));
    setTimeout(() => {
      dispatch(getUserProductWishlist());
    }, 200);
  };

  const wishlistState = useSelector((state) => state?.auth?.wishlist?.wishlist);
  const wishlistID = wishlistState?.map((item) => item._id);

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
                  srcSet=""
                />
                <img
                  src={
                    item?.images[1]?.url
                      ? item.images[1].url
                      : "images/watch.jpg"
                  }
                  className="img-fluid"
                  alt="product-image"
                  srcSet=""
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
                <p className="price">Rs. {item?.price}</p>
              </div>

              <div className="wishlist-icon position-absolute">
                <button
                  className="border-0 bg-transparent"
                  onClick={() => {
                    addToWish(item?._id);
                  }}
                >
                  {wishlistID?.includes(item?._id) ? (
                    <FaHeart className="fs-5 text-danger" />
                  ) : (
                    <FaRegHeart className="fs-5" />
                  )}
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
