import * as Yup from "yup";

export const RegisterSchema = Yup.object().shape({
    firstName: Yup.string().required("Required!!"),
    lastName: Yup.string().required("Required!!"),
    email: Yup.string().email("Invalid email").required("Required!!"),
    password: Yup.string().min(8).max(8).required("Required!!"),
  });