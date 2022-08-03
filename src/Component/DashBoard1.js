import { Box, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";

function DashBoard1() {
  return (
    <>
      <Box display="block" mt={0} mb={1}>
        <Typography sx={{ fontSize: "20px", fontWeight: "600" }}>
          Profile
        </Typography>
        <Typography
          sx={{
            color: "#ababab",
            fontSize: { xs: "12px", md: "13px" },
            fontWeight: "400",
            lineHeight: 1.5,
          }}
        >
          Manage your details, view your tier status and change your password
        </Typography>
      </Box>
      <Box sx={{ background: "#fff", p: 2, borderRadius: "7px" }}>
        <Typography sx={{ fontSize: "20px", fontWeight: "600" }}>
          Profile Picture
        </Typography>
        <Box display="flex" gap={2} alignItems="center">
          <Box
            sx={{
              background: "#c3c3c3",
              position: "relative",
              width: { xs: "115px", md: "110px" },
              height: { xs: "80px", md: "110px" },
              display: "flex",
              alignItems: "center",
              overflow: "hidden",
              justifyContent: "center",
              borderRadius: "50%",
              border: "5px solid #ebeef2",
            }}
          >
            <Box
              component="img"
              width={{ xs: "25px", md: "34px" }}
              src="./assets/images/p.png"
            />
            <Box
              position="absolute"
              sx={{
                display: "flex",
                background: "rgba(0, 0, 0, 0.174)",

                bottom: 0,
                left: 0,
                width: "100%",
                height: "30px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CameraAltOutlinedIcon sx={{ color: "#fff", fontSize: "17px" }} />
            </Box>
          </Box>
          <Box>
            <Box
              display="flex"
              alignItem="center"
              justifyContent="center"
              width={{ xs: "135px", md: "155px" }}
              border="2px solid #f0f1f4"
              borderRadius="5px"
              mb={1}
            >
              <Typography
                sx={{
                  color: "#898989",
                  fontSize: { xs: "12px", md: "14px" },
                  fontWeight: "500",
                  py: 0.5,
                }}
              >
                UPDATE PHOTO
              </Typography>
            </Box>
            <Typography
              sx={{
                color: "#ababab",
                fontSize: { xs: "10px", md: "13px" },
                fontWeight: "500",
                lineHeight: 1.5,
              }}
            >
              MUST BE A .JPG, .GIF OR .PNG FILE SMALLER THAN 10 MB AND AT LEAST
              400PX BY 400PX.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ background: "#fff" }} mt={2} p={2} borderRadius="7px">
        <Typography sx={{ color: "#000", fontSize: "17px", fontWeight: "600" }}>
          General Info
        </Typography>
        <Box>
          <Grid container spacing={2} py={1}>
            <Grid item xs={12} md={4}>
              <Typography
                sx={{ fontSize: "13px", color: "#b1b1b1", fontWeight: "400" }}
              >
                First Name
              </Typography>
              <Box
                sx={{
                  // backgroundColor: whiteColor,
                  border: " 1px solid #e6e6e6",
                  borderRadius: "5px",
                  padding: "4px 12px",
                  fontWeight: "500",
                  fontSize: "14px",
                  color: "#000",
                  height: "41px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <TextField
                  variant="standard"
                  fullWidth
                  InputProps={{ disableUnderline: true }}
                  placeholder="...Name"
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography
                sx={{ fontSize: "13px", color: "#b1b1b1", fontWeight: "400" }}
              >
                Last Name
              </Typography>
              <Box
                sx={{
                  // backgroundColor: whiteColor,
                  border: " 1px solid #e6e6e6",
                  borderRadius: "5px",
                  padding: "4px 12px",
                  fontWeight: "500",
                  fontSize: "14px",
                  color: "#000",
                  height: "41px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <TextField
                  variant="standard"
                  fullWidth
                  InputProps={{ disableUnderline: true }}
                  placeholder="...Name"
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography
                sx={{ fontSize: "13px", color: "#b1b1b1", fontWeight: "400" }}
              >
                Preferred language
              </Typography>
              <Box
                sx={{
                  // backgroundColor: whiteColor,
                  border: " 1px solid #e6e6e6",
                  borderRadius: "5px",
                  padding: "4px 12px",
                  fontWeight: "500",
                  fontSize: "14px",
                  color: "#000",
                  height: "41px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <TextField
                  variant="standard"
                  fullWidth
                  InputProps={{ disableUnderline: true }}
                  placeholder="...Name"
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box mt={1} mb={1}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Typography
                sx={{ fontSize: "13px", color: "#b1b1b1", fontWeight: "400" }}
              >
                Mobile Number
              </Typography>
              <Box
                sx={{
                  backgroundColor: "#f0f1f4",
                  border: " 1px solid #f0f1f4",
                  borderRadius: "5px",
                  padding: "4px 12px",
                  fontWeight: "500",
                  fontSize: "14px",
                  color: "#000",
                  height: "41px",
                  display: "flex",
                  alignItems: "center",
                  cursor: "not-allowed",
                }}
              >
                <TextField
                  variant="standard"
                  fullWidth
                  InputProps={{ disableUnderline: true }}
                  placeholder="+91 9738953183"
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography
                sx={{ fontSize: "13px", color: "#b1b1b1", fontWeight: "400" }}
              >
                Email ID
              </Typography>
              <Box
                sx={{
                  backgroundColor: "#f0f1f4",
                  border: " 1px solid #f0f1f4",
                  borderRadius: "5px",
                  padding: "4px 12px",
                  fontWeight: "500",
                  fontSize: "14px",
                  color: "#000",
                  height: "41px",
                  display: "flex",
                  alignItems: "center",
                  cursor: "not-allowed",
                }}
              >
                <TextField
                  variant="standard"
                  fullWidth
                  InputProps={{ disableUnderline: true }}
                  placeholder="purushu199@gmail.com"
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Typography
          sx={{
            color: "#01a4b5",
            textDecoration: "underline",
            fontSize: "14px",
            fontWeight: "600",
          }}
        >
          UPDATE INFO
        </Typography>
      </Box>

      <Box sx={{ background: "#fff", p: 2, borderRadius: "7px" }} mt={2}>
        <Typography sx={{ color: "#000", fontSize: "17px", fontWeight: "600" }}>
          Security
        </Typography>
        <Box>
          <Grid container>
            <Grid item xs={12} md={4} py={1}>
              <Typography
                sx={{ fontSize: "13px", color: "#b1b1b1", fontWeight: "400" }}
              >
                Password
              </Typography>
              <Box
                border="1px solid #e6e6e6"
                p="4px 12px"
                fontSize="14px"
                lineHeight={1.5}
                mb={1}
              >
                <TextField
                  variant="standard"
                  fullWidth
                  InputProps={{ disableUnderline: true }}
                  placeholder="........"
                />
              </Box>
              <Typography
                sx={{
                  color: "#01a4b5",
                  textDecoration: "underline",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                CHANGE PASSWORD
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default DashBoard1;
