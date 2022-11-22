import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Container,
  Button,
  Avatar,
  Stack,
  IconButton,
  Tooltip,
  Menu,
  MenuItem,
} from "@mui/material";
import Pasargad from "../../assets/pasargad.svg";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import LoginIcon from "@mui/icons-material/Login";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserOnLocal } from "../../redux/user/userActions";

const Header = () => {
  const userState = useSelector((state) => state.userState);
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // console.log(userState);
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
            {userState && Object.keys(userState.user).length > 0 ? (
              <Stack>
                <Button
                  id="basic-button"
                  aria-controls={openMenu ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={openMenu ? "true" : undefined}
                  onClick={handleClick}
                  sx={{
                    color: "primary.contrastText",
                    direction: "ltr",
                    fontFamily: "Roboto",
                  }}
                  startIcon={<KeyboardArrowDownIcon />}
                >
                  {userState.user.username}
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={openMenu}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                >
                  <MenuItem onClick={() => dispatch(deleteUserOnLocal())}>
                    خروج
                  </MenuItem>
                </Menu>
              </Stack>
            ) : (
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
            )}
          </Stack>
          <Stack direction="row" sx={{ display: { xs: "flex", sm: "none" } }}>
            <IconButton component={Link} to="/authors">
              <Tooltip title="نویسندگان">
                <BorderColorIcon sx={{ color: "primary.contrastText" }} />
              </Tooltip>
            </IconButton>
            {userState && Object.keys(userState.user).length > 0 ? (
              <Stack>
                <IconButton
                  id="basic-button"
                  aria-controls={openMenu ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={openMenu ? "true" : undefined}
                  onClick={handleClick}
                  sx={{
                    color: "primary.contrastText",
                    direction: "ltr",
                    fontFamily: "Roboto",
                  }}
                >
                  <AccountCircleIcon />
                </IconButton>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={openMenu}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                >
                  <MenuItem onClick={() => dispatch(deleteUserOnLocal())}>
                    خروج
                  </MenuItem>
                </Menu>
              </Stack>
            ) : (
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
            )}
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
