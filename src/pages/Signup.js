import React from "react";
import Meta from "../componenets/common/Meta";
import BreadCrumb from "../componenets/common/BreadCrumb";
import SingnUpContainer from "../componenets/auth/SingnUpContainer";

const Signup = () => {
  return (
    <>
      <Meta title={"sign Up"} />
      <BreadCrumb title="sign Up" />
      <SingnUpContainer />
    </>
  );
};

export default Signup;
