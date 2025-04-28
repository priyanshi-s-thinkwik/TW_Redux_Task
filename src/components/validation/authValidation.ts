import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required!!"),
  password: Yup.string().min(8).max(8).required("Required!!"),
});
