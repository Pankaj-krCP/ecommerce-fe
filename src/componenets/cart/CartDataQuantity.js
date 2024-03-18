import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateCartProduct } from "../../features/user/userSlice";

const CartDataQuantity = (props) => {
  const { quantity, id } = props;
  const [count, setCount] = useState();
  const [updateQuantity, setUpdateQuantity] = useState("");
  const dispatch = useDispatch();

  const countHandler = (e) => {
    setCount(e);
    setUpdateQuantity(e);
  };

  useEffect(() => {
    if (updateQuantity != "") {
      const timeOut = setTimeout(() => {
        dispatch(
          updateCartProduct({
            cartItemID: id,
            quantity: updateQuantity,
          })
        );
      }, 1000);
      return () => {
        clearTimeout(timeOut);
      };
    }
  }, [updateQuantity]);

  useEffect(() => {
    setCount(quantity);
  }, [quantity]);

  return (
    <div>
      <input
        className="form-control"
        type="number"
        name=""
        min={1}
        max={10}
        value={count || ""}
        onChange={(e) => {
          countHandler(e.target.value);
        }}
      />
    </div>
  );
};

export default CartDataQuantity;
