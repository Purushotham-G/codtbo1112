import { Box, Container, Grid, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import DealCard from "./DealCard";
import { getSecondApiData } from "../Redux/CardSlice";

function Cart() {
  const dispatch = useDispatch();
  const { secondApiData, secondApiLoading } = useSelector(
    (state) => state.cart
  );

  useEffect(() => {
    dispatch(getSecondApiData());
  }, []);

  useEffect(() => {
    console.log("fldhgfuldgfb", secondApiData);
  }, [secondApiData]);

  const data = [
    {
      businessName: "Kadala mittai",
      description: "lkcjabgecfl qwigvfqelwi gqvxvqbnf",
      discount: "5",
      coupon: "DHVNJNKK",
      date: "MAR 12 2023",
      foodname: "egvqbaevf qdhlb",
    },
    { businessName: "knkknk" },
    { businessName: "knkknk" },
    { businessName: "knkknk" },
    { businessName: "knkknk" },
    { businessName: "knkknk" },
  ];
  return (
    <Box py={2}>
      <Container sx={{ maxWidth: "1400px !important" }}>
        <Grid container spacing={2}>
          {secondApiData?.map((item, i) => (
            <Grid item xs={12} md={3}>
              <DealCard
                businessName={item.businessName}
                discount={item?.discount}
                coupon={item?.coupon}
                description={item?.description}
                date={item?.date}
                foodname={item?.foodname}
                logo={item?.businessLogo}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Cart;
