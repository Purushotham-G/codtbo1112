import { Box, Container, Typography } from "@mui/material";
import React from "react";
import DashBoard from "./DashBoard";
import DashBoard1 from "./DashBoard1";
import MyWallet from "./MyWallet";

function Profile() {
  return (
    <>
      <DashBoard active="Profile">
        <DashBoard1 />
        {/* <MyWallet /> */}
      </DashBoard>
    </>
  );
}

export default Profile;
