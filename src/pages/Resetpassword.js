import React from "react";
import Meta from "../componenets/Meta";
import BreadCrumb from "../componenets/BreadCrumb";
import Container from "../componenets/Container";
import CustomInput from "../componenets/CustomInput";

const Resetpassword = () => {
  return (
    <>
      <Meta title="Reset Password" />
      <BreadCrumb title="Reset Password" />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Reset Password</h3>
              <form action="" className="d-flex flex-column gap-15">
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Confirm Password"
                />
                <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                  <button className="button border-0" type="submit">
                    Ok
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Resetpassword;
