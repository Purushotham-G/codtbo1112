import { Box, Grid, InputAdornment, TextField, Typography } from '@mui/material'
import { blackColor } from 'configs/styles/muiThemes'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import React from 'react'

function BusinessProductTypeCard() {
  return (
    <Box mx={3} mt={4}>
      <Box>
        <Typography
          variant='h6'
          fontWeight={600}
          fontSize={{ xs: '15px', md: '20px' }}
        >
          Business & Product Type
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
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
              inputProps={{
                endAdornment: (
                  <InputAdornment>
                    {<KeyboardArrowDownIcon position='end' />}
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box display='flex' mt={2}>
            <Typography
              display='flex'
              variant='h6'
              fontWeight={500}
              color={blackColor}
            >
              Main Products
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
              inputProps={{
                endAdornment: (
                  <InputAdornment>
                    {<KeyboardArrowDownIcon position='end' />}
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box display='flex' mt={2}>
            <Typography
              display='flex'
              variant='h6'
              fontWeight={500}
              color={blackColor}
            >
              Business Category
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
              placeholder='select...'
              pl={2}
              inputProps={{
                endAdornment: (
                  <InputAdornment>
                    {<KeyboardArrowDownIcon position='end' />}
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box display='flex' mt={2}>
            <Typography
              display='flex'
              variant='h6'
              fontWeight={500}
              color={blackColor}
            >
              Target Customers
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
              inputProps={{
                endAdornment: (
                  <InputAdornment>
                    {<KeyboardArrowDownIcon position='end' />}
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default BusinessProductTypeCard
