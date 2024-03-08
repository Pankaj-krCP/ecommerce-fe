import React from "react";
import Meta from "../componenets/Meta";
import BreadCrumb from "../componenets/BreadCrumb";

import WishlistContainer from "../componenets/wishlist/WishlistContainer";

function Wishlist() {
  return (
    <>
      {" "}
      <Meta title="wishlist" />
      <BreadCrumb title="wishlist" />
      <WishlistContainer />
    </>
  );
}

export default Wishlist;
