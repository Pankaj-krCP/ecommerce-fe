import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Container from "../common/Container";
import SignUpForm from "../auth/SignUpForm";

const SingnUpContainer = () => {
  const navigate = useNavigate();
  const authState = useSelector((state) => state.auth);

  useEffect(() => {
    if (authState.createdUser !== null && authState.isSuccess == true) {
      navigate("/login");
    }
  }, [authState]);
  return (
    <Container class1="login-wrapper py-5 home-wrapper-2">
      <div className="row">
        <div className="col-12">
          <div className="auth-card">
            <h3 className="text-center mb-3">SignUp</h3>
            <SignUpForm />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SingnUpContainer;
