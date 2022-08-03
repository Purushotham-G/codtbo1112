import {
  Box,
  Container,
  Grid,
  Stack,
  TextareaAutosize,
  TextField,
  Typography,
} from '@mui/material'
import { fontSize } from '@mui/system'
import { blackColor, whiteColor } from 'configs/styles/muiThemes'
import React from 'react'

function BusinessDetailsCard() {
  return (
    <Box mx={3} mt={4}>
      <Typography
        variant='h6'
        fontWeight={600}
        fontSize={{ xs: '15px', md: '20px' }}
      >
        Business Details
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8} mt={2}>
          <Box>
            <Box display='flex'>
              <Typography
                display='flex'
                variant='h6'
                fontWeight={500}
                color={blackColor}
              >
                Brand Name (or) Business Name
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
            <Box>
              <Box display='flex'>
                <Typography
                  display='flex'
                  variant='h6'
                  fontWeight={500}
                  color={blackColor}
                >
                  Business Description
                </Typography>
                <Typography color='#ff485f' mx={1}>
                  *
                </Typography>
              </Box>
              <TextareaAutosize
                minRows={3}
                style={{
                  width: '100%',
                  borderRadius: '4px',
                  fontSize: 13,
                  padding: '6px 12px',
                  border: ' 1px solid #e8ebf1',
                }}
                placeholder='Enter details about your education like result, periods etc'
              />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box display='flex'>
            <Typography
              display='flex'
              variant='h6'
              fontWeight={500}
              color={blackColor}
              pt={1}
            >
              Logo & Business Images
            </Typography>
            <Typography color='#ff485f' mx={1}>
              *
            </Typography>
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
      <Grid container>
        <Grid item xs={12} md={8} mb={2}>
          <Box>
            <Typography variant='h6' fontWeight={600} pb={1}>
              Business Hours
            </Typography>
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
  )
}

export default BusinessDetailsCard
