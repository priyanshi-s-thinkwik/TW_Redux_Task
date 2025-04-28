import { useFormik } from "formik";
import {
  Box,
  Button,
  Grid,
  LinearProgress,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch } from "../redux-toolkit/hooks";
import { useState } from "react";
import { addData, editData } from "../redux-toolkit/dataSlice";
import { Data } from "../types/data.types";
import { LOCAL_STORAGE_KEYS } from "../helpers/enums";
import { AddDataSchema } from "../validation/addDataValidation";

const CreateData = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const data: Data[] = JSON.parse(
    localStorage.getItem(LOCAL_STORAGE_KEYS.USERS) as string
  );
  const user: Data | undefined = data?.find((data) => data.id === Number(id));

  const formik = useFormik({
    initialValues: {
      firstName: user?.firstName || "",
      lastName: user?.lastName || "",
      id: user?.id || 0,
      age: user?.age || 0,
    },
    validationSchema: AddDataSchema,
    onSubmit: (values) => {
      setLoading(true);
      console.log(values);

      setTimeout(() => {
        if (user) {
          dispatch(editData(values));
        } else {
          dispatch(addData(values));
        }
        setLoading(false);
        navigate("/dashboard");
      }, 5000);
    },
  });
  return (
    <>
      {loading ? <LinearProgress /> : ""}
      <Box sx={{ margin: "25px", boxShadow: 5 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "10px",
          }}
        >
          <Typography
            variant="h5"
            sx={{ marginLeft: "40px", marginTop: "20px" }}
          >
            {user ? "Edit Data" : "Add Data"}
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
                  helperText={
                    formik.touched.firstName && formik.errors.firstName
                  }
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
                <Button
                  variant="outlined"
                  onClick={() => navigate("/dashboard")}
                >
                  Cancel
                </Button>
              </Box>
            </Grid>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default CreateData;
