import { Box, Container, Grid, Typography } from '@mui/material'
import {
  backgroundWhite,
  backNumColor,
  blackColor,
  stepWordColor,
  whiteColor,
} from 'configs/styles/muiThemes'
import React from 'react'
import Ecommerce from './Ecommerce'
import Footer from './Footer'
import Header from './Header'

function HowItIsWork() {
  const keyFeatures = [
    {
      title: 'Tracking',
      description: 'National / Hyper local Logistics & Tracking',
    },
    {
      title: 'Payment integrations',
      description: 'Quick is optimized to work for most devices.',
    },
    {
      title: 'Business Marketing',
      description: 'Webstore WhatsApp & Influencer marketing.',
    },
    {
      title: 'Mobile optimized',
      description: 'Change a few variables and the whole theme adapts.',
    },
    {
      title: 'Built in SEO',
      description: 'All components are built to be used in any combination.',
    },
    {
      title: 'Inventory & Order management',
      description: 'Quick is optimized to work for most devices.',
    },
    {
      title: 'Multiple managers',
      description: 'Remain consistent while developing new features.',
    },
    {
      title: 'Customizable',
      description: 'Change a few variables and the whole theme adapts.',
    },
  ]

  const sellerDashBoard = ['Instant payments', 'Pickup', 'Pickup', 'Delivery']
  return (
    <>
      <Header />
      <Ecommerce />
      <Box>
        <Container sx={{ maxWidth: '1300px !important' }}>
          <Box
            display='flex'
            alignItems='center'
            justifyContent='center'
            mt={2}
            mb={2}
          >
            <Typography
              sx={{
                background: '#ffe3d2',
                color: '#ff7b2c',
                padding: '5px 30px',
                lineHeight: '2',
              }}
              fontWeight={500}
              borderRadius='50px'
              justifyContent='center'
              fontSize='13px'
              display='flex'
            >
              KEY FEATURES FOR COSTBO
            </Typography>
          </Box>
          <Box>
            <Typography
              variant='h4'
              // fontSize='26px'
              color={blackColor}
              fontWeight={600}
              letterSpacing='0.2'
              display='flex'
              justifyContent='center'
              sx={{ fontSize: { md: '26px', xs: '20px' } }}
            >
              How It Works
            </Typography>
          </Box>
          <Box>
            <Grid container spacing={2}>
              {keyFeatures.map((items, index) => (
                <Grid item xs={12} md={3} mt={3}>
                  <Box
                    boxShadow='0 3px 12px 0 rgb(0 0 0 / 5%)'
                    border='1px solid #f2f2f2'
                    borderRadius='12px'
                    p='16px 16px'
                    sx={{
                      '&hover': {
                        transition: ' all .2s ease',
                        background: '#ff7b2c',
                        color: ' #ffffff',
                        willChange: 'transform',
                        boxShadow: '0 1rem 3rem rgba(31,45,61,.125)!important',
                      },
                      cursor: 'pointer',
                    }}
                  >
                    <Typography
                      variant='h5'
                      sx={{
                        fontSize: { xs: '14px', md: '16px' },
                        fontWeight: '500',
                        color: 'blackColor',
                      }}
                    >
                      {items.title}{' '}
                    </Typography>
                    <Typography
                      sx={{
                        xs: '12px',
                        md: '14px',
                        fontWeight: '400',
                        color: '#6c757d',
                      }}
                      mt='12px'
                    >
                      {items.description}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>

      <Box sx={{ backgroundColor: backgroundWhite }} mt={2}>
        <Container sx={{ maxWidth: '1300px !important' }}>
          <Grid
            container
            display='flex'
            alignItems='center'
            justifyContent='center'
          >
            <Grid item xs={12} md={6}>
              <Box>
                <Typography
                  variant='h5'
                  sx={{
                    fontSize: { xs: '20px', md: '28px' },
                    color: blackColor,
                  }}
                >
                  After registering your business Seller dashboard will be
                  available
                </Typography>
              </Box>
              {sellerDashBoard.map((items1, i) => {
                return (
                  <Box display='flex' alignItems='center' mt={3} mb={2}>
                    <Box
                      sx={{
                        background: backNumColor,
                        width: { md: 30, xs: 30 },
                        height: { md: 30, xs: 30 },
                        color: whiteColor,
                        textAlign: 'center',
                      }}
                      borderRadius='50%'
                      display='flex'
                      justifyContent='center'
                      alignItems='center'
                    >
                      <Typography fontSize='13px'>{i + 1}</Typography>
                    </Box>
                    <Typography
                      component='body2'
                      fontSize='16px'
                      fontWeight={500}
                      color={stepWordColor}
                      ml={2}
                    >
                      {items1}
                    </Typography>
                  </Box>
                )
              })}
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component='img'
                src='./assets/images/seller_dashboard.png'
                width={{ xs: '100%', md: '80%' }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box>
        <Grid container>
          <Grid item xs={12} md={4}>
            <Box>
              <Box>
                <Typography></Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Footer />
    </>
  )
}

export default HowItIsWork
