import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  IconButton,
  Skeleton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const ArticleSkeleton = () => {
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
      <Box
        sx={{
          width: "100%",
          height: { xs: "200px", sm: "300px", md: "400px" },
          borderRadius: 3,
          overflow: "hidden",
        }}
      >
        <Skeleton variant="rectangular" width="100%" height="100%" />
      </Box>
      <Stack
        paddingRight={4}
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Skeleton variant="circular" width="40px" height="40px" />
        <Stack mr={2}>
          <Typography variant="body1">
            <Skeleton variant="text" width="5rem" />
          </Typography>
          <Typography variant="caption">
            <Skeleton variant="text" width="7rem" />
          </Typography>
        </Stack>
      </Stack>
      <Stack px="2rem">
        <Typography variant="body1">
          <Skeleton variant="text" width="100%" />
        </Typography>
        <Typography variant="body1">
          <Skeleton variant="text" width="100%" />
        </Typography>
        <Typography variant="body1">
          <Skeleton variant="text" width="40%" />
        </Typography>
      </Stack>
      <Stack px="2rem">
        <Typography variant="body1">
          <Skeleton variant="text" width="100%" />
        </Typography>
        <Typography variant="body1">
          <Skeleton variant="text" width="40%" />
        </Typography>
      </Stack>
    </Stack>
  );
};

export default ArticleSkeleton;
