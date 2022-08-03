import { Checkbox, Grid, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { blackColor } from 'configs/styles/muiThemes'
import React from 'react'

function TaxGstDetailsCard() {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } }
  return (
    <>
      <Box mx={3} mt={4}>
        <Box mb={2}>
          <Typography
            variant='h6'
            fontWeight={600}
            fontSize={{ xs: '15px', md: '20px' }}
          >
            Tax & GST Details
          </Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Box>
              {' '}
              <Box display='flex'>
                <Typography
                  display='flex'
                  variant='h6'
                  fontWeight={500}
                  color={blackColor}
                >
                  GSTIN / TIN
                </Typography>
              </Box>
              <Box
                sx={{
                  // backgroundColor: whiteColor,
                  border: ' 1px solid #e8ebf1',
                  borderRadius: '4px',
                  padding: '6px 12px',
                  fontWeight: '400',
                  fontSize: '13px',
                  color: '#333',
                  height: '45px',
                }}
              >
                <TextField
                  variant='standard'
                  fullWidth
                  InputProps={{ disableUnderline: true }}
                  placeholder='e.g. 23ACHFGN2335'
                  pl={2}
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box>
              {' '}
              <Box display='flex'>
                <Typography
                  display='flex'
                  variant='h6'
                  fontWeight={500}
                  color={blackColor}
                >
                  PAN Number
                </Typography>
                <Typography color='#ff485f' mx={1}>
                  *
                </Typography>
              </Box>
              <Box
                sx={{
                  // backgroundColor: whiteColor,
                  border: ' 1px solid #e8ebf1',
                  borderRadius: '4px',
                  padding: '6px 12px',
                  fontWeight: '400',
                  fontSize: '13px',
                  color: '#333',
                  height: '45px',
                }}
              >
                <TextField
                  variant='standard'
                  fullWidth
                  InputProps={{ disableUnderline: true }}
                  placeholder='e.g. ABCFN0CF'
                  pl={2}
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box>
              {' '}
              <Box display='flex'>
                <Typography
                  display='flex'
                  variant='h6'
                  fontWeight={500}
                  color={blackColor}
                >
                  FSSAI License No
                </Typography>
              </Box>
              <Box
                sx={{
                  // backgroundColor: whiteColor,
                  border: ' 1px solid #e8ebf1',
                  borderRadius: '4px',
                  padding: '6px 12px',
                  fontWeight: '400',
                  fontSize: '13px',
                  color: '#333',
                  height: '45px',
                }}
              >
                <TextField
                  variant='standard'
                  fullWidth
                  InputProps={{ disableUnderline: true }}
                  placeholder='e.g. LCI1234CDPFXWA'
                  pl={2}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box mx={3} mt={2} mb={4}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Box>
              <Box
                fullWidth
                height='180px'
                display='flex'
                alignItems='center'
                justifyContent='center'
                border='1px solid #e8ebf1'
                borderRadius='4px'
              >
                <Box component='img' src='./assets/images/cloud.png' />
              </Box>
              <Box
                backgroundColor='#f5f6f8'
                border='1px solid #e8ebf1'
                display='flex'
                alignItems='center'
                justifyContent='center'
                pt={1}
                pb={1}
              >
                <Typography>Upload GSTIN/TIN (Optional)</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box>
              <Box
                fullWidth
                height='180px'
                display='flex'
                alignItems='center'
                justifyContent='center'
                border='1px solid #e8ebf1'
                borderRadius='4px'
              >
                <Box component='img' src='./assets/images/cloud.png' />
              </Box>
              <Box
                backgroundColor='#f5f6f8'
                border='1px solid #e8ebf1'
                display='flex'
                alignItems='center'
                justifyContent='center'
                pt={1}
                pb={1}
              >
                <Typography>Upload PAN Card</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box>
              <Box
                fullWidth
                height='180px'
                display='flex'
                alignItems='center'
                justifyContent='center'
                border='1px solid #e8ebf1'
                borderRadius='4px'
              >
                <Box component='img' src='./assets/images/cloud.png' />
              </Box>
              <Box
                backgroundColor='#f5f6f8'
                border='1px solid #e8ebf1'
                display='flex'
                alignItems='center'
                justifyContent='center'
                pt={1}
                pb={1}
              >
                <Typography>Upload FSSAI(Optional)</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box mx={3} mt={2}>
        <Box mb={2}>
          <Typography
            variant='h6'
            fontWeight={600}
            fontSize={{ xs: '15px', md: '20px' }}
          >
            Shipping Info
          </Typography>
        </Box>
        <Box display='flex' alignItems='center'>
          <Checkbox {...label} />
          <Typography variant='h6' fontSize='12px'>
            Delivery/Fulfillment By Business
          </Typography>
        </Box>
        <Box display='flex' alignItems='center'>
          <Checkbox {...label} />
          <Typography variant='h6' fontSize='12px'>
            Store Pickup
          </Typography>
        </Box>
      </Box>
    </>
  )
}

export default TaxGstDetailsCard
