import React from "react";
import { Divider, Paper, Skeleton, Stack, Typography } from "@mui/material";

const HomeSkeleton = () => {
  return (
    <Paper sx={{ maxWidth: "360px", m: "0 auto" }}>
      <Stack sx={{ width: "100%" }}>
        <Stack
          direction="row"
          sx={{
            padding: 2,
            pr: 4,
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Skeleton variant="circular" width="40px" height="40px" />
          <Typography variant="body1">
            <Skeleton variant="text" width="5rem" />
          </Typography>
        </Stack>
        <Skeleton variant="rectangular" height="194px" width="100%" />
        <Stack direction="row" sx={{ padding: 2 }}>
          <Typography variant="h6">
            <Skeleton variant="text" width="7rem" />
          </Typography>
        </Stack>

        <Divider variant="middle" sx={{ mx: 1 }} />
        <Stack direction="row" sx={{ padding: 1 }}>
          <Skeleton
            variant="rectangular"
            width="100%"
            height="2rem"
            sx={{ borderRadius: 1 }}
          />
        </Stack>
      </Stack>
    </Paper>
  );
};

export default HomeSkeleton;
