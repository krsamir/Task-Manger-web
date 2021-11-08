import React from "react";
import axios from "axios";
import { Box, Grid, TextField, Button } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  successToast,
  ErrorToast,
  warningToast,
} from "../../Redux/Actions/ToastAction";
import { connect } from "react-redux";
import { ToastContainer } from "react-toastify";

const validationSchema = yup.object({
  firstName: yup
    .string("Enter First Name")
    .required("First Name is required field")
    .matches(/^[a-zA-Z ]+$/, "Only alphabets allowed"),
  lastname: yup
    .string("Enter Last Name")
    .required("Last Name is required field")
    .matches(/^[a-zA-Z ]+$/, "Only alphabets allowed"),
  email: yup
    .string()
    .email("Invalid Email")
    .required("Email field is required"),
  password: yup.string("Enter Password").required("Password is required field"),
});

function CreateStudent(props) {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastname: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      axios
        .post("/auth/register", values)
        .then((res) => {
          const { status } = res.data;
          console.log(status);
          if (status === 0) {
            // created
            props.successToast("User created successfully!!");
            formik.resetForm();
          } else if (status === 2) {
            props.ErrorToast("User Cannot be created due to some issue!!");
            // no Created
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
  });
  return (
    <div style={{ padding: "30px" }}>
      <Box sx={{ flexGrow: 1 }}>
        <form onSubmit={formik.handleSubmit}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            // columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <TextField
                fullWidth
                id="firstName"
                name="firstName"
                label="First Name"
                type="text"
                // sx={{ width: "100%" }}
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                helperText={formik.touched.firstName && formik.errors.firstName}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <TextField
                fullWidth
                id="lastname"
                name="lastname"
                label="Last Name"
                type="text"
                // sx={{ width: "100%" }}
                value={formik.values.lastname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.lastname && Boolean(formik.errors.lastname)
                }
                helperText={formik.touched.lastname && formik.errors.lastname}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <TextField
                fullWidth
                id="email"
                name="email"
                label="Email"
                type="email"
                // sx={{ width: "100%" }}
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <TextField
                fullWidth
                id="password"
                name="password"
                label="password"
                type="text"
                // sx={{ width: "100%" }}
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <Button
                color="primary"
                variant="contained"
                fullWidth
                type="submit"
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
        <ToastContainer />
      </Box>
    </div>
  );
}
export default connect(null, { successToast, warningToast, ErrorToast })(
  CreateStudent
);
