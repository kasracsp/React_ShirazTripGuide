import { Stack, Typography, Grid, Avatar } from "@mui/material";
import React from "react";
import Pasargad from "../../assets/pasargad.svg";

const Overlay = ({posts}) => {
  return (
    <Grid
      container
      sx={{
        position: "absolute",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        width: "100%",
        height: "100vh",
        zIndex: "10",
        pointerEvents: "none",
        color: "rgba(255,255,255,0.98)",
      }}
    >
      <Grid item xs={3} md={3}></Grid>
      <Grid
        item
        xs={6}
        md={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          height: "100%",
          pr: "2rem",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontFamily: "shekasteh",
            fontWeight: "normal",
            padding: "2rem",
            pr: "1rem",
            fontSize: "8rem",
          }}
        >
          شیراز
        </Typography>

        <Typography
          variant="h6"
          sx={{
            fontFamily: "shekasteh",
            fontWeight: "normal",
            padding: "1rem",
            fontSize: "2rem",
            borderTop: "1px solid",
            width: "fit-content",
          }}
        >
          تلاقی فرهنگ هنر و تمدن
        </Typography>
      </Grid>
      <Grid
        item
        xs={3}
        md={3}
        sx={{ backgroundColor: "rgba(255,255,255,0.5)" }}
      >
        <Stack
          direction="row"
          spacing={1}
          dir="ltr"
          sx={{
            backgroundColor: "rgba(255,255,255,0.9)",
            color: "#222",
            padding: "1rem",
            justifyContent:'center',
            alignItems:'center'
          }}
        >
          <Avatar src={Pasargad} variant="square" />
          <Typography variant="h4" sx={{ fontFamily: "placard" }}>
            Shiraz Trip Guide
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Overlay;
