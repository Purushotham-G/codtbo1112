import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

function BannerImagesCard() {
  return (
    <Box mx={3} mt={4} mb={4}>
        <Box mb={2}>
            <Typography variant='h6' fontWeight={600} fontSize={{xs:'15px', md:'20px'}}>Banner Images</Typography>
        </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} >
          <Box
            fullWidth
            height='180px'
            display='flex'
            alignItems='center'
            justifyContent='center'
            border='1px solid #e8ebf1'
            borderRadius='4px'
            mb={2}
          >
            <Box component='img' src='./assets/images/cloud.png' />
          </Box>
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
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            fullWidth
            height='180px'
            display='flex'
            alignItems='center'
            justifyContent='center'
            border='1px solid #e8ebf1'
            borderRadius='4px'
            mb={2}
          >
            <Box component='img' src='./assets/images/cloud.png' />
          </Box>
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
        </Grid>
      </Grid>
    </Box>
  )
}

export default BannerImagesCard
