import React from "react";
import {
  AppBar,
  Toolbar,
  Container,
  Button,
  Avatar,
  Stack,
  IconButton,
  Tooltip,
} from "@mui/material";
import Pasargad from "../../assets/pasargad.svg";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import BorderColorIcon from "@mui/icons-material/BorderColor";
import { Link, useNavigate } from "react-router-dom";

const SignInHeader = () => {
  const navigate=useNavigate()

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Stack sx={{ flexGrow: 1 }}>
            <Button
              component={Link}
              to="/home"
              variant="text"
              startIcon={
                <Avatar
                  src={Pasargad}
                  alt="Pasargad"
                  sx={{
                    backgroundColor: "primary.contrastText",
                    padding: 0.5,
                    width: "20px",
                    height: "20px",
                    transform: "rotateY(180deg)",
                    ml: 1,
                  }}
                />
              }
              sx={{
                color: "primary.contrastText",
                width: "fit-content",
                "& .MuiButton-startIcon": {
                  mx: 0,
                },
              }}
            >
              راهنمای گردشگری شیراز
            </Button>
          </Stack>
            <IconButton onClick={()=>navigate(-1)}>
              <Tooltip title="بازگشت">
                <ArrowBackIosNewIcon sx={{ color: "primary.contrastText" }} />
              </Tooltip>
            </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default SignInHeader;
