import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_COMMENTS } from "../../graphql/Queries";
import { useDispatch } from "react-redux";
import { saveComments } from "../../redux/comment/CommentsAction";
import { Container } from "@mui/material";
import CommentList from "./CommentList";
import { useEffect } from "react";

const CommentsSection = ({ slug }) => {
  const dispatch = useDispatch();
  const [rootComments, setRootComments] = useState(null);
  // console.log(rootComments);
  const { loading, data, error } = useQuery(GET_COMMENTS, {
    variables: { slug },
  });
  console.log(data)
  useEffect(() => {
    if (data && data.comments.length > 0) {
      dispatch(saveComments(data.comments));
      setRootComments(
        data.comments.filter(
          (item) => item.parentId === null || item.parentId === ""
        )
      );
    }
  }, [data]);

  if (loading) return <h1>loading...</h1>;
  if (error)
    return (
      <h1>
        هنگام دریافت دیدگاه ها خطایی رخ داده، لطفاً صفحه را دوباره بارگزاری
        نمایید.
      </h1>
    );

  return (
    <Container maxWidth="lg">
      {rootComments != null && rootComments.length > 0 && (
        <CommentList comments={rootComments} />
      )}
    </Container>
  );
};

export default CommentsSection;
