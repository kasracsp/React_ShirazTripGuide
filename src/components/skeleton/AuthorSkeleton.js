import React from "react";
import {
  Box,
  Stack,
  IconButton,
  Tooltip,
  Typography,
  Skeleton,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

const AuthorSkeleton = () => {
  const navigate = useNavigate();
  return (
    <Stack sx={{ mt: 4 }} spacing={4}>
      <Stack
        width="100%"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h3">
          <Skeleton variant="text" width="7rem" />
        </Typography>
        <Tooltip title="بازگشت">
          <IconButton onClick={() => navigate(-1)}>
            <ArrowBackIcon color="primary" />
          </IconButton>
        </Tooltip>
      </Stack>
      <Stack
        spacing={4}
        width="100%"
        sx={{ flexDirection: { xs: "column", md: "row" } }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: "400px",
            m: { xs: "0 auto", md: 0 },
            aspectRatio: "1",
            borderRadius: 3,
            overflow: "hidden",
          }}
        >
          <Skeleton variant="rectangular" width="100%" height="100%" />
        </Box>
        <Stack sx={{ px: { xs: 2, md: 4 } }}>
          <Stack spacing={2}>
            <Typography variant="h6" color="text.primary">
              <Skeleton variant="text" width="8rem" />
            </Typography>
            <Typography>
              <Skeleton variant="text" width="6rem" />
            </Typography>
            <Typography>
              <Skeleton variant="text" width="4rem" />
            </Typography>
            <Stack>
              <Typography variant="body1">
                <Skeleton
                  variant="text"
                  width="80%"
                  sx={{ minWidth: { xs: "220px", lg: "360px" } }}
                />
              </Typography>
              <Typography variant="body1">
                <Skeleton variant="text" width="40%" />
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default AuthorSkeleton;
