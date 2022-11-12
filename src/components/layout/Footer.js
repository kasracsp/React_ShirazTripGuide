import { Avatar, Stack, Typography } from "@mui/material";
import React from "react";
import Pasargad from "../../assets/pasargad.svg";

const Footer = () => {
  return (
    <Stack
      direction="row"
      spacing={1}
      dir="ltr"
      sx={{
        display: "flex",
        mt: 4,
        py: 2,
        width: "100%",
        color: "#222",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="subtitle1" sx={{ fontFamily: "placard",color:'primary.main' }}>
        &copy; 2022. all data reserved by Shiraz Trip Guide
      </Typography>
    </Stack>
  );
};

export default Footer;
