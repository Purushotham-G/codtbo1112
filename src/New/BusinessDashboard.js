import { Box, Container, Grid, IconButton, Typography } from '@mui/material'
import { headingColor } from 'configs/styles/muiThemes'
import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Link } from 'react-router-dom'
import BusDetailsSide from './BusDetailsSide'
import Header from './Header'
import Footer from './Footer'

export const fontColor = '#ff8339'
export const fontColor1 = '#a2a4a7'

function BusinessDashboard() {
  return (
    <>
      <Header />
      <Box>
        <Container sx={{ maxWidth: '1300px !important' }}>
          <Grid container>
            <Grid
              item
              xs={12}
              md={3}
              sx={{ display: { xs: 'none', md: 'flex' } }}
            >
              <BusDetailsSide
                active='BUSINESS DETAIL'
               
              />
            </Grid>
            <Grid item xs={12} md={9}>
              <Box>
                <Box display='flex' alignItems='center' justifyContent='center'>
                  <Box component='img' src='./assets/images/verify.png' />
                </Box>
                <Box
                  display='flex'
                  flexDirection='row'
                  justifyContent='center'
                  alignItems='center'
                  mb={2}
                >
                  <Typography
                    variant='h6'
                    fontWeight={600}
                    sx={{ fontSize: { xs: '15px', md: '21px' } }}
                  >
                    HELLO WELCOME ,
                  </Typography>
                  <Typography
                    variant='h6'
                    fontWeight={600}
                    color={fontColor}
                    sx={{ fontSize: { xs: '15px', md: '21px' } }}
                  >
                    PURUSHOTHAM
                  </Typography>
                </Box>
                <Box
                  display='flex'
                  justifyContent='center'
                  alignItems='center'
                  flexDirection={{ xs: 'column', md: 'row' }}
                  mb={2}
                >
                  <Typography
                    fontWeight={500}
                    fontSize={{ xs: '13px', md: '16px' }}
                  >
                    Verification Email has been sent to your Email at{' '}
                  </Typography>
                  <Box display='flex'>
                    <Typography
                      color={fontColor}
                      fontSize={{ xs: '13px', md: '16px' }}
                    >
                      Purushu1995@gmail.com
                    </Typography>
                    <Typography fontSize={{ xs: '13px', md: '16px' }}>
                      . Please verify the link.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer />
    </>
  )
}

export default BusinessDashboard
