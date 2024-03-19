import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import forgotPasswordSchema from "../../utils/schema/forgotPasswordSchema";
import RequiredInput from "../other/RequiredInput";
import { forgotPasswordToken } from "../../features/user/userSlice";

const ForgotPasswordForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: forgotPasswordSchema,
    onSubmit: (values) => {
      dispatch(forgotPasswordToken(values));
    },
  });
  return (
    <form
      action=""
      onSubmit={formik.handleSubmit}
      className="d-flex flex-column gap-15"
    >
      <RequiredInput formik={formik} type={"email"} name={"email"} />

      <div className="mt-3 d-flex justify-content-center flex-column gap-15 align-items-center">
        <button className="button border-0" type="submit">
          Submit
        </button>
        <Link to="/login">Cancel</Link>
      </div>
    </form>
  );
};

export default ForgotPasswordForm;
