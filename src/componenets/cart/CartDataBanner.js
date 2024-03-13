import React from "react";

const CartDataBanner = ({ banner }) => {
  return (
    <div className="cart-col-1 d-flex align-items-center gap-10">
      <div className="bg-white border rounded">
        <img
          src={banner?.product?.images[0]?.url}
          style={{ width: "250px", height: "150px", objectFit: "contain" }}
          className="img-fluid p-2"
          alt="product image"
        />
      </div>
      <div className="w-75">
        <h5 className="title">{banner?.product?.title}</h5>
        {/* <p className="color">Size: X mm</p> */}
        <p className="size">Color: {banner?.color}</p>
      </div>
    </div>
  );
};

export default CartDataBanner;
