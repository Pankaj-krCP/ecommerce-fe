import React from "react";
import { useFormik } from "formik";
import profileSchema from "../../utils/schema/profileSchema";
import CustomInput from "../other/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../features/user/userSlice";

const ProfileForm = ({ edit }) => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state?.auth?.user);

  const formik = useFormik({
    initialValues: {
      firstName: userState?.firstName || "",
      lastName: userState?.lastName || "",
      email: userState?.email || "",
      mobile: userState?.mobile || "",
    },
    validationSchema: profileSchema,
    onSubmit: (values) => {
      dispatch(updateProfile(values));
    },
  });
  return (
    <>
      <div className="m-5">
        <form
          action=""
          onSubmit={formik.handleSubmit}
          className="d-flex flex-column gap-15"
        >
          <div>
            <p>First Name</p>
            <CustomInput
              type={"text"}
              name={"firstName"}
              value={formik.values["firstName"]}
              onChange={formik.handleChange("firstName")}
              onBlur={formik.handleBlur("firstName")}
              disabled={!edit}
            />
            <div className="error">
              {formik.touched["firstName"] && formik.errors["firstName"]}
            </div>
          </div>

          <div>
            <p>Last Name</p>
            <CustomInput
              type={"text"}
              name={"lastName"}
              value={formik.values["lastName"]}
              onChange={formik.handleChange("lastName")}
              onBlur={formik.handleBlur("lastName")}
              disabled={!edit}
            />
            <div className="error">
              {formik.touched["lastName"] && formik.errors["lastName"]}
            </div>
          </div>
          <div>
            <p>Email</p>
            <CustomInput
              type={"email"}
              name={"email"}
              value={formik.values["email"]}
              onChange={formik.handleChange("email")}
              onBlur={formik.handleBlur("email")}
              disabled={!edit}
            />
            <div className="error">
              {formik.touched["email"] && formik.errors["email"]}
            </div>
          </div>
          <div>
            <p>Mobile</p>
            <CustomInput
              type={"number"}
              name={"mobile"}
              value={formik.values["mobile"]}
              onChange={formik.handleChange("mobile")}
              onBlur={formik.handleBlur("mobile")}
              disabled={!edit}
            />
            <div className="error">
              {formik.touched["mobile"] && formik.errors["mobile"]}
            </div>
          </div>
          {edit && (
            <div className="mt-3">
              <button className="button border-0">Save</button>
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default ProfileForm;
