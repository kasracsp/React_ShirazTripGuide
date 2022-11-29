import { Typography } from "@mui/material";
import React, { useState } from "react";

const CommentList = ({ comments }) => {
  return (
    <div>
      {comments.map((comment) => (
        <Typography key={comment.id}>{comment.name}</Typography>
      ))}
    </div>
  );
};

export default CommentList;
