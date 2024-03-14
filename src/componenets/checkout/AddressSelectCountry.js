import React from "react";

const AddressSelectCountry = ({ formik }) => {
  return (
    <div className="w-100">
      <select
        name="country"
        value={formik.values.country}
        onChange={formik.handleChange("country")}
        onBlur={formik.handleBlur("country")}
        className="form-control form-select"
        id=""
      >
        <option value="" disabled>
          Select Country
        </option>
        <option value="India">India</option>
      </select>
      <div className="error ms-2">
        {formik.touched.country && formik.errors.country}
      </div>
    </div>
  );
};

export default AddressSelectCountry;
