import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateCartProduct } from "../../features/user/userSlice";

const CartDataQuantity = (props) => {
  const { quantity, id } = props;
  const [count, setCount] = useState();
  const dispatch = useDispatch();

  const countHandler = (e) => {
    setCount(e);
    dispatch(
      updateCartProduct({
        cartItemID: id,
        quantity: e,
      })
    );
  };

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
