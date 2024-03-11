import React from "react";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const GoBack = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <button
      className="d-flex align-items-center border-0 mb-3 mx-5 bg-transparent gap-10"
      onClick={goBack}
    >
      <HiOutlineArrowLeft className="fs-4" /> Go Back
    </button>
  );
};

export default GoBack;
