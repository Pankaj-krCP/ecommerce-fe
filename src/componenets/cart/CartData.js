import React from "react";
import CartDataBanner from "./CartDataBanner";
import CartDataPrice from "./CartDataPrice";
import CartDataQuantity from "./CartDataQuantity";
import CartDataDelete from "./CartDataDelete";
import CartDataTotal from "./CartDataTotal";
import { useSelector } from "react-redux";

const CartData = () => {
  const userCartState = useSelector((state) => state.auth.cartProducts);
  return (
    userCartState &&
    userCartState?.products?.map((item, index) => {
      return (
        <div className="row" key={index}>
          <div className="col-12">
            <div className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center">
              <CartDataBanner banner={item} />
              <CartDataPrice price={item?.price} />
              <div className="cart-col-3 d-flex align-items-center gap-15">
                <CartDataQuantity quantity={item?.count} id={item?._id} />
                <CartDataDelete id={item?._id} />
              </div>
              <CartDataTotal
                total={parseInt(item?.count) * parseFloat(item?.price)}
              />
            </div>
          </div>
        </div>
      );
    })
  );
};

export default CartData;
