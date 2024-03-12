import React from "react";
import { TbGitCompare } from "react-icons/tb";

const AddToCompare = ({ details }) => {
  return (
    <div>
      <a href="">
        <TbGitCompare className="fs-5 me-2" />
        Add to Compare
      </a>
    </div>
  );
};

export default AddToCompare;
