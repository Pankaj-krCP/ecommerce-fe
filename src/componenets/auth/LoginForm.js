import React from "react";
import CustomInput from "../other/CustomInput";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { loginUser } from "../../features/user/userSlice";
import { useDispatch } from "react-redux";
import loginSchema from "../../utils/schema/loginSchema";
import RequiredInput from "../other/RequiredInput";

const LoginForm = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      dispatch(loginUser(values));
    },
  });

  return (
    <>
      <form
        action=""
        onSubmit={formik.handleSubmit}
        className="d-flex flex-column gap-15"
      >
        <RequiredInput formik={formik} type={"email"} name={"email"} />
        <RequiredInput formik={formik} type={"password"} name={"password"} />
        <div>
          <Link to="/forgot-password">Forgot Password</Link>
          <div className="mt-3 d-flex justify-content-center gap-15  align-items-center">
            <button className="button border-0" type="submit">
              Login
            </button>
            <Link className="button signup" to="/signup">
              Sign up
            </Link>
          </div>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
