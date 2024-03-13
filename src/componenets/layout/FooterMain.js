import React from "react";
import FooterContact from "./FooterContact";
import FooterInformation from "./FooterInformation";
import FooterAccount from "./FooterAccount";
import FooterQuickLink from "./FooterQuickLink";

const FooterMain = () => {
  return (
    <footer className="py-4 ps-4">
      <div className="row">
        <div className="col-4">
          <FooterContact />
        </div>
        <div className="col-3">
          <FooterInformation />
        </div>
        <div className="col-3">
          <FooterAccount />
        </div>
        <div className="col-2">
          <FooterQuickLink />
        </div>
      </div>
    </footer>
  );
};

export default FooterMain;
