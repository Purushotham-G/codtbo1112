import { Box, Typography } from "@mui/material";
import React from "react";
import CloseIcon from '@mui/icons-material/Close';

function PopScreen() {
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          background:'#fff',
          boxShadow: 24,
          p:6

        }}
      >
        <CloseIcon position='absolute' top='0' right='0' />
        <Typography>hello Pop up</Typography>
        
      </Box>
    </>
  );
}

export default PopScreen;
