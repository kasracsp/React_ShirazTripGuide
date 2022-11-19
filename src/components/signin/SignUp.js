import React, { useRef, useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import {
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import ErrorIcon from "@mui/icons-material/Error";

const validationSchema = yup.object({
  username: yup
    .string("نام کاربری خود را وارد کنید")
    .required("وارد کردن نام کاربری ضروری است"),
  email: yup
    .string("ایمیل خود را وارد کنید")
    .email("آدرس ایمیل شما صحیح نمی باشد")
    .required("وارد کردن ایمیل ضروری است"),
  password: yup
    .string("رمزعبور خود را وارد کنید")
    .min(8, "رمزعبور حداقل 8 حرف میباشد")
    .matches(
      /^.*((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "رمز عبور باید حداقل شامل یک حرف بزرگ، یک حرف کوچک و یک کاراکتر خاص باشد"
    )
    .required("وارد کردن رمزعبور ضروری است"),
  confirmPassword: yup
    .string("رمزعبور خود را دوباره وارد کنید")
    .oneOf([yup.ref("password"), null], "عدم تطابق رمز عبور")
    .required("وارد کردن تکرار رمزعبور ضروری است"),
  toggle: yup.bool().oneOf([true], "پذیرش قوانین و مقررات الزامی است"),
});

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const formikRef = useRef();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        toggle: false,
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log({ values });
        setLoading(true)
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
              id="username"
              name="username"
              placeholder="نام کاربری"
              value={props.values.username}
              onChange={props.handleChange}
              error={props.touched.username && Boolean(props.errors.username)}
              helperText={props.touched.username && props.errors.username}
            />
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
                    <IconButton onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              fullWidth
              id="confirmPassword"
              name="confirmPassword"
              placeholder="تکرار رمزعبور"
              type={showConfirmPassword ? "text" : "password"}
              value={props.values.confirmPassword}
              onChange={props.handleChange}
              error={
                props.touched.confirmPassword &&
                Boolean(props.errors.confirmPassword)
              }
              helperText={
                props.touched.confirmPassword && props.errors.confirmPassword
              }
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Stack
              direction="row"
              sx={{
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <FormControlLabel
                sx={{ margin: 0 }}
                label="قوانین و مقررات را میپذیرم"
                control={
                  <Checkbox
                    name="toggle"
                    checked={props.values.toggle}
                    onChange={props.handleChange}
                  />
                }
              />
              {props.touched.toggle && props.errors.toggle && (
                <ErrorIcon color="error" />
              )}
            </Stack>
            <LoadingButton
              color="primary"
              variant="contained"
              fullWidth
              type="submit"
              loading={loading}
            >
              ثبت نام
            </LoadingButton>
          </Stack>
        </form>
      )}
    </Formik>
  );
};

export default SignUp;
