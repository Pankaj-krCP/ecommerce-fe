import React from "react";
import Meta from "../componenets/common/Meta";
import BreadCrumb from "../componenets/common/BreadCrumb";
import ForgotPasswordContainer from "../componenets/auth/ForgotPasswordContainer";

const Forgotpassword = () => {
  return (
    <>
      <Meta title="forgotpassword" />
      <BreadCrumb title="forgotpassword" />
      <ForgotPasswordContainer />
    </>
  );
};

export default Forgotpassword;
