import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { addToWishlist } from "../../features/products/productSlice";
import { getUserProductWishlist } from "../../features/user/userSlice";

const ProductCardWishIcon = (props) => {
  const { id } = props;
  const [wish, setWish] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const auth = useSelector((state) => state?.auth);
  const addToWishResult = useSelector((state) => state?.product);
  const wishlistID = useSelector(
    (state) => state?.auth?.wishlist?.wishlist
  )?.map((item) => item._id);

  useEffect(() => {
    setTimeout(() => {
      if (wishlistID?.includes(id)) {
        setWish(1);
      }
    }, 100);
  }, []);

  useEffect(() => {
    dispatch(getUserProductWishlist());
  }, [addToWishResult.addToWishlist]);

  const addToWish = (prodId) => {
    if (!auth?.user) {
      navigate("/login");
    } else {
      dispatch(addToWishlist(prodId));
      setWish(!wish);
    }
  };

  return (
    <div className="wishlist-icon position-absolute">
      <button
        className="border-0 bg-transparent"
        onClick={() => {
          addToWish(id);
        }}
      >
        {wish ? (
          <FaHeart className="fs-5 text-danger" />
        ) : (
          <FaRegHeart className="fs-5" />
        )}
      </button>
    </div>
  );
};

export default ProductCardWishIcon;
