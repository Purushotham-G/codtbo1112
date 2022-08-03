import { StarRounded } from '@mui/icons-material'
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material'
import {
  backgroundColor,
  bannerstarColor,
  primaryColor,
  whiteColor,
} from 'configs/styles/muiThemes'
import Slider from 'react-slick/lib/slider'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

function HomeBanner() {
  const [businessData, setBusinessData] = useState(null)
  useEffect(() => {
    axios
      .get(
        'https://web.costbo.com/business-query-side/api/v1/business/getActiveBusiness/0c62bb59466f4f14a38e16e1bc23dc2a'
      )
      .then((res) => {
        console.log(res.data)
        setBusinessData(res.data)
      })
      .catch((err) => console.log('error', err))
  }, [])
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    arrows: false,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    pauseOnHover: true,
  }

  return (
    <Box sx={styles.homebanner}>
      <Container sx={{ maxWidth: '1300px !important' }}>
        <Grid
          container
          columnSpacing={{ md: 5, xs: 1 }}
          rowSpacing={1}
          alignItems='center'
        >
          <Grid item xs={12} md={5} my='20px'>
            <Box textAlign='center'>
              <Box
                component='img'
                src={businessData?.logoURL}
                width='80px'
                height='80px'
                borderRadius='6px'
              />
            </Box>
            <Typography variant='h5' textAlign='center' my='20px'>
              Welcome To
            </Typography>
            <Typography
              variant='h1'
              fontSize={{ xs: '20px', md: '23px' }}
              textAlign='center'
              my='20px'
            >
              {businessData?.businessName}
            </Typography>
            <Typography
              variant='body1'
              lineHeight='1.5'
              textAlign='center'
              my='20px'
            >
              {businessData?.description}
            </Typography>
            <Box
              display='flex'
              alignItems='center'
              justifyContent='center'
              my='30px'
            >
              <StarRounded
                sx={{ color: bannerstarColor, mr: '5px' }}
              ></StarRounded>
              <Box gap='15px' display='flex'>
                <Typography variant='body1'>0</Typography>
                <Typography variant='body1' fontWeight={500}>
                  &#183;
                </Typography>
                <Typography
                  variant='body1'
                  fontWeight={500}
                  sx={{ textDecoration: 'underline' }}
                >
                  0 review
                </Typography>
                <Typography variant='body1' fontWeight={500}>
                  &#183;
                </Typography>
                <Typography variant='body1' fontWeight={500}>
                  8 followers
                </Typography>
                <Typography variant='body1' fontWeight={500}>
                  &#183;
                </Typography>
                <Typography variant='body1' fontWeight={500}>
                  445 views
                </Typography>
              </Box>
            </Box>
            <Box display='flex' justifyContent='center' my='10px'>
              <Typography
                variant='h5'
                display='inline'
                fontWeight={600}
                fontSize='13px'
                lineHeight='1.5'
              >
                Available Cashback
              </Typography>
              <Typography
                sx={{ cursor: 'pointer', textDecoration: 'underline' }}
                display='inline'
                fontWeight={500}
                fontSize='13px'
                lineHeight='1.5'
                color={primaryColor}
              >
                Login to Check
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={7.8}>
                <Slider {...settings}>
                  {businessData?.documentsURL?.map((item, index) => (
                    <Box
                      component='img'
                      src={item?.docURL}
                      alt='logo1'
                      width={{ md: '530px', xs: '100%' }}
                      height={{ md: '330px', xs: 'calc(100vw - 25vw)' }}
                      borderRadius={{ md: '16px 0 0 16px', xs: '16px' }}
                      sx={{
                        cursor: 'pointer',
                        backgroundColor: whiteColor,
                        objectFit: 'contain',
                      }}
                    />
                  ))}

                  {/* <Box
                    component='img'
                    src='./assets/images/banner_demo_23.jpeg'
                    alt='logo1'
                    textAlign='center'
                    width={{ md: '530px', xs: '100%' }}
                    height={{ md: '330px', xs: 'calc(100vw - 25vw)' }}
                    borderRadius={{ md: '16px 0 0 16px', xs: '16px' }}
                    sx={{
                      cursor: 'pointer',
                      backgroundColor: whiteColor,
                      objectFit: 'contain',
                    }}
                  />
                  <Box
                    component='img'
                    src='./assets/images/banner_demo_23.jpeg'
                    alt='logo1'
                    textAlign='center'
                    width={{ md: '530px', xs: '100%' }}
                    height={{ md: '330px', xs: 'calc(100vw - 25vw)' }}
                    borderRadius={{ md: '16px 0 0 16px', xs: '16px' }}
                    sx={{
                      cursor: 'pointer',
                      backgroundColor: whiteColor,
                      objectFit: 'contain',
                    }}
                  /> */}
                </Slider>
              </Grid>
              <Grid
                item
                md={4.2}
                xs={12}
                sx={{ display: { md: 'flex', xs: 'none' } }}
              >
                <Stack spacing={2}>
                  <Box
                    component='img'
                    borderRadius='0 16px 16px 0'
                    src='./assets/images/catalog-banner-1.png'
                    width='240px'
                    height='156px'
                    sx={{
                      cursor: 'pointer',
                      backgroundColor: whiteColor,
                      objectFit: 'contain',
                    }}
                  />
                  <Box
                    component='img'
                    borderRadius='0 16px 16px 0'
                    src='./assets/images/catalog-banner-1.png'
                    width='240px'
                    height='156px'
                    sx={{
                      cursor: 'pointer',
                      backgroundColor: whiteColor,
                      objectFit: 'contain',
                    }}
                  />
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default HomeBanner

const styles = {
  homebanner: {
    background: backgroundColor,
  },
}
