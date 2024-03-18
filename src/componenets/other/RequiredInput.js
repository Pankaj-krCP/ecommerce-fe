import React from "react";
import CustomInput from "./CustomInput";

const RequiredInput = ({ formik, type, name, disabled }) => {
  return (
    <>
      <CustomInput
        type={type}
        name={name}
        placeholder={`Enter ${name}`}
        value={formik.values[name]}
        onChange={formik.handleChange(name)}
        label={`Enter ${name}`}
        onBlur={formik.handleBlur(name)}
      />
      <div className="error">{formik.touched[name] && formik.errors[name]}</div>
    </>
  );
};

export default RequiredInput;
