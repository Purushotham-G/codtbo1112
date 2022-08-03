import { Box, Container, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import Button from "./Button";

function PopupScreen() {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Box>
        <Container sx={{ maxWidth: "1350px !important" }}>
          <Box>
            <Typography>WelCome to Popup Screen</Typography>
            <Box display="block" onClick={handleClick}>
              <Typography
                sx={{
                  cursor: "pointer",
                  color: "red",
                  textDecoration: "underline",
                }}
              >
                Shop MORE
              </Typography>
            </Box>
          </Box>

          <Modal open={open}>
            <Button handleClose={() => setOpen(false)} />
          </Modal>
        </Container>
      </Box>
    </>
  );
}

export default PopupScreen;
