import React from "react";
import { NavLink } from "react-router-dom";

const HeaderButtomMenuLink = () => {
  return (
    <div className="menu-links">
      <div className="d-flex align-items-center gap-15">
        <NavLink className="text-white" to="/">
          Home
        </NavLink>
        <NavLink className="text-white" to="/store">
          Our Store
        </NavLink>
        <NavLink className="text-white" to="/blog">
          Blogs
        </NavLink>
        <NavLink className="text-white" to="/contact">
          Contact
        </NavLink>
        <NavLink className="text-white" to="/my-orders">
          Orders
        </NavLink>
      </div>
    </div>
  );
};

export default HeaderButtomMenuLink;
