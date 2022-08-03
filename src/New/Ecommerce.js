import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from '@mui/material'
import { blackColor, whiteColor } from 'configs/styles/muiThemes'
import React from 'react'
import { headerColor } from './Header'

function Ecommerce() {
  return (
    <>
      <Box sx={styles.backImg}>
        <Container sx={{ maxWidth: '1300px !important' }}>
          <Box>
            <Grid container>
              <Grid
                item
                xs={12}
                md={6}
                display='flex'
                alignItems='center'
                justifyContent='center'
              >
                <Box lineHeight={1.5} mt={4}>
                  <Typography
                    component='h4'
                    fontWeight={600}
                    color=''
                    sx={{
                      fontSize: { xs: '18px', md: '28px' },
                      lineHeight: '1.5',
                    }}
                  >
                    Simplified, Managed
                  </Typography>
                  <Typography
                    component='h4'
                    fontWeight={600}
                    sx={{ fontSize: { xs: '18px', md: '28px' } }}
                    lineHeight={2}
                  >
                    Direct to Consumer (D2C) eCommerce
                  </Typography>
                  <Typography
                    component='h4'
                    fontWeight={600}
                    sx={{ fontSize: { xs: '18px', md: '28px' } }}
                    lineHeight={1.5}
                  >
                    for Brands and Manufacturers
                  </Typography>
                  <Box display='flex' mt={2}>
                    <Box
                      sx={{
                        backgroundColor: whiteColor,
                        border: '1px solid blackColor',
                        width: { xs: '180px',md:'220px' },
                      }}
                      display='flex'
                      alignItems='center'
                      justifyContent='center'
                      borderRadius='5px 0px 0px 5px'
                    >
                      <TextField
                        variant='standard'
                        InputProps={{ disableUnderline: true }}
                        placeholder='Enter the phone Number'
                      />
                    </Box>
                    <Button
                      variant='conatined'
                      fontSize='15px'
                      fontWeight={600}
                      border='1px solid blackColor'
                      sx={{
                        backgroundColor: blackColor,
                        color: whiteColor,
                        '&hover': {
                          background: headerColor,
                          color: blackColor,
                        },
                      }}
                    >
                      start Selling
                    </Button>
                  </Box>
                  <Box display='flex' mt={2} mb={2}>
                    <Box
                      component='img'
                      src='./assets/images/cloud.png'
                      alt='trusted- business owners'
                    />
                    <Typography component='h6' fontWeight={600}>
                      Trusted by 1000s of Business owners
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                display='flex'
                alignItems='center'
                justifyContent='center'
              >
                <Box
                  component='img'
                  src='https://storage.googleapis.com/bodefaults/businessweb/D2C_eCommerce.png'
                  alt='d2c-ecommerce'
                  sx={{
                    display: { xs: 'none', md: 'block' },
                    width: { xs: 'none', md: '95%' },
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default Ecommerce

const styles = {
  backImg: {
    background: 'url(./assets/images/banner_bg.jpg)  no-repeat center center',
    backgroundSize: '100% 100%',
    backgroundColor: 'transparent',
  },
}
