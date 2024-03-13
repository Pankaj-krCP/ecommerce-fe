import React from "react";
import { Link } from "react-router-dom";

const HeaderButtomDropDown = () => {
  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 me-5 d-flex align-items-center"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img src="images/menu.svg" alt=""></img>
        <span className="me-5 d-inline-block">Shop Categories</span>
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li>
          <Link className="dropdown-item text-white" to="">
            Action
          </Link>
          Another
        </li>
        <li>
          <Link className="dropdown-item text-white" to="">
            Another action
          </Link>
          Another
        </li>
        <li>
          <Link className="dropdown-item text-white" to="">
            Something else here
          </Link>
          Another
        </li>
      </ul>
    </div>
  );
};

export default HeaderButtomDropDown;
