import { useFormik } from "formik";
import { Box, Button, Card, TextField, Typography } from "@mui/material";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { loginStart, loginSuccess } from "./redux-toolkit/authSlice";
import { useAppDispatch, useAppSelector } from "./redux-toolkit/hooks";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required!!"),
  password: Yup.string().min(8).max(8).required("Required!!"),
});

export const Login = () => {
  const [loading, setLoading] = useState(false);
  const dispatch =useAppDispatch();
  const selector = useAppSelector((state)=>state.auth);
  const navigate = useNavigate();

  console.log(selector);
  

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      dispatch(loginStart());
      setLoading(true);
      setTimeout(() => {
        dispatch(loginSuccess(values));
        setLoading(false);
        navigate("/dashboard");
      }, 5000);
    },
  });
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "200px",
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
            <Typography variant="h5">Login</Typography>
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
               
              >
                {loading ? "Logging in..." : "Submit"}
              </Button>
              <p style={{ marginLeft: "30px" }}>
                Don't have an account? <Link to="/register">Register</Link>
              </p>
            </form>
          </Box>
        </Card>
      </Box>
    </>
  );
};
