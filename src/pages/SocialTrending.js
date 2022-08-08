import {
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

export const blackColor = "#000";
export const whiteColor = "#fff";

function SocialTrending({children}) {
  return (
    <>
      <Box sx={{ backgroundColor: "#f2f2f2" }} p={2}>
        <Container sx={{ maxWidth: "1400px !important" }}>
          <Grid container spacing={5}>
            <Grid item xs={12} md={3}>
              <Box
                boxShadow="0 1px 2px rgb(0 0 0 / 5%)"
                sx={{ backgroundColor: whiteColor }}
                borderRadius="8px"
                mb={2}
                // mt={2}
                pl={2}
                pr={2}
              >
                <Box>
                  <Typography
                    variant="h6"
                    fontSize="15px"
                    fontWeight={500}
                    color={blackColor}
                    pt={1}
                  >
                    Social Trending
                  </Typography>
                </Box>
                <Box mt={2}>
                  <Box
                    display="flex"
                    alignItems="center"
                    mb={1}
                    cursor="pointer"
                  >
                    <IconButton
                      sx={{ backgroundColor: "#f2f2f2", color: "#0e0e0e" }}
                    >
                      {<FeedOutlinedIcon sx={{ fontSize: "18px" }} />}
                    </IconButton>
                    <Typography
                      variant="h6"
                      fontWeight={500}
                      color={blackColor}
                      ml={2}
                    >
                      All
                    </Typography>
                  </Box>
                  <Divider />
                </Box>
                <Box mt={1}>
                  <Box display="flex" alignItems="center" mb={1}>
                    <IconButton
                      sx={{ backgroundColor: "#f2f2f2", color: "#0e0e0e" }}
                    >
                      {<ShoppingCartOutlinedIcon sx={{ fontSize: "18px" }} />}
                    </IconButton>
                    <Typography
                      variant="h6"
                      fontWeight={500}
                      color={blackColor}
                      ml={2}
                    >
                      Purchases
                    </Typography>
                  </Box>
                  <Divider />
                </Box>
                <Box mt={1}>
                  <Box display="flex" alignItems="center" mb={1}>
                    <IconButton
                      sx={{ backgroundColor: "#f2f2f2", color: "#0e0e0e" }}
                    >
                      {<GroupAddOutlinedIcon sx={{ fontSize: "18px" }} />}
                    </IconButton>
                    <Typography
                      variant="h6"
                      fontWeight={500}
                      color={blackColor}
                      ml={2}
                    >
                      Following
                    </Typography>
                  </Box>
                  <Divider />
                </Box>
                <Box mt={1}>
                  <Box display="flex" alignItems="center" mb={1}>
                    <IconButton
                      sx={{ backgroundColor: "#f2f2f2", color: "#0e0e0e" }}
                    >
                      {<ShareOutlinedIcon sx={{ fontSize: "18px" }} />}
                    </IconButton>
                    <Typography
                      variant="h6"
                      fontWeight={500}
                      color={blackColor}
                      ml={2}
                    >
                      Shared
                    </Typography>
                  </Box>
                  <Divider />
                </Box>
                <Box mt={1}>
                  <Box display="flex" alignItems="center" mb={1}>
                    <IconButton
                      sx={{ backgroundColor: "#f2f2f2", color: "#0e0e0e" }}
                    >
                      {<StarBorderOutlinedIcon sx={{ fontSize: "18px" }} />}
                    </IconButton>
                    <Typography
                      variant="h6"
                      fontWeight={500}
                      color={blackColor}
                      ml={2}
                    >
                      Reviewed
                    </Typography>
                  </Box>
                  <Divider />
                </Box>
                <Box mt={1} pb={1}>
                  <Box display="flex" alignItems="center" mb={1}>
                    <IconButton
                      sx={{ backgroundColor: "#f2f2f2", color: "#0e0e0e" }}
                    >
                      {<FavoriteBorderOutlinedIcon sx={{ fontSize: "18px" }} />}
                    </IconButton>
                    <Typography
                      variant="h6"
                      fontWeight={500}
                      color={blackColor}
                      ml={2}
                    >
                      Liked
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>{children}</Grid>
            <Grid item xs={12} md={3}>
              <Box
                boxShadow="0 1px 2px rgb(0 0 0 / 5%)"
                sx={{ backgroundColor: whiteColor }}
                borderRadius="8px"
                mb={2}
                // mt={2}
                pl={2}
                pr={2}
              >
                <Box>
                  <Typography
                    variant="h6"
                    fontSize="15px"
                    fontWeight={500}
                    color={blackColor}
                    pt={1}
                  >
                    Today's Trends
                  </Typography>
                  <Box>
                    <Grid container>
                      <Grid item md={4}>
                        <Box
                          position="relative"
                          sx={{
                            background: "url(./assets/images/html/f1.jpg) ",
                            backgroundSize: "100% 100%",
                            backgroundRepeat: "no-repeat",
                            width: "100%",
                            aspectRatio: "1",
                          }}
                        >
                          <Typography>White Cotton</Typography>
                          <Typography>T-Shirt</Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default SocialTrending;
