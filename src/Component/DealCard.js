import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

function DealCard({
  businessName,
  description,
  discount,
  coupon,
  date,
  foodname,
  logo,
}) {
  return (
    <Box
      sx={{
        boxShadow: "0 1px 2px rgb(0 0 0 / 5%);",
        background: "#fff",
      }}
      borderRadius="8px"
      border="1px solid #e8eaed"
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        py={1.5}
        px={2}
      >
        <Box>
          <Typography fontWeight={700} color="#000" fontSize="16px">
            Flat {discount}% Off
          </Typography>
          <Typography fontSize="11px" fontWeight={400} color="#2c2c2c">
            Exp : {date}
          </Typography>
        </Box>
        <Box>
          <Typography fontSize="11px" fontWeight={400} color="#2c2c2c">
            Coupon code :
          </Typography>
          <Typography
            sx={{ color: "#01a4b5", fontWeight: "700", fontSize: "13px" }}
          >
            {coupon}
          </Typography>
        </Box>
      </Box>
      <Box
        component="img"
        width="100%"
        sx={{ aspectRatio: "4/3" }}
        src="./assets/images/1.jpeg"
      />
      <Box display="flex">
        <Grid container p={1}>
          <Grid item xs={3}>
            <Box
              component="img"
              src={logo}
              width="80%"
              sx={{
                borderRadius: 1,
                border: "1px solid #e8eaed",
                aspectRatio: "1",
              }}
            />
          </Grid>
          <Grid xs={9}>
            <Box>
              <Typography fontSize="15px" color="#000" fontWeight={600}>
                {businessName}
              </Typography>
              <Typography fontSize="12px" color="#adacac" fontWeight={400}>
                {description}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          background: "#f5fbfc",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{ color: "#000", fontSize: "12px", fontWeight: "500" }}
          py={1}
        >
          {foodname}
        </Typography>
      </Box>
    </Box>
  );
}

export default DealCard;
