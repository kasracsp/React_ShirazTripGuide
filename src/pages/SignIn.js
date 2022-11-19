import React, { useState } from "react";
import { AppBar, Box, Stack, Tab, Tabs, Typography } from "@mui/material";
import PropTypes from "prop-types";
import Layout from "../components/layout/Layout";
import Login from "../components/signin/Login";
import SignUp from "../components/signin/SignUp";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const SignIn = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Layout>
      <Stack
        sx={{
          width: "100%",
          minHeight: "70vh",
          justifyContent: "flex-start",
          alignItems: "center",
          mt: "3rem",
        }}
      >
        <Box
          sx={{
            width: "80%",
            margin: "0 auto",
            maxWidth: "400px",
          }}
        >
          <AppBar
            position="static"
            sx={{ backgroundColor: "transparent", boxShadow: "none" }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
              aria-label="sign in"
            >
              <Tab label="ورود" {...a11yProps(0)} />
              <Tab label="ثبت نام" {...a11yProps(1)} />
            </Tabs>
          </AppBar>
          {value == 0 ? <Login /> : <SignUp />}
        </Box>
      </Stack>
    </Layout>
  );
};

export default SignIn;
