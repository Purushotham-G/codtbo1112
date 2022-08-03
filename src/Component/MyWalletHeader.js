import { Box, MenuItem, Select, Typography } from "@mui/material";
import React, { useState } from "react";

function MyWalletHeader() {
  const [filter, setFilter] = useState("");
  const [array, setArray] = useState([]);
  const handleChange = (event) => {
    
  };
  return (
    <>
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Box>
          <Typography
            sx={{ fontWeight: "600", fontSize: "20px", color: "#000" }}
          >
            My Wallet
          </Typography>
          <Typography
            sx={{ fontWeight: "400", fontSize: "14px", color: "#ababab" }}
          >
            You have Loyalty credits from 10 stores, Enjoy immediate saving
          </Typography>
        </Box>
        <Box display={{ md: "flex", xs: "none" }} alignItems="center">
          <Typography>Filter by</Typography>
          <Box>
            <Select
              value={filter}
              onChange={handleChange}
              sx={{
                minWidth: {
                  xs: "none",
                  md: "300px",
                  background: "#fff",
                  height: "38px",
                },
              }}
            >
              <MenuItem value="">qjehbxv2s</MenuItem>
              <MenuItem value="hello">jehgwn</MenuItem>
              <MenuItem value="hello">jehgwn</MenuItem>
              <MenuItem value="hello">jehgwn</MenuItem>
            </Select>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default MyWalletHeader;
