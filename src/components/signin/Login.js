import React, { useRef, useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { IconButton, InputAdornment, Stack, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLazyQuery } from "@apollo/client";
import { GET_USER } from "../../graphql/Queries";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const validationSchema = yup.object({
  email: yup
    .string("ایمیل خود را وارد کنید")
    .email("آدرس ایمیل شما صحیح نمی باشد")
    .required("وارد کردن ایمیل ضروری است"),
  password: yup
    .string("رمزعبور خود را وارد کنید")
    .min(8, "رمزعبور حداقل 8 حرف میباشد")
    .required("وارد کردن رمزعبور ضروری است"),
});

const Login = () => {
  const formikRef = useRef();
  const navigate = useNavigate();
  const [passwordHolder, setPasswordHolder] = useState("");
  const [getUser, { loading, data, error }] = useLazyQuery(GET_USER);
  const [showPassword, setShowPassword] = useState(false);
  
  if (data && data.customer) {
    if (data.customer.password === passwordHolder) {
      navigate(-1, { replace: true });
    }
    toast.error("رمزعبور اشتباه است. ", {
      position: "top-center",
      theme: "dark",
    });
  }
  if (error || (data && !data.customer)) {
    toast.error("کاربر موردنظر یافت نشد. ", {
      position: "top-center",
      theme: "dark",
    });
  }

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values.email);
          setPasswordHolder(values.password);
          getUser({
            variables: {
              email: values.email,
            },
          });
        }}
        innerRef={formikRef}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <Stack
              spacing={2}
              sx={{
                width: "100%",
                marginTop: "2rem",
                justifyContent: "center",
                alignItems: "center",
                "& .MuiFormHelperText-root": {
                  textAlign: "right",
                },
              }}
            >
              <TextField
                fullWidth
                id="email"
                name="email"
                placeholder="ایمیل"
                value={props.values.email}
                onChange={props.handleChange}
                error={props.touched.email && Boolean(props.errors.email)}
                helperText={props.touched.email && props.errors.email}
              />
              <TextField
                fullWidth
                id="password"
                name="password"
                placeholder="رمز عبور"
                type={showPassword ? "text" : "password"}
                value={props.values.password}
                onChange={props.handleChange}
                error={props.touched.password && Boolean(props.errors.password)}
                helperText={props.touched.password && props.errors.password}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <LoadingButton
                color="primary"
                variant="contained"
                fullWidth
                type="submit"
                loading={loading}
              >
                ورود
              </LoadingButton>
            </Stack>
          </form>
        )}
      </Formik>
      <ToastContainer rtl />
    </>
  );
};

export default Login;
