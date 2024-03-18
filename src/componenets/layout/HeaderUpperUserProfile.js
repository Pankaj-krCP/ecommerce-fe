import React, { useState, useEffect, useRef } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const HeaderUpperUserProfile = () => {
  const navigate = useNavigate();
  const [openDropDown, setOpenDropDown] = useState(false);
  const userState = useSelector((state) => state?.auth);
  const dropdownRef = useRef(null);

  const dropdownHandler = () => {
    setOpenDropDown(!openDropDown);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
    window.location.reload();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropDown(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
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
          className="w-100 top-100 m-2 border rounded position-absolute"
          style={{ backgroundColor: "#131921" }}
        >
          <button
            onClick={handleLogout}
            className="profile-item w-100 p-2 bg-transparent border-0 rounded border-bottom text-white"
          >
            Log Out
          </button>
          <Link
            to="/my-profile"
            className="profile-item w-100 p-2 text-white text-center rounded"
          >
            View Profile
          </Link>
        </div>
      )}
    </div>
  );
};

export default HeaderUpperUserProfile;
