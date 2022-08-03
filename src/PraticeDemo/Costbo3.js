import {Box, Container, Grid, Typography } from '@mui/material'
import Slider from "react-slick";
import React from 'react'
import { settings } from 'configs/Constants';

function Costbo3() {

  const settings ={
    dots : true,
    infinite: true,
    slidesToShow : 1,
    slidesToScrool:3,
    speed:1000,
    autoplay:true,
  }
  return (
    <Container sx={{ maxWidth: '1300px !important'  }}> 

    <Slider {...settings}>
    <Box
        sx={{
          backgroundColor: '#ffebe6',
          height: { xs: '200px', md: '380px' },
        }}
        borderRadius='12px'
        boxShadow='4'
        my={2}
      >
        <Grid container alignItems='center' justifyContent='center'>
          <Grid item md='6' xs='6'>
            <Box sx={{ mx: { xs: 1, md: 5 } }}>
              <Typography
                component='p'
                sx={{
                  fontSize: { xs: '15px', md: '18px' },
                  mt: { xs: 2, md: 'none' },
                }}
                fontWeight='400'
              >
                CostBo
              </Typography>
              <Typography
                variant='h1'
                sx={{
                  fontSize: { xs: '13px', md: '40px' },
                  mt: { xs: 2, md: 2 },
                }}
                lineHeight='1.5'
              >
                Buy online directy from your favourite brands & stores
              </Typography>
              <Typography
                component='h5'
                sx={{
                  fontSize: { xs: '12px', md: '20px' },
                  mt: { xs: 1, md: 2 },
                  lineHeight: 1.5,
                }}
              >
                Discover great products & deals! Enjoy great savings!
              </Typography>
            </Box>
          </Grid>
          <Grid item md='6' xs='6'>
            <Box
              component='img'
              px={4}
              sx={{ width: { xs: '120%', md: '90%' } }}
              src='https://storage.googleapis.com/bodefaults/nweb/webpage/server_Images/web_banner_image_1.png'
              alt='banner1'
            ></Box>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          backgroundColor: '#ffebe6',
          height: { xs: '200px', md: '380px' },
        }}
        borderRadius='12px'
        boxShadow='4'
        my={2}
      >
        <Grid container alignItems='center' flexDirection={'row-reverse'} justifyContent='center'>
          <Grid item md='6' xs='6'>
            <Box sx={{ mx: { xs: 1, md: 5 } }}>
              <Typography
                component='p'
                sx={{
                  fontSize: { xs: '15px', md: '18px' },
                  mt: { xs: 2, md: 'none' },
                }}
                fontWeight='400'
              >
                CostBo
              </Typography>
              <Typography
                variant='h1'
                sx={{
                  fontSize: { xs: '13px', md: '40px' },
                  mt: { xs: 2, md: 2 },
                }}
                lineHeight='1.5'
              >
                Buy Local! Shop From Neighbourhood Stores!
              </Typography>
              <Typography
                component='h5'
                sx={{
                  fontSize: { xs: '12px', md: '20px' },
                  mt: { xs: 1, md: 2 },
                  lineHeight: 1.5,
                }}
              >
                Farm Fresh Vegetables and Fruits, Healthy Snacks & Meals and Daily essentials at your doorstep!
              </Typography>
            </Box>
          </Grid>
          <Grid item md='6' xs='6' my='2' >
            <Box
              component='img'
              px={4}
              sx={{ width: { xs: '120%', md: '90%' } }}
              src='https://storage.googleapis.com/bodefaults/nweb/webpage/server_Images/web_banner_image_2.png'
              alt='banner2'
            ></Box>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          backgroundColor: '#ffebe6',
          height: { xs: '200px', md: '380px' },
        }}
        borderRadius='12px'
        boxShadow='4'
        my={2}
      >
        <Grid container alignItems='center' justifyContent='center'>
          <Grid item md='6' xs='6'>
            <Box sx={{ mx: { xs: 1, md: 5 } }}>
              <Typography
                component='p'
                sx={{
                  fontSize: { xs: '15px', md: '18px' },
                  mt: { xs: 2, md: 'none' },
                }}
                fontWeight='400'
              >
                CostBo
              </Typography>
              <Typography
                variant='h1'
                sx={{
                  fontSize: { xs: '13px', md: '40px' },
                  mt: { xs: 2, md: 2 },
                }}
                lineHeight='1.5'
              >
                Become a Brand Influencer/ Affiliate for 100s of Brands
              </Typography>
              <Typography
                component='h5'
                sx={{
                  fontSize: { xs: '12px', md: '20px' },
                  mt: { xs: 1, md: 2 },
                  lineHeight: 1.5,
                }}
              >
                Earn upto Rs 25,000 per month
              </Typography>
            </Box>
          </Grid>
          <Grid item md='6' xs='6'>
            <Box
              component='img'
              px={4}
              sx={{ width: { xs: '120%', md: '90%' } }}
              src='https://storage.googleapis.com/bodefaults/nweb/webpage/server_Images/web_banner_image_3.png'
              alt='banner3'
            ></Box>
          </Grid>
        </Grid>
      </Box>
    </Slider>
     
    </Container>
  )
}

export default Costbo3
