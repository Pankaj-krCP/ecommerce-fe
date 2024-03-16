import React, { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const HeaderUpperUserProfile = () => {
  const [openDropDown, setOpenDropDown] = useState(false);
  const userState = useSelector((state) => state?.auth);
  const dropdownHandler = () => {
    setOpenDropDown(!openDropDown);
  };

  return (
    <div
      className={`d-flex flex-column align-items-center text-white border rounded position-relative`}
    >
      {userState?.user ? (
        <div
          className="d-flex align-items-center gap-2"
          style={{ cursor: "pointer" }}
          onClick={dropdownHandler}
        >
          <div className="d-flex align-items-center gap-10">
            <CiUser className="fs-2" />
            <p className="mb-0">
              {userState &&
                userState?.user?.firstName?.slice(0, 10)?.toUpperCase()}
              <br /> My Account
            </p>
          </div>
          {openDropDown ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
        </div>
      ) : (
        <Link
          to="/login"
          className="d-flex align-items-center gap-10 text-white px-2"
          style={{ width: "110px", height: "50px" }}
        >
          <CiUser className="fs-2" />
          <p className="mb-0">Login</p>
        </Link>
      )}

      {openDropDown && (
        <div
          className="w-100 top-100 m-1 border rounded position-absolute"
          style={{ backgroundColor: "#131921" }}
        >
          <Link className="w-100 p-2 text-white">Log Out</Link>
          <Link className="w-100 p-2 text-white">View Profile</Link>
        </div>
      )}
    </div>
  );
};

export default HeaderUpperUserProfile;
