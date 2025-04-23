import * as Yup from "yup";
import { useFormik } from "formik";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "./redux-toolkit/hooks";
import { useState } from "react";
import { addData, Data } from "./redux-toolkit/dataSlice";

const AddDataSchema = Yup.object().shape({
  firstName: Yup.string().required("Required!!"),
  lastName: Yup.string().required("Required!!"),
  id: Yup.number().required("Required!!"),
  age: Yup.number().required("Required!!"),
});

interface EditDataProps{
    user?: Data;
}
const CreateData = ({user}:EditDataProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  console.log(user,'user...');
  
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      id: 0,
      age: 0,
    },
    validationSchema: AddDataSchema,
    onSubmit: (values) => {
      setLoading(true);
      console.log(values);
      
      setTimeout(() => {
        dispatch(addData(values));
        setLoading(false);
        navigate("/dashboard");
      }, 5000);
    },
  });
  return (
    <Box sx={{ margin: "25px", boxShadow: 5 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          marginBottom: "10px",
        }}
      >
        <Typography variant="h5" sx={{ marginLeft: "40px", marginTop: "20px" }}>
          Add Data
        </Typography>
      </Box>

      <Box
        sx={{
          marginBottom: "3px",
          display: "flex",
          flexDirection: "column",
          marginLeft: "20px",
        }}
      >
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={5} sx={{ padding: "20px" }}>
            <Box>
              <Typography sx={{ marginLeft: "3px" }}>ID:</Typography>
              <TextField
                fullWidth
                label="ID"
                name="id"
                type="number"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.id}
                error={formik.touched.id && Boolean(formik.errors.id)}
                helperText={formik.touched.id && formik.errors.id}
              />
            </Box>
            <Box sx={{ height: "80px" }}>
              <Typography sx={{ marginLeft: "3px" }}>FirstName:</Typography>
              <TextField
                fullWidth
                label="First Name"
                name="firstName"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.firstName}
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                helperText={formik.touched.firstName && formik.errors.firstName}
              />
            </Box>

            <Box>
              <Typography sx={{ marginLeft: "3px" }}>LastName:</Typography>
              <TextField
                fullWidth
                label="Last Name"
                name="lastName"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.lastName}
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                helperText={formik.touched.lastName && formik.errors.lastName}
              />
            </Box>

            <Box>
              <Typography sx={{ marginLeft: "3px" }}>Age:</Typography>
              <TextField
                fullWidth
                label="Age"
                name="age"
                type="number"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.age}
                error={formik.touched.age && Boolean(formik.errors.age)}
                helperText={formik.touched.age && formik.errors.age}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mb: 3,
                mt: 5,
                gap: 2,
              }}
            >
              <Button type="submit" variant="contained" disabled={loading}>
                Submit
              </Button>
              <Button variant="outlined" onClick={() => navigate("/dashboard")}>
                Cancel
              </Button>
            </Box>
          </Grid>
        </form>
      </Box>
    </Box>
  );
};

export default CreateData;
