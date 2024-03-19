import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import resetPasswordSchema from "../../utils/schema/resetPasswordSchema";
import RequiredInput from "../other/RequiredInput";
import { resetPassword } from "../../features/user/userSlice";

const ResetPasswordForm = () => {
  const location = useLocation();
  const getToken = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: resetPasswordSchema,
    onSubmit: (values) => {
      dispatch(resetPassword({ token: getToken, password: values.password }));
    },
  });
  return (
    <form
      action=""
      onSubmit={formik.handleSubmit}
      className="d-flex flex-column gap-15"
    >
      <RequiredInput formik={formik} type={"password"} name={"password"} />
      <RequiredInput
        formik={formik}
        type={"password"}
        name={"confirmPassword"}
      />
      <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
        <button className="button border-0" type="submit">
          Ok
        </button>
      </div>
    </form>
  );
};

export default ResetPasswordForm;
