import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import signUpSchema from "../../utils/schema/signUpSchema";
import { registerUser } from "../../features/user/userSlice";
import RequiredInput from "../other/RequiredInput";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      password: "",
    },
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      dispatch(registerUser(values));
    },
  });

  return (
    <>
      <form
        action=""
        onSubmit={formik.handleSubmit}
        className="d-flex flex-column gap-15"
      >
        <RequiredInput formik={formik} type={"text"} name={"firstName"} />
        <RequiredInput formik={formik} type={"text"} name={"lastName"} />
        <RequiredInput formik={formik} type={"email"} name={"email"} />
        <RequiredInput formik={formik} type={"tel"} name={"mobile"} />
        <RequiredInput formik={formik} type={"password"} name={"password"} />
        <div>
          <div className="mt-3 d-flex justify-content-center gap-30  align-items-center">
            <Link className="button signup" to="/login">
              Login
            </Link>
            <button className="button border-0" type="submit">
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default SignUpForm;
