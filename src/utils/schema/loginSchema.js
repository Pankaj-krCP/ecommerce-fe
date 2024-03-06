import * as yup from "yup";

const loginSchema = yup.object({
  email: yup.string().email("Email Should be valid").required("Email required"),
  password: yup.string().required("Password is required"),
});

export default loginSchema;
