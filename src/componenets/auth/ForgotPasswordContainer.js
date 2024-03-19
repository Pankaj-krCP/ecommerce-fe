import React from "react";
import Container from "../common/Container";
import ForgotPasswordForm from "./ForgotPasswordForm";

const ForgotPasswordContainer = () => {
  return (
    <Container class1="forgot-password-wrapper py-5 home-wrapper-2">
      <div className="row">
        <div className="col-12">
          <div className="auth-card">
            <h3 className="text-center mb-3">Reset Your Password</h3>
            <p className="text-center mt-2 mb-3">
              We will send you an email to reset your password
            </p>
            <ForgotPasswordForm />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ForgotPasswordContainer;
