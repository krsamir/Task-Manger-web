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
  email: yup
    .string()
    .email("Invalid Email")
    .required("Email field is required"),
  password: yup.string("Enter Password").required("Password is required field"),
});

function Login(props) {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      axios
        .post("/auth/login", values)
        .then((res) => {
          const data = res.data;
          if (data.status === 0) {
            props.warningToast(data.message);
          } else if (data.status === 1) {
            window.localStorage.setItem("sid", data.token);
            props.history.push("/");
            formik.resetForm();
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
  });
  // const handleLogin = () => {
  //   login();
  //   if (data.token) {
  //     window.localStorage.setItem("sid", data.token);
  //     history.push("/");
  //   }
  //   console.log(data);
  // };
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
const mapStateToprops = (state) => ({
  data: state.user.data,
});
export default connect(mapStateToprops, {
  successToast,
  warningToast,
  ErrorToast,
})(Login);
