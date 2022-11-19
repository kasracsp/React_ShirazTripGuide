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
import BorderColorIcon from "@mui/icons-material/BorderColor";
import LoginIcon from "@mui/icons-material/Login";
import { Link } from "react-router-dom";

const Header = () => {
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
          <Stack
            direction="row"
            spacing={1}
            sx={{ display: { xs: "none", sm: "flex" } }}
          >
            <Button
              component={Link}
              to="/authors"
              startIcon={<BorderColorIcon sx={{ ml: 1 }} />}
              sx={{ color: "primary.contrastText" }}
            >
              نویسندگان
            </Button>
            <Button
              component={Link}
              to="/signin"
              startIcon={
                <LoginIcon sx={{ transform: "rotateY(180deg)", ml: 1 }} />
              }
              sx={{ color: "primary.contrastText" }}
            >
            ورود | ثبت نام
            </Button>
          </Stack>
          <Stack direction="row" sx={{ display: { xs: "flex", sm: "none" } }}>
            <IconButton component={Link} to="/authors">
              <Tooltip title="نویسندگان">
                <BorderColorIcon sx={{ color: "primary.contrastText" }} />
              </Tooltip>
            </IconButton>
            <IconButton component={Link} to="/signin">
              <Tooltip title="ورود | ثبت نام">
                <LoginIcon
                  sx={{
                    color: "primary.contrastText",
                    transform: "rotateY(180deg)",
                  }}
                />
              </Tooltip>
            </IconButton>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
