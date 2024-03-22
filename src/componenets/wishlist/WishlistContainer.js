import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Container from "../common/Container";
import { addToWishlist } from "../../features/products/productSlice";
import { getUserProductWishlist } from "../../features/user/userSlice";
import Empty from "../common/Empty";

const WishlistContainer = () => {
  const dispatch = useDispatch();
  const wishlistState = useSelector((state) => state?.auth?.wishlist?.wishlist);

  useEffect(() => {
    getWishlistFromDb();
  }, []);

  const getWishlistFromDb = () => {
    dispatch(getUserProductWishlist());
  };

  const removeFromWishlist = (id) => {
    dispatch(addToWishlist(id));
    setTimeout(() => {
      dispatch(getUserProductWishlist());
    }, 200);
  };

  return (
    <>
      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
        <div className="row">
          {(wishlistState?.length === 0 || !wishlistState) && (
            <Empty message={"No Data"} />
          )}
          {wishlistState?.map((item, index) => {
            return (
              <div className="col-3" key={index}>
                <div className="wishlist-card position-relative">
                  <div className="wishlist-card-image bg-white">
                    <Link to={`/product/${item?._id}`}>
                      <img
                        src={
                          item?.images[0]?.url
                            ? item?.images[0].url
                            : "images/watch.jpg"
                        }
                        alt="watch"
                        className="img-fluid w-100 d-block mx-auto"
                      />
                    </Link>
                  </div>
                  <img
                    src="images/cross.svg"
                    alt="cross"
                    className="position-absolute cross img-fluid"
                    onClick={() => {
                      removeFromWishlist(item?._id);
                    }}
                  />
                  <div className="py-3 px-3">
                    <h5 className="title">
                      {item?.title.substring(0, 25) + " ..."}
                    </h5>
                    <h6 className="price">Rs. {item?.price}</h6>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </>
  );
};

export default WishlistContainer;
