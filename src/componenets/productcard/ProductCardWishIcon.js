import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { addToWishlist } from "../../features/products/productSlice";
import { getUserProductWishlist } from "../../features/user/userSlice";

const ProductCardWishIcon = (props) => {
  const { id } = props;
  const dispatch = useDispatch();

  const addToWishResult = useSelector((state) => state?.product);
  const wishlistState = useSelector((state) => state?.auth?.wishlist?.wishlist);
  const wishlistID = wishlistState?.map((item) => item._id);

  useEffect(() => {
    dispatch(getUserProductWishlist());
  }, [addToWishResult.addToWishlist]);

  const addToWish = (prodId) => {
    dispatch(addToWishlist(prodId));
  };

  return (
    <div className="wishlist-icon position-absolute">
      <button
        className="border-0 bg-transparent"
        onClick={() => {
          addToWish(id);
        }}
      >
        {wishlistID?.includes(id) ? (
          <FaHeart className="fs-5 text-danger" />
        ) : (
          <FaRegHeart className="fs-5" />
        )}
      </button>
    </div>
  );
};

export default ProductCardWishIcon;
