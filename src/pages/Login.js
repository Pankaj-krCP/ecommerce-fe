import Meta from "../componenets/common/Meta";
import BreadCrumb from "../componenets/common/BreadCrumb";
import LoginContainer from "../componenets/auth/LoginContainer";

const Login = () => {
  return (
    <>
      <Meta title="login" />
      <BreadCrumb title="login" />
      <LoginContainer />
    </>
  );
};

export default Login;
