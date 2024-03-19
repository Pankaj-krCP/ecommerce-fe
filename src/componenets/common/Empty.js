import React from "react";
import { FaNotesMedical } from "react-icons/fa6";

const Empty = ({ message }) => {
  return (
    <div>
      <div className="d-flex flex-column gap-15 align-items-center p-5">
        <FaNotesMedical
          style={{ width: "100px", height: "100px", color: "rgb(0 0 0 / 25%)" }}
        />
        <h5>{message}</h5>
      </div>
    </div>
  );
};

export default Empty;
