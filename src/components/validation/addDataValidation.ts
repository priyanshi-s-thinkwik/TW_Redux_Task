import * as Yup from "yup";


export const AddDataSchema = Yup.object().shape({
  firstName: Yup.string().required("Required!!"),
  lastName: Yup.string().required("Required!!"),
  id: Yup.number().required("Required!!"),
  age: Yup.number().required("Required!!"),
});