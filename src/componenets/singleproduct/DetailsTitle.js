import React from "react";

const DetailsTitle = ({ details }) => {
  return (
    <div className="border-bottom pb-3">
      <h3 className="title">{details?.title}</h3>
    </div>
  );
};

export default DetailsTitle;
