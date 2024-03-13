import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deleteCartProduct } from "../../features/user/userSlice";

const CartDataDelete = ({ id }) => {
  const dispatch = useDispatch();
  const deleteHandler = () => {
    dispatch(deleteCartProduct(id));
  };
  return (
    <div>
      <AiFillDelete
        className="fs-4"
        style={{ cursor: "pointer" }}
        onClick={deleteHandler}
      />
    </div>
  );
};

export default CartDataDelete;
