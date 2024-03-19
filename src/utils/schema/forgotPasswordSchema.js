import * as yup from "yup";

const ForgotPasswordSchema = yup.object({
  email: yup
    .string()
    .email("Email Should be Valid")
    .required("Email is Required"),
});

export default ForgotPasswordSchema;
