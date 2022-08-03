import {
  Box,
  Grid,
  MenuItem,
  MenuList,
  Modal,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import MyWalletHeader from "./MyWalletHeader";
import { getWalletApiData } from "../Redux/cardSlice1";
import PopScreen from "./PopScreen";
import Button from "./Button";

function MyWallet() {
  const dispatch = useDispatch();
  const { secondApiData, secondApiLoading } = useSelector(
    (state) => state.cart
  );

  useEffect(() => {
    dispatch(getWalletApiData());
  }, []);

  useEffect(() => {
    console.log("fldhgfuldgfb", secondApiData);
  }, [secondApiData]);

  const data1 = [
    {
      logo: "",
      businessName: "",
      businessDescription: "",
      amt: "",
      data: "",
    },
  ];

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        {/* <PopScreen /> */}
        <Button />
      </Modal>

      <MyWalletHeader />

      {data1?.map((item, i) => (
        <Box>
          <Grid container>
            <Grid item xs={12} md={6}>
              <Box sx={{ background: "#fff", borderRadius: "5px" }}>
                <Box display="flex" sx={{ p: 2, gap: 2 }}>
                  <Box
                    component="img"
                    src="./assets/images/p1.png"
                    width="55px"
                    height="55px"
                    border="1px solid #ebebeb"
                    borderRadius="5px"
                  />
                  <Box display="block">
                    <Typography
                      sx={{
                        fontSize: { xs: "14px", md: "16px" },
                        color: "#000",
                      }}
                    >
                      {/* {item?.businessName} */}jbcb
                    </Typography>
                    <Typography
                      sx={{
                        color: "#8b8b8b",
                        fontSize: { xs: "12.5px", md: "13px" },
                        fontWeight: "400",
                      }}
                    >
                      Health supplements, Amla capsules, Arjuna capsules, Neem
                      capsul,
                    </Typography>
                  </Box>
                </Box>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  sx={{ background: "#f5fbfc", p: { xs: 1, md: 2 } }}
                >
                  <Box display="flex" alignItems="center">
                    <Typography
                      sx={{
                        fontSize: "12px",
                        fontWeight: "500",
                        color: "#000",
                        display: { xs: "none", md: "flex" },
                      }}
                    >
                      Available Amount -
                    </Typography>
                    <CurrencyRupeeIcon
                      sx={{
                        fontSize: { xs: "13px", md: "14px" },
                        color: "#01a4b5",
                      }}
                    />
                    <Typography sx={{ fontSize: "14px", color: "#01a4b5" }}>
                      1233.00{" "}
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center">
                    <Typography sx={{ fontSize: "12px", fontWeight: "500" }}>
                      Exp: mar 12 2023
                    </Typography>
                  </Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    sx={{ cursor: "pointer" }}
                    onClick={handleOpen}
                  >
                    <Typography
                      sx={{
                        color: "#f96138",
                        fontSize: { xs: "12px", md: "13px" },
                        fontWeight: "500",
                        textDecoration: "underline",
                      }}
                    >
                      SHOP MORE
                    </Typography>
                    <ChevronRightOutlinedIcon
                      sx={{
                        color: "#f96138",
                        fontWeight: "500",
                      }}
                    />
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      ))}
    </>
  );
}

export default MyWallet;
