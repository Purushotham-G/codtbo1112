import { Box, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

function Button({ handleClose }) {
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          //   maxWidth: "700px !important",
          minHeight: "60vh",
          background: "#fff",
          borderRadius:'8px'
        }}
      >
        <CloseRoundedIcon
          sx={{
            position: "absolute",
            top: "-17px",
            right: "-17px",
            background: "#fff",
            borderRadius: "50%",
            p: 1,
            cursor: "pointer",
          }}
          onClick={handleClose}
        />
        {/* <IconButton
          sx={{}}
          //   onClick={() => onCloseClick()}
        >
          
        </IconButton> */}
        <Box display="flex">
          <Grid container sx={{ maxWidth: "500px !important" }}>
            <Grid
              item
              xs={12}
              md={5}
              sx={{
                background: "url(./assets/images/login-bg.jpg)",
                backgroundSize: "100% 100%",
                minHeight: "60vh",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  p: 2,
                }}
              >
                <Box display="block">
                  <Typography>Welcome back!</Typography>
                  <Typography>
                    Verified, Secured, One Login for multiple online stores
                  </Typography>
                  <Box component="img" src="" />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={7}>
              <Box>
                <Typography>Gaja andre ane ankondra Gaja andre fire </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default Button;
