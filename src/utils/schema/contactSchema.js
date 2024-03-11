import * as yup from "yup";

const contactSchema = yup.object({
  name: yup.string().required("Name is Required"),
  email: yup
    .string()
    .nullable()
    .email("Email Should be valid")
    .required("Email is Required"),
  mobile: yup
    .string()
    .default("")
    .nullable()
    .required("Mobile Number is Required"),
  comment: yup.string().default("").nullable().required("Comment is Required"),
});

export default contactSchema;
