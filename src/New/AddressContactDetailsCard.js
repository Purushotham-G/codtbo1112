import { Box, Grid, IconButton, TextField, Typography } from '@mui/material'
import React from 'react'
import MyLocationIcon from '@mui/icons-material/MyLocation'
import { blackColor } from 'configs/styles/muiThemes'

function AddressContactDetailsCard() {
  return (
    <>
      <Box mx={3} mt={4}>
        <Box mb={2}>
          <Typography
            variant='h6'
            fontWeight={600}
            fontSize={{ xs: '15px', md: '20px' }}
          >
            Address Detail
          </Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box
              display='flex'
              alignItems='center'
              cursor='pointer'
              sx={{ backgroundColor: '#f5f6f8', color: '162bb4', cursor:'pointer' }}
            >
              <IconButton>{<MyLocationIcon />}</IconButton>
              <Typography variant='h6' fontWeight={600} color='162bb4'>
                Choose Current Location
              </Typography>
            </Box>
            <Box>
              {' '}
              <Box display='flex' mt={2}>
                <Typography
                  display='flex'
                  variant='h6'
                  fontWeight={500}
                  color={blackColor}
                >
                  Business Type
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
                  placeholder='e.g. puru'
                  pl={2}
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              display='flex'
              alignItems='center'
              sx={{ backgroundColor: '#f5f6f8', color: '162bb4', cursor:'pointer' }}
            >
              <IconButton>{<MyLocationIcon />}</IconButton>
              <Typography variant='h6' fontWeight={600} color='162bb4'>
                Choose Current Location
              </Typography>
            </Box>
            <Box>
              {' '}
              <Box display='flex' mt={2}>
                <Typography
                  display='flex'
                  variant='h6'
                  fontWeight={500}
                  color={blackColor}
                >
                  Business Type
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
                  placeholder='e.g. puru'
                  pl={2}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box mx={3} mt={2} mb={2}>
        <Box mb={2}>
          <Typography
            variant='h6'
            fontWeight={600}
            fontSize={{ xs: '15px', md: '20px' }}
          >
            Address Detail
          </Typography>
        </Box>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4} >
              <Box>
                {' '}
                <Box display='flex'>
                  <Typography
                    display='flex'
                    variant='h6'
                    fontWeight={500}
                    color={blackColor}
                  >
                    Business Type
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
                    placeholder='e.g. puru'
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
                    Business Type
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
                    placeholder='e.g. puru'
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
                    Business Type
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
                    placeholder='e.g. puru'
                    pl={2}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  )
}

export default AddressContactDetailsCard
