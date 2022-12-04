import React, { useRef, useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { Stack, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useMutation } from "@apollo/client";
import {
  CREATE_COMMENT,
  PUBLISH_COMMENT,
  UPDATE_COMMENT,
} from "../../graphql/Mutations";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { GET_COMMENTS } from "../../graphql/Queries";

const validationSchema = yup.object({
  name: yup.string("نام خود را وارد کنید").required("وارد کردن نام ضروری است"),
  email: yup
    .string("ایمیل خود را وارد کنید")
    .email("آدرس ایمیل شما صحیح نمی باشد")
    .required("وارد کردن ایمیل ضروری است"),
  text: yup
    .string("دیدگاه خود را وارد کنید")
    .required("وارد کردن دیدگاه ضروری است"),
});

const CommentForm = ({ parentId = "", title, autoClose, initialText }) => {
  const { slug } = useParams();
  const formikRef = useRef();
  const userState = useSelector((state) => state.userState);
  useEffect(() => {
    if (userState && Object.keys(userState.user).length > 0) {
      formikRef.current.setFieldValue("name", userState.user.username);
      formikRef.current.setFieldValue("email", userState.user.email);
    }
    if (initialText) {
      formikRef.current.setFieldValue("text", initialText);
    }
  }, []);

  const [createComment, { loading, data, error }] = useMutation(CREATE_COMMENT);
  const [publishComment] = useMutation(PUBLISH_COMMENT);
  const [
    updateComment,
    { loading: updateLoading, data: updateData, error: updateError },
  ] = useMutation(UPDATE_COMMENT);
  useEffect(() => {
    if (data) {
      toast.success("دیدگاه شما با موفقیت ثبت شد. ", {
        position: "top-center",
        theme: "dark",
      });
      publishComment({
        variables: {
          id: data.createComment.id,
        },
        refetchQueries: [{ query: GET_COMMENTS, variables: { slug } }],
      });
      if (autoClose) {
        autoClose();
      }
    }
  }, [loading,data]);
  useEffect(() => {
    if (updateData) {
      toast.success("دیدگاه شما با موفقیت ویرایش شد. ", {
        position: "top-center",
        theme: "dark",
      });
      publishComment({
        variables: {
          id: updateData.updateComment.id,
        },
        refetchQueries: [{ query: GET_COMMENTS, variables: { slug } }],
      });
      if (autoClose) {
        autoClose();
      }
    }
  }, [updateLoading,updateData]);
  if (error) {
    toast.error("خطا در برقراری ارتباط", {
      position: "top-center",
      theme: "dark",
    });
  }
  if (updateError) {
    toast.error("خطا در برقراری ارتباط", {
      position: "top-center",
      theme: "dark",
    });
  }

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          text: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          if (initialText) {
            updateComment({
              variables: {
                id: parentId,
                text: values.text,
              },
            });
          } else {
            createComment({
              variables: {
                name: values.name,
                text: values.text,
                email: values.email,
                parentId: parentId,
                slug: slug,
              },
            });
          }
          resetForm({ values: { ...values, text: "" } });
        }}
        innerRef={formikRef}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <Stack
              spacing={2}
              sx={{
                width: "100%",
                justifyContent: "center",
                alignItems: "flex-start",
                "& .MuiFormHelperText-root": {
                  textAlign: "right",
                },
              }}
            >
              <Stack
                sx={{
                  width: "100%",
                  gap: 2,
                  flexDirection: { xs: "column", md: "row" },
                }}
              >
                <TextField
                  fullWidth
                  id="name"
                  name="name"
                  placeholder="نام کاربری"
                  value={props.values.name}
                  onChange={props.handleChange}
                  error={props.touched.name && Boolean(props.errors.name)}
                  helperText={props.touched.name && props.errors.name}
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
              </Stack>
              <TextField
                fullWidth
                id="text"
                name="text"
                multiline
                rows={4}
                placeholder="دیدگاه"
                value={props.values.text}
                onChange={props.handleChange}
                error={props.touched.text && Boolean(props.errors.text)}
                helperText={props.touched.text && props.errors.text}
              />

              <LoadingButton
                color="primary"
                variant="contained"
                type="submit"
                loading={loading || updateLoading}
                sx={{ width: { xs: "100%", md: "fit-content" } }}
              >
                {title}
              </LoadingButton>
            </Stack>
          </form>
        )}
      </Formik>
      <ToastContainer rtl />
    </>
  );
};

export default CommentForm;
