import { Stack } from "@mui/material";
import React from "react";
import Comment from "./Comment";

const CommentList = ({ comments }) => {
  return (
    <Stack spacing={2} width='100%'>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment}/>
      ))}
    </Stack>
  );
};

export default CommentList;
