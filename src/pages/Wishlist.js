import React from "react";
import Meta from "../componenets/common/Meta";
import BreadCrumb from "../componenets/common/BreadCrumb";

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
