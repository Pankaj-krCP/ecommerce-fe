import Meta from "../componenets/Meta";
import BreadCrumb from "../componenets/BreadCrumb";
import { Link } from "react-router-dom";
import Container from "../componenets/Container";
import CustomInput from "../componenets/CustomInput";

const Login = () => {
  return (
    <>
      <Meta title="login" />
      <BreadCrumb title="login" />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Login</h3>
              <form action="" className="d-flex flex-column gap-15">
                <CustomInput type="email" name="email" placeholder="Email" />
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <Link to="/forgot-password" className="px-2">
                  Forgot Password
                </Link>
                <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                  <button className="button border-0">Login</button>
                  <Link to="/signup" className="button signup">
                    SignUp
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;
