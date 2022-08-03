import { SendToMobile } from "@mui/icons-material";
import {
  Autocomplete,
  Box,
  Button,
  Container,
  Grid,
  Input,
  MenuItem,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

export const ProjectMui = () => {

  const [mobile, setMobile]= useState('')
const [contact, setContact]= useState('')

const saveUser =()=>{
  let data = [mobile,contact]
  axios.post(`https://jsonplaceholder.typicode.com/posts`,{data})
  .then((res)=>{
    console.log(res)
  })

}

  // const bussiness =['snacks', 'sweets', 'oil', 'georgy', 'automobiles']
  return (
    <Container sx={{ maxWidth: "1300px !important" }}>
      <Grid container spacing={5} py={3}>
        <Grid item xs={12} md={6}>
          <Box p={3} boxShadow={4} borderRadius="10px">
            <Box component="img" src="/assets/images/logo_v3.png" textAlign='center' />
            <Typography variant="h4" justifyContent='center'>Welcome to CostBo</Typography>
            <Stack>
              <Stack direction="row" spacing={2}>
                <Typography variant="h6">Mobile Number </Typography>
                <Typography color="error">* </Typography>
              </Stack>
              <Grid container spacing={2}>
                <Grid item xs={9}>
                  <TextField
                    variant="filled"
                    type="text"
                    size="small"
                    label="Enter Mobile Number"
                    sx={{ width: "100%" }}
                    value={mobile}
                    onClick={()=>setMobile(saveUser)}
                  />
                </Grid>
                <Grid item xs={3}>
                  <Button variant="contained" color="success">
                    Send otp
                  </Button>
                </Grid>
              </Grid>
            </Stack>
            <Stack>
              <Stack direction="row">
                <Typography variant="h6">OTP</Typography>
                <Typography color="error">*</Typography>
              </Stack>
              <Stack>
                <TextField
                  variant="outlined"
                  size="small"
                  label="Enter OTP"
                ></TextField>
              </Stack>
            </Stack>
            <Stack>
              <Stack direction="row">
                <Typography variant="h6">Contact Name</Typography>
                <Typography color="error">*</Typography>
              </Stack>
              <Stack>
                <TextField
                  variant="outlined"
                  placeholder="Enter Contact Name"
                  size="small"
                  value={contact}
                  onClick={()=>setContact(saveUser)}
                ></TextField>
              </Stack>
            </Stack>
            <Stack>
              <Stack direction="row">
                <Typography variant="h6">Business Name</Typography>
                <Typography color="error">*</Typography>
              </Stack>
              <Stack>
                <TextField
                  variant="outlined"
                  label="Enter Bussiness Name"
                  size="small"
                ></TextField>
              </Stack>
            </Stack>
            <Stack>
              <Stack direction="row">
                <Typography variant="h6">Email ID</Typography>
                <Typography color="error">*</Typography>
              </Stack>
              <Stack>
                <TextField
                  variant="outlined"
                  label="Enter Email id"
                  size="small"
                ></TextField>
              </Stack>
            </Stack>
            <Stack>
              <Stack>
                <Typography variant="h6" textAlign={"start"}>
                  Business Type
                </Typography>
              </Stack>
              <TextField
                variant="outlined"
                size="small"
                label="Select Business Type"
                select
              >
                <MenuItem value="oi">oil</MenuItem>
                <MenuItem value="sn">snacks</MenuItem>
                <MenuItem value="au">automobiles</MenuItem>
                <MenuItem value="ch">chains</MenuItem>
                <MenuItem value="el">electronics</MenuItem>
              </TextField>
            </Stack>
            <Stack>
              <Stack>
                <Typography variant="h6" textAlign={"start"}>
                  Business Catagory
                </Typography>
              </Stack>
              <TextField
                variant="outlined"
                size="small"
                label="Select Catagory Type"
                select
              >
                <MenuItem value="Retail">oil</MenuItem>
                <MenuItem value="munfcature">snacks</MenuItem>
                <MenuItem value="Wholesale">automobiles</MenuItem>
                <MenuItem value="retail-sale">chains</MenuItem>
                <MenuItem value="sale">electronics</MenuItem>
              </TextField>
            </Stack>
            <Button variant="contained" color="success" onClick={saveUser}>
              Submit
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} display="flex" alignItems="center">
          <Box>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Box
                  sx={{ backgroundColor: "primary.main" }}
                  height="100px"
                  display="flex"
                  alignItems="center"
                  px={2}
                  borderRadius="5px"
                >
                  <Typography variant="body2" color="white">
                    Free AI powered, Managed, Zero Maintenance Webstores
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box
                  sx={{ backgroundColor: "primary.main" }}
                  height="100px"
                  display="flex"
                  alignItems="center"
                  px={2}
                  borderRadius="5px"
                >
                  <Typography variant="body2" color="white">
                    Brand discovery through CostBo Marketplace & SEO
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box
                  sx={{ backgroundColor: "primary.main" }}
                  height="100px"
                  display="flex"
                  alignItems="center"
                  px={2}
                  borderRadius="5px"
                >
                  <Typography variant="body2" color="white">
                    Social Commerce powered by Customer Network
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box
                  sx={{ backgroundColor: "primary.main" }}
                  height="100px"
                  display="flex"
                  alignItems="center"
                  px={2}
                  borderRadius="5px"
                >
                  <Typography variant="body2" color="white">
                    Integrated Influencers & Resellers network
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <Stack mt={4}>
              <Typography variant="h6" textAlign={"start"} pb={2}>
                All you need to get started
              </Typography>
              <Stack direction="row">
                <Box
                  component="img"
                  src="assets/images/2.png"
                  width="5%"
                  pr={2}
                  pb={2}
                ></Box>
                <Typography variant="h8">GSTIN</Typography>
              </Stack>
              <Stack direction="row">
                <Box
                  component="img"
                  src="assets/images/2.png"
                  width="5%"
                  pr={2}
                  pb={2}
                ></Box>
                <Typography variant="h8">BANK ACCOUNT</Typography>
              </Stack>
              <Stack direction="row">
                <Box
                  component="img"
                  src="assets/images/2.png"
                  width="5%"
                  pr={2}
                  pb={2}
                ></Box>
                <Typography variant="h8">FSSAI (FOR FOOD INDUSTRY)</Typography>
              </Stack>
              <Typography variant="h6" textAlign={"start"} pb={2}>
                Any questions/clarifications, we are here to help!
              </Typography>
              <Stack direction="row">
                <Box
                  component="img"
                  src="assets/images/2.png"
                  width="5%"
                  pr={2}
                  pb={2}
                ></Box>
                <Typography variant="h8">ecommerce@costbo.com</Typography>
              </Stack>
              <Stack direction="row">
                <Box
                  component="img"
                  src="assets/images/2.png"
                  width="5%"
                  pr={2}
                  pb={2}
                ></Box>
                <Typography variant="h8">+91 8088422611</Typography>
              </Stack>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
