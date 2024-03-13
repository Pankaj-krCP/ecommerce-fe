import React, { useEffect } from "react";
import { IoIosGitCompare } from "react-icons/io";
import { CiHeart, CiUser, CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserCart } from "../../features/user/userSlice";

const HeaderUpeerLink = () => {
  const dispatch = useDispatch();
  const userCartState = useSelector((state) => state?.auth);
  useEffect(() => {
    dispatch(getUserCart());
  }, [
    userCartState?.cartProduct,
    userCartState?.deletedCartProduct,
    userCartState?.updatedCartProduct,
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
      <div>
        <Link
          to="/login"
          className="d-flex align-items-center gap-10 text-white"
        >
          <CiUser className="fs-2" />
          <p className="mb-0">
            Log in <br /> My Account
          </p>
        </Link>
      </div>
      <div>
        <Link
          to="/cart"
          className="d-flex align-items-center gap-10 text-white"
        >
          <CiShoppingCart className="fs-1 text-success" />
          <div className="d-flex flex-column">
            <span className="badge bg-white text-dark">
              {userCartState?.cartProducts?.products?.length || 0}
            </span>
            <p className="mb-0">
              Rs. {userCartState?.cartProducts?.cartTotal || 0}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HeaderUpeerLink;
