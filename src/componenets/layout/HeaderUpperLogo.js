import React from "react";
import { Link } from "react-router-dom";

const HeaderUpperLogo = () => {
  return (
    <h2>
      <Link to="/" className="text-white">
        E-digit
      </Link>
    </h2>
  );
};

export default HeaderUpperLogo;
