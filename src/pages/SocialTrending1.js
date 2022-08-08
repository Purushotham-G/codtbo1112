import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PublicIcon from "@mui/icons-material/Public";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import RepeatIcon from "@mui/icons-material/Repeat";
import { getWalletApiData } from "../Redux/socialTrending/socialSlice1";
// import { getWalletApiData } from "../Redux/socialTrending/socialSlice1";

function SocialTrending1({ children }) {
  // const dispatch = useDispatch();
  // const { secondApiData, secondApiLoading } = useSelector(
  //   (state) => state.social
  // );

  // useEffect(() => {
  //   dispatch(getWalletApiData());
  // }, []);

  // useEffect(() => {
  //   console.log("fldhgfuldgfb", secondApiData);
  // }, [secondApiData]);
  const dispatch = useDispatch();
  const { secondApiData, secondApiLoading } = useSelector(
    (state) => state.social
  );

  useEffect(() => {
    dispatch(getWalletApiData());
  }, []);

  useEffect(() => {
    console.log("fldhgfuldgfb", secondApiData);
  }, [secondApiData]);
  const data = [
    {
      name: "",
      business: "",
      time: "",
      image: "",
      productName: "",
      originalAmount: "",
      offerAmount: "",
    },
  ];

  return (
    <>
      {secondApiData?.map((item, i) => (
        <Box sx={{ background: "#fff" }}>
          <Box display="flex" alignItems="center" p={2} gap={2}>
            <Box component="img" src="./assets/images/p1.png" />
            <Box>
              <Box alignItems="center" gap={1}>
                <Typography
                  sx={{
                    color: "#000",
                    fontSize: "16px",
                    fontWeight: "600",
                    display: "inline",
                  }}
                >
                  {item?.businessName}
                  <Typography
                    sx={{
                      color: "#a0a0a0",
                      fontWeight: "400",
                      fontSize: "14px",
                      display: "inline",
                    }}
                  >
                    (recommended) shared this listing from
                  </Typography>
                  <Typography
                    sx={{
                      color: "#000",
                      fontSize: "16px",
                      fontWeight: "600",
                      lineHeight: 1.5,
                      display: "inline",
                    }}
                  >
                    jdbvvfkjbiksdd
                  </Typography>
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" gap={1}>
                <PublicIcon />
                <Typography>3 min ago</Typography>
              </Box>
            </Box>
          </Box>
          <Box component="img" src="./assets/images/1.jpeg" width="100%" />
          <Box
            sx={{ background: "#fff" }}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            p={2}
          >
            <Box>
              <Typography>BIBA Floral Print Kurti</Typography>
              <Box display="flex" gap={1}>
                <Box display="flex" alignItems="center">
                  <CurrencyRupeeIcon sx={{ fontSize: "16px" }} />
                  <Typography fontSize="16px">5995</Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <CurrencyRupeeIcon
                    sx={{ fontSize: "16px", color: "#01a4b5" }}
                  />
                  <Typography fontSize="16px" sx={{ color: "#01a4b5" }}>
                    87545
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              border="1px solid rgb(228, 228, 228)"
              sx={{
                width: "125px",
                height: "32px",
                fontWeight: "500",
                fontSize: "13px",
                color: "rgb(154, 154, 154)",
                cursor: "pointer",
                "&:hover": {
                  background: "#01a4b5",
                  color: "#fff",
                },
              }}
              display="flex"
              alignItems="center"
              justifyContent="center"
              borderRadius="50px"
            >
              <Typography>SHOP NOW</Typography>
            </Box>
          </Box>
          <Divider />
          <Box p={2}>
            <Grid container spacing={2}>
              <Grid item md={7}>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box
                    sx={{
                      display: "flex",
                      color: "#6a6a6a",
                      gap: 1,
                      alignItems: "center",
                    }}
                  >
                    <FavoriteBorderOutlinedIcon />
                    <Typography fontWeight={500} fontSize="14px">
                      Like
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      color: "#6a6a6a",
                      gap: 1,
                      alignItems: "center",
                    }}
                  >
                    <ModeCommentOutlinedIcon />
                    <Typography fontWeight={500} fontSize="14px">
                      Comment
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      color: "#6a6a6a",
                      gap: 1,
                      alignItems: "center",
                    }}
                  >
                    <RepeatIcon />
                    <Typography fontWeight={500} fontSize="14px">
                      Share
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item md={5}>
                <Box display="flex" gap={1} justifyContent="flex-end">
                  <Box display="flex" alignItems="center" gap={1}>
                    <Typography>1222</Typography>
                    <Typography>Likes</Typography>
                  </Box>
                  <Typography>|</Typography>
                  {/* <Divider orientation="vertical" flexItem /> */}
                  <Box display="flex" alignItems="center" gap={1}>
                    <Typography>43</Typography>
                    <Typography>Comment</Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      ))}
    </>
  );
}

export default SocialTrending1;
