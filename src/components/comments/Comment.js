import React, { useEffect } from "react";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  IconButton,
  Paper,
  Box,
  Stack,
  Typography,
  Tooltip,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ReplyIcon from "@mui/icons-material/Reply";
import CommentForm from "./CommentForm";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getReplies, doesLikeComment } from "../../helper/functions";
import CommentList from "./CommentList";
import { useMutation } from "@apollo/client";
import { CREATE_LIKE, PUBLISH_LIKE } from "../../graphql/Mutations";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const dataFormatter = new Intl.DateTimeFormat("fa-IR", {
  dateStyle: "medium",
});

const Comment = ({ comment }) => {
  const [edit, setEdit] = useState(false);
  const [createLike, { loading, data, error }] = useMutation(CREATE_LIKE);
  const [publishLike] = useMutation(PUBLISH_LIKE);
  const commentsState = useSelector((state) => state.commentsState);
  const userState = useSelector((state) => state.userState);
  const childComments = getReplies(commentsState.comments, comment.id);
  useEffect(() => {
    if (data) {
      publishLike({
        variables: {
          id: data.createLike.id,
        },
      });
    }
  }, [loading]);
  if (error) {
    toast.error("خطا در برقراری ارتباط", {
      position: "top-center",
      theme: "dark",
    });
  }
  return (
    <>
      <Paper>
        <Card>
          <CardHeader
            avatar={
              <Avatar sx={{ backgroundColor: "primary.main" }}>
                {comment.name[0]}
              </Avatar>
            }
            title={
              <Typography variant="body1" sx={{ mr: 1 }}>
                {comment.name}
              </Typography>
            }
          />
          <CardContent>
            <Typography>{comment.text}</Typography>
          </CardContent>
          <Divider variant="middle" />
          <CardActions sx={{ paddingTop: 0.5 }}>
            <Stack flexGrow={1} direction="row">
              <Stack
                direction="row"
                spacing={1}
                sx={{ justifyContent: "center", alignItems: "center" }}
              >
                {userState && Object.keys(userState.user).length > 0 ? (
                  doesLikeComment(userState.user.likes, comment.id) ? (
                    <IconButton>
                      <FavoriteIcon color="error" />
                    </IconButton>
                  ) : (
                    <IconButton
                      onClick={() =>
                        createLike({
                          variables: {
                            id: comment.id,
                            email: userState.user.email,
                          },
                        })
                      }
                      disabled={loading}
                      color={data && "error"}
                    >
                      <FavoriteIcon />
                    </IconButton>
                  )
                ) : (
                  <Tooltip title="برای لایک کردن ابتدا وارد حساب کاربری خود شوید">
                    <IconButton>
                      <FavoriteIcon />
                    </IconButton>
                  </Tooltip>
                )}
                <Typography variant="caption" sx={{ fontFamily: "Roboto" }}>
                  {data ? comment.likes.length + 1 : comment.likes.length}
                </Typography>
              </Stack>
              <IconButton onClick={() => setEdit(!edit)}>
                <ReplyIcon color="success" />
              </IconButton>
            </Stack>
            <Typography variant="caption" ml={1}>
              {dataFormatter.format(Date.parse(comment.createdAt))}
            </Typography>
          </CardActions>
          <Stack
            sx={{
              m: 2,
              p: 2,
              boxShadow:
                "0px 0px 1px -1px rgba(0,0,0,0.6), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.32)",
              display: edit ? "flex" : "none",
            }}
          >
            <CommentForm parentId={comment.id} />
          </Stack>
        </Card>
      </Paper>
      {childComments?.length > 0 && (
        <Stack direction="row" width="100%">
          <Box
            sx={{
              width: "20px",
              borderRight: "2px solid",
              borderColor: "primary.light",
            }}
          ></Box>
          <CommentList comments={childComments} />
        </Stack>
      )}
      <ToastContainer rtl />
    </>
  );
};

export default Comment;