import { Avatar, Stack, Typography } from "@mui/material";
import React from "react";
import Pasargad from "../../assets/pasargad.svg";

const LoadingPage = () => {
  return (
    <Stack
      width="100%"
      height="100vh"
      sx={{ justifyContent: "center", alignItems: "center" }}
      spacing={5}
    >
      <Avatar
        variant="square"
        src={Pasargad}
        alt="ShirazTripGuide.com"
        sx={{
          width: "100px",
          height: "100px",
          animation: "myEffect 1000ms linear infinite alternate",
          "@keyframes myEffect": {
            "0%": {
              opacity: 0,
            },
            "100%": {
              opacity: 1,
            },
          },
        }}
      />
      <Typography
        variant="body"
        sx={{ fontFamily: "shekasteh", fontSize: { xs: "1.2rem", sm: "2rem" } }}
      >
        به وب سایت راهنمای گردشگری شیراز خوش آمدید
      </Typography>
    </Stack>
  );
};

export default LoadingPage;
