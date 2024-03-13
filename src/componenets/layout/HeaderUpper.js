import React from "react";
import HeaderUpperLogo from "./HeaderUpperLogo";
import HeaderUpperSearchBar from "./HeaderUpperSearchBar";
import HeaderUpeerLink from "./HeaderUpeerLink";

const HeaderUpper = () => {
  return (
    <header className="header-upper py-3">
      <div className="container-xxl row align-items-center">
        <div className="col-2">
          <HeaderUpperLogo />
        </div>
        <div className="col-5">
          <HeaderUpperSearchBar />
        </div>
        <div className="col-5">
          <HeaderUpeerLink />
        </div>
      </div>
    </header>
  );
};

export default HeaderUpper;
