import React from "react";
import HeaderButtomDropDown from "./HeaderButtomDropDown";
import HeaderButtomMenuLink from "./HeaderButtomMenuLink";

const HeaderBottom = () => {
  return (
    <header className="header-bottom py-3">
      <div className="container-xxl menu-bottom d-flex align-items-center gap-30">
        <HeaderButtomDropDown />
        <HeaderButtomMenuLink />
      </div>
    </header>
  );
};

export default HeaderBottom;
