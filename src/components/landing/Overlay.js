import { Stack, Typography, Grid, Avatar, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Pasargad from "../../assets/pasargad.svg";

const Overlay = ({ post }) => {
  // console.log(post);
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
      <Grid item xs={0} md={2} xl={3}></Grid>
      <Grid
        item
        xs={12}
        md={5}
        lg={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: { xs: "center", md: "flex-start" },
          height: "100%",
          pr: { xs: "0", md: "2rem" },
        }}
      >
        <Stack
          direction="row"
          spacing={1}
          dir="ltr"
          sx={{
            display: { xs: "flex", md: "none" },
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            width: "100%",
            backgroundColor: "rgba(255,255,255,0.9)",
            color: "#222",
            padding: "1rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar src={Pasargad} variant="square" />
          <Typography variant="h4" sx={{ fontFamily: "placard" }}>
            Shiraz Trip Guide
          </Typography>
        </Stack>
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
        <Button
          component={Link}
          to="/home"
          sx={{
            pointerEvents: "all",
            marginTop: 3,
            backgroundColor: "rgba(255,255,255,0.9)",
            color: "#222",
            paddingX: "1rem",
            borderRadius: 0,
            fontWeight: 800,
            fontSize: "1rem",
            "&:hover": {
              backgroundColor: "#fff",
            },
          }}
        >
          نمایش تمام مقالات ...
        </Button>
      </Grid>
      <Grid
        item
        xs={0}
        md={5}
        lg={4}
        xl={3}
        sx={{
          backgroundColor: "rgba(255,255,255,0.5)",
          pointerEvents: "all",
          height: "100%",
          display: { xs: "none", sm: "flex" },
          flexDirection: "column",
        }}
      >
        <Stack
          direction="row"
          spacing={1}
          dir="ltr"
          sx={{
            backgroundColor: "rgba(255,255,255,0.9)",
            color: "#222",
            padding: "1rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar src={Pasargad} variant="square" />
          <Typography variant="h4" sx={{ fontFamily: "placard" }}>
            Shiraz Trip Guide
          </Typography>
        </Stack>
        <Stack sx={{ flex: "1" }}>
          <Typography
            sx={{
              fontFamily: "shekasteh",
              fontSize: "2rem",
              padding: "2rem",
              color: "text.primary",
            }}
          >
            {post.title}
          </Typography>
          <Typography
            sx={{
              fontSize: "1.2rem",
              color: "#000",
              padding: "2rem",
              fontWeight: 500,
            }}
          >
            {post.brief}
          </Typography>
        </Stack>
        <Button
          // onClick={() => console.log(post.slug)}
          sx={{
            borderRadius: 0,
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            color: "text.primary",
            backdropFilter: "blur(2px)",
            width: "100%",
            fontSize: "1.2rem",
            padding: "1rem",
            "&:hover": {
              backgroundColor: "rgba(255,255,255,0.9)",
              color: "#000",
            },
          }}
        >
          بیشتر بخوانید...
        </Button>
      </Grid>
    </Grid>
  );
};

export default Overlay;
