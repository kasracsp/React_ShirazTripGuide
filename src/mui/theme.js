import { createTheme } from "@mui/material";

const theme = createTheme({
  breakpoints:{
    values:{
      xs:0,
      sm:576,
      md:768,
      lg:992,
      xl:1200
    }
  },
  palette:{
    primary:{
      main:"#045d83"
    }
  },
  typography: {
    fontFamily: `"YekanBakh","Roboto"`,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    fontWeightHeavy: 800,
    fontWeightFat: 900,
    h1:{
      fontWeight:700
    },
    h2:{
      fontWeight:700
    },
    h3:{
      fontWeight:700
    },
    h4:{
      fontWeight:700
    },
    h5:{
      fontWeight:700
    },
    h6:{
      fontWeight:700
    },
  },
  direction:'rtl'
});

export default theme;
