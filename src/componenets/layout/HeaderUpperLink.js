import React, { useEffect } from "react";
import { IoIosGitCompare } from "react-icons/io";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserCart } from "../../features/user/userSlice";
import HeaderUpperUserProfile from "./HeaderUpperUserProfile";

const HeaderUpperLink = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state?.auth);
  useEffect(() => {
    dispatch(getUserCart());
  }, [
    userState?.cartProduct,
    userState?.deletedCartProduct,
    userState?.updatedCartProduct,
  ]);

  return (
    <div className="header-upper-links d-flex align-items-center justify-content-between">
      <div>
        <Link
          to="/compare-product"
          className="d-flex align-items-center gap-10 text-white"
        >
          <IoIosGitCompare className="fs-2" />
          <p className="mb-0">
            Compare <br /> Products
          </p>
        </Link>
      </div>
      <div>
        <Link
          to="/wishlist"
          className="d-flex align-items-center gap-10 text-white"
        >
          <CiHeart className="fs-2" />
          <p className="mb-0">
            Favourite <br /> wishlist
          </p>
        </Link>
      </div>
      <HeaderUpperUserProfile />
      <div>
        <Link
          to="/cart"
          className="d-flex align-items-center gap-10 text-white"
        >
          <CiShoppingCart className="fs-1" />
          <div className="d-flex flex-column">
            <span className="badge bg-white text-dark">
              {userState?.cartProducts?.products?.length || 0}
            </span>
            <p className="mb-0">
              Rs. {userState?.cartProducts?.cartTotal || 0}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HeaderUpperLink;
