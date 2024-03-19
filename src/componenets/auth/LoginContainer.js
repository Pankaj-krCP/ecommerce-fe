import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Container from "../common/Container";
import LoginForm from "../auth/LoginForm";

const LoginContainer = () => {
  const authState = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (authState.user !== null && authState.isError == false) {
      navigate("/");
    }
  }, [authState]);
  return (
    <Container class1="login-wrapper py-5 home-wrapper-2">
      <div className="row">
        <div className="col-12">
          <div className="auth-card">
            <h3 className="text-center mb-3">Login</h3>
            <LoginForm />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default LoginContainer;
