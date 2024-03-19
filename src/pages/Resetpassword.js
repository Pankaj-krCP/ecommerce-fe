import React from "react";
import Meta from "../componenets/common/Meta";
import BreadCrumb from "../componenets/common/BreadCrumb";
import ResetPasswordContainer from "../componenets/auth/ResetPasswordContainer";

const Resetpassword = () => {
  return (
    <>
      <Meta title="Reset Password" />
      <BreadCrumb title="Reset Password" />
      <ResetPasswordContainer />
    </>
  );
};

export default Resetpassword;
