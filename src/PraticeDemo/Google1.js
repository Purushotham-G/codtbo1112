import {
    DirectionsBoatFilledSharp,
    FormatAlignJustify,
  } from "@mui/icons-material";
  import {
    Box,
    Button,
    Container,
    IconButton,
    InputAdornment,
    TextField,
    Typography,
  } from "@mui/material";
  import React, { useEffect, useState } from "react";
  import SearchIcon from "@mui/icons-material/Search";
  import LocationOnIcon from "@mui/icons-material/LocationOn";
  import MenuIcon from '@mui/icons-material/Menu';
  import axios from "axios";
  import { Google2 } from "./Google2";
  import { ProjectMui } from "./ProjectMui";
import { textAlign } from "@mui/system";
  
  export const Google1 = () => {
    const whiteColor = "#FFFFFF";
    const [show, setShow] = useState(false);
  
    return (
      <>
        <Box component="header" sx={{ background: `yellow`, py: 2 }}>
          <Container sx={{ maxWidth: "1300px !important" }}>
            <Box
              component="nav"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box display="flex" alignItems="center" justifyContent="center">
                <Box>
                    <IconButton>
                        <MenuIcon />
                    </IconButton>
                </Box>
                <Box
                  sx={{ width: { md: "250px", xs: "150px" } }}
                  component="img"
                  src="/assets/images/logo_v3.png"
                />
              </Box>
              <Box sx={{ display: { md: "block", xs: "none" } }}>
                <TextField
                  label="Search Location"
                  size="small"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment>
                        {<LocationOnIcon position="end" />}
                      </InputAdornment>
                    ),
                  }}
                ></TextField>
              </Box>
              <Box display="flex" alignItems="center">
                <Typography
                  display={{ md: "block", xs: "none" }}
                  fontWeight="600"
                  mr={2}
                >
                  Get CostBo App
                </Typography>
  
                <Button
                  variant="contained"
                  type="button"
                  sx={{ fontWeight: "600" }}
                  value={show}
                  onClick={() => setShow(!show)}
                >
                  Get started
                </Button>
              </Box>
            </Box>
          </Container>
        </Box>
        {show ? (
          <ProjectMui />
        ) : (
          <Box display='flex' justifyContent='center'>
            <Container sx={{ maxWidth: "1300px !important" }}>
              <Box sx={{ boxShadow: "4" }} p={6} backgroundColor="grey">
                <Box
                  component="img"
                  src="/assets/images/logo_v3.png"
                  sx={{ width: { md: "30%", xs: "60%" } ,display:'block',ml:'auto', mr:'auto' }} 
                  m={6}
                />
  
                <Box justifyContent='center' display='flex'>
                  <TextField
                    label="serach product"
                    variant="outlined"
                    size="small"
                    sx={{
                      width: { md: "40%", xs: "80%" },
                      borderRadius: "25%",
                      mb: 3,
                    }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment>
                          {<SearchIcon position="end" />}
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>
                <Google2 />
              </Box>
            </Container>
          </Box>
        )}
      </>
    );
  };
  