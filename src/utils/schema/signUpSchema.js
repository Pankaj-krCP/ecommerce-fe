import * as yup from "yup";

const signUpSchema = yup.object({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Email Should be valid").required("Email required"),
  mobile: yup.string().required("Mobile number is required"),
  password: yup.string().required("Password is required"),
});

export default signUpSchema;
