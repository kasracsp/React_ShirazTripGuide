import { Avatar, Card, CardHeader } from "@mui/material";
import React from "react";

const Cards = (props) => {
  console.log(props);
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            R
          </Avatar>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
    </Card>
  );
};

export default Cards;
