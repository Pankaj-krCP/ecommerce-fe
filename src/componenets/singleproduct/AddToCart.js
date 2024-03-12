import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProdToCart } from "../../features/user/userSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { resetState } from "../../features/temp/selectedProductSlice";

const AddToCart = ({ details }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedProduct = useSelector((store) => store?.selectedProduct);
  const uploadCart = () => {
    if (selectedProduct?.selectedColor === "") {
      toast.error("Please Choose Color");
    } else if (selectedProduct?.selectedCount < "1") {
      toast.error("Please Choose Quantity");
    } else {
      dispatch(
        addProdToCart({
          product: details?.id,
          count: selectedProduct?.selectedCount,
          color: selectedProduct?.selectedColor,
          price: details?.price,
        })
      );
      dispatch(resetState());
      navigate("/cart");
    }
  };
  return (
    <button
      className="button border-0"
      onClick={() => {
        uploadCart();
      }}
    >
      Add to Cart
    </button>
  );
};

export default AddToCart;
