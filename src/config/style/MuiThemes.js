const { createTheme } = require("@mui/material");

export const theme = createTheme({
  typography: {
    fontFamily: ["sans-serif", "Poppins"].join(","),
    allVariants: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
    },
    h1: {
      fontWeight: 600,
      fontSize: "23px",
    },

    h2: {
      fontSize: "22px",
      fontWeight: 600,
    },

    h3: {
      fontSize: "18px",
      fontWeight: 600,
    },

    h4: {
      fontSize: "17px",
      fontWeight: 600,
    },

    h5: {
      fontSize: "16px",
      fontWeight: 600,
    },
    h6: {
      fontSize: "14px",
      fontWeight: 600,
      lineHeight: "26px",
    },
    subtitle1: {
      fontSize: 15,
      fontWeight: 500,
      lineHeight: "normal",
    },
    subtitle2: {
      fontSize: 12,
      fontWeight: 600,
      lineHeight: "normal",
    },
    body1: {
      fontSize: "13px",
      lineHeight: "23px",
    },
    body2: {
      fontSize: "12px",
      lineHeight: "normal",
    },
    caption: {
      fontSize: "16px",
    },
  },
  palette: {
    // primary: {
    //   main: primaryColor,
    // },
    // secondary: {
    //   main: secondaryColor,
    // },
  },
});
