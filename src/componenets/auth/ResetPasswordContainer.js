import React, { useEffect } from "react";
import Container from "../common/Container";
import ResetPasswordForm from "./ResetPasswordForm";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ResetPasswordContainer = () => {
  const navigate = useNavigate();
  const resetPass = useSelector((state) => state?.auth?.resetPassword);
  useEffect(() => {
    if (resetPass) {
      navigate("/login");
    }
  }, [resetPass]);
  return (
    <Container class1="login-wrapper py-5 home-wrapper-2">
      <div className="row">
        <div className="col-12">
          <div className="auth-card">
            <h3 className="text-center mb-3">Reset Password</h3>
            <ResetPasswordForm />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ResetPasswordContainer;
