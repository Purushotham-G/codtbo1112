import React from "react";
import DashBoard from "../Component/DashBoard";
import MyWallet from "../Component/MyWallet";

function NewPage() {
  return (
    <>
      <DashBoard active="CostBo Wallet">
        <MyWallet />
      </DashBoard>
    </>
  );
}

export default NewPage;
