import React, { useRef, useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import {
  Button,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const validationSchema = yup.object({
  email: yup
    .string("ایمیل خود را وارد کنید")
    .email("آدرس ایمیل شما صحیح نمی باشد")
    .required("وارد کردن ایمیل ضروری است"),
  password: yup
    .string("رمزعبور خود را وارد کنید")
    .min(8,"رمزعبور حداقل 8 حرف میباشد")
    .required("وارد کردن رمزعبور ضروری است"),
});

const Login = () => {
  const formikRef = useRef();
  const [showPassword,setShowPassword] = useState(false);
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log({ values });
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
              type={showPassword?"text":"password"}
              value={props.values.password}
              onChange={props.handleChange}
              error={props.touched.password && Boolean(props.errors.password)}
              helperText={props.touched.password && props.errors.password}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={()=>setShowPassword(!showPassword)}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button color="primary" variant="contained" fullWidth type="submit">
              ورود
            </Button>
          </Stack>
        </form>
      )}
    </Formik>
  );
};

export default Login;
