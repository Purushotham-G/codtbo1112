import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";

import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import DiscountOutlinedIcon from "@mui/icons-material/DiscountOutlined";
import ReviewsOutlinedIcon from "@mui/icons-material/ReviewsOutlined";
import { Link } from "react-router-dom";

function DashBoard({ children, active }) {
  const data = [
    {
      icon: (
        <PermIdentityOutlinedIcon sx={{ color: "#b8b8b8", fontSize: "18px" }} />
      ),
      label: "ACCOUNT",
      items: [{ label: "Profile", link: "/profile" }],
    },
    {
      icon: <FeedOutlinedIcon sx={{ color: "#b8b8b8", fontSize: "18px" }} />,
      label: "ORDERS",
      items: [{ label: "My Orders", link: "" }],
    },
    {
      icon: (
        <AccountBalanceWalletOutlinedIcon
          sx={{ color: "#b8b8b8", fontSize: "18px" }}
        />
      ),
      label: "WALLET",
      items: [{ label: "CostBo Wallet", link: "/newPage" }],
    },
    {
      icon: (
        <DiscountOutlinedIcon sx={{ color: "#b8b8b8", fontSize: "18px" }} />
      ),
      label: "DISCOUNT",
      items: [{ label: "My Discounts", link: "" }],
    },
    {
      icon: <ReviewsOutlinedIcon sx={{ color: "#b8b8b8", fontSize: "18px" }} />,
      label: "REVIEW",
      items: [{ label: "My Reviews", link: "" }],
    },
  ];
  return (
    <>
      <Box sx={{ background: "#f2f2f2", p: 2 }}>
        <Container sx={{ maxWidth: "1500px !important" }}>
          <Box
            sx={{ background: "#fff" }}
            display="flex"
            p={1}
            alignItems="center"
            borderRadius="5px"
          >
            <Typography fontSize="13px" px={1} sx={{ color: "#5d5c5c" }}>
              Home
            </Typography>
            <NavigateNextOutlinedIcon
              fontSize="13px"
              px={1}
              sx={{ color: "#5d5c5c" }}
            />
            <Typography fontSize="13px" px={1} sx={{ color: "#5d5c5c" }}>
              My Dashboard{" "}
            </Typography>
          </Box>
          {/* profile cart */}
          <Box>
            <Typography
              sx={{ color: "#000", fontSize: "20px", fontWeight: "600", my: 2 }}
            >
              My Dashboard
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={12} md={3}>
                <Box display={{ xs: "none", md: "block" }}>
                  <Box
                    sx={{ background: "#fff", position: "sticky" }}
                    display="flex"
                    p={2}
                    gap={1}
                    borderRadius="7px"
                    position="sticky"
                  >
                    <Box component="img" src="./assets/images/p1.png" />
                    <Box display="block">
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "600",
                          color: "#000",
                        }}
                      >
                        Purushotham
                      </Typography>
                      <Typography
                        sx={{
                          color: "#ababab",
                          fontSize: "14px",
                          fontWeight: "400",
                        }}
                      >
                        purushu199@gmail.com
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ background: "#fff" }} mt={1} borderRadius="7px">
                    {data.map((item, i) => (
                      <>
                        <Box display="flex" p={2} gap={1}>
                          {item?.icon}
                          {/* <PermIdentityOutlinedIcon
                          sx={{ color: "#b8b8b8", fontSize: "18px" }}
                        /> */}
                          <Box display="block">
                            <Typography
                              sx={{
                                fontSize: "12px",
                                fontWeight: "500",
                                color: "#ababab",
                              }}
                            >
                              {item?.label}
                            </Typography>
                            {item?.items?.map((data, index) => (
                              <Typography
                                sx={{
                                  fontSize: "14px",
                                  fontWeight: "500",
                                  color:
                                    active == data?.label
                                      ? "#00ab6b"
                                      : "#000",
                                  textDecoration: "none",
                                }}
                                component={Link}
                                to={data?.link}
                              >
                                {data?.label}
                              </Typography>
                            ))}
                          </Box>
                          {/* <Divider /> */}
                        </Box>
                        <Divider />
                      </>
                    ))}
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={9}>
                {children}
              </Grid>
            </Grid>
          </Box>

          {/* {data?.map((item, i) => (
            <Box sx={{ background: "#fff" }}>
              <Box display="flex">
                {item?.icon}
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: "500",
                    color: "#ababab",
                  }}
                >
                  {item?.label}
                </Typography>
              </Box>
            </Box>
          ))} */}
        </Container>
      </Box>
    </>
  );
}

export default DashBoard;
