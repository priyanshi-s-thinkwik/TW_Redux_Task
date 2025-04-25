import { useFormik } from "formik";
import { Box, Button, Card, TextField, Typography } from "@mui/material";
import * as Yup from "yup";
import { useAppDispatch } from "../redux-toolkit/hooks";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { registerSuccess } from "../redux-toolkit/registerSlice";
import LinearProgress from "@mui/material/LinearProgress";


const RegisterSchema = Yup.object().shape({
  firstName: Yup.string().required("Required!!"),
  lastName: Yup.string().required("Required!!"),
  email: Yup.string().email("Invalid email").required("Required!!"),
  password: Yup.string().min(8).max(8).required("Required!!"),
});

export const Register = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: (values) => {
      setLoading(true);
      setTimeout(() => {
        dispatch(registerSuccess(values));
        setLoading(false);
        navigate("/dashboard");
      }, 5000);
    },
  });
  return (
    <>
    {
      loading? <LinearProgress/>:''
    }
      <Box
        sx={{
          height: "80vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "100px",
        }}
      >
        <Card sx={{ padding: 4, width: 400, boxShadow: 6 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <Typography variant="h5">Register</Typography>
          </Box>

          <Box
            sx={{
              marginBottom: "3px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <form onSubmit={formik.handleSubmit}>
              <Box sx={{ height: "80px" }}>
                <TextField
                  label="FirstName"
                  variant="outlined"
                  id="firstName"
                  name="firstName"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                  sx={{ width: "270px" }}
                  error={
                    formik.touched.firstName && Boolean(formik.errors.firstName)
                  }
                  helperText={
                    formik.touched.firstName && formik.errors.firstName
                  }
                />
              </Box>

              <Box sx={{ height: "80px" }}>
                <TextField
                  label="LastName"
                  variant="outlined"
                  id="lastName"
                  name="lastName"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.lastName}
                  sx={{ width: "270px" }}
                  error={
                    formik.touched.lastName && Boolean(formik.errors.lastName)
                  }
                  helperText={formik.touched.lastName && formik.errors.lastName}
                />
              </Box>
              <Box sx={{ height: "80px" }}>
                <TextField
                  label="Email"
                  variant="outlined"
                  id="email"
                  name="email"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  sx={{ width: "270px" }}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Box>

              <Box sx={{ height: "80px" }}>
                <TextField
                  label="Passowrd"
                  variant="outlined"
                  id="password"
                  name="password"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  sx={{ width: "270px" }}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                />
              </Box>

              <Button
                type="submit"
                variant="contained"
                sx={{ marginLeft: "90px" }}
                disabled={loading}
              >
                Register
              </Button>
            </form>
          </Box>
        </Card>
      </Box>
    </>
  );
};
