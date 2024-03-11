import React from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import contactSchema from "../../utils/schema/contactSchema";
import { createQuery } from "../../features/contact/contactSlice";
import RequiredInput from "../other/RequiredInput";

const ContactForm = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      comment: "",
    },
    validationSchema: contactSchema,
    onSubmit: (values) => {
      dispatch(createQuery(values));
      formik.resetForm();
    },
  });
  return (
    <div>
      <h3 className="contact-title mb-4">Contact</h3>
      <form
        action=""
        onSubmit={formik.handleSubmit}
        className="d-flex flex-column gap-15"
      >
        <div>
          <RequiredInput formik={formik} type={"text"} name={"name"} />
        </div>
        <div>
          <RequiredInput formik={formik} type={"email"} name={"email"} />
        </div>
        <div>
          <RequiredInput formik={formik} type={"tel"} name={"mobile"} />
        </div>
        <div>
          <textarea
            className="w-100 form-control"
            id=""
            cols="30"
            rows="4"
            placeholder="Comment"
            name="comment"
            onChange={formik.handleChange("comment")}
            onBlur={formik.handleBlur("comment")}
            value={formik.values.comment}
          ></textarea>
          <div className="errors">
            {formik.touched.comment && formik.errors.comment}
          </div>
        </div>
        <div>
          <button className="button border-0">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
