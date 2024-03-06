import Meta from "../componenets/Meta";
import BreadCrumb from "../componenets/BreadCrumb";
import { useNavigate } from "react-router-dom";
import Container from "../componenets/Container";
import { useSelector } from "react-redux";
import LoginForm from "../componenets/LoginForm";
import { useEffect } from "react";

const Login = () => {
  const authState = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (authState.user !== null && authState.isError == false) {
      navigate("/");
    }
  }, [authState]);

  return (
    <>
      <Meta title="login" />
      <BreadCrumb title="login" />
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
    </>
  );
};

export default Login;
