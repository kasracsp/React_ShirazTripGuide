import React from "react";
import { Divider, Paper, Skeleton, Stack, Typography } from "@mui/material";

const AuthorsSkeleton = () => {
  return (
    <Paper sx={{ maxWidth: "360px", m: "0 auto" }}>
      <Stack sx={{ width: "100%" }}>
        <Skeleton variant="rectangular" height="300px" width="100%" />
        <Stack
          sx={{
            padding: 2,
            justifyContent: "center",
            alignItems: "flex-start",
            gap: 1,
          }}
        >
          <Typography variant="h5">
            <Skeleton variant="text" width="7rem" />
          </Typography>
          <Typography variant="body2">
            <Skeleton variant="text" width="10rem" />
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

export default AuthorsSkeleton;
