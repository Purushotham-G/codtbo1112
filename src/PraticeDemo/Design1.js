import { Box, Button, Container, Grid, Typography } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

import React from 'react'
import { blackColor, whiteColor } from 'configs/styles/muiThemes'

function Design1() {
  return (
    <Box sx={styles.headerSection}>
      <Container sx={{ maxWidth: '1300px !important' }}>
        <Grid container>
          <Grid item md={6} xs={12}>
            <Box>
              <Box
                component='img'
                src='/./assets/images/logo_footer.png'
                alt='costbo logo'
                width='212px'
                height='auto'
              />
              <Typography variant='h3' fontSize={40} mt='40px' mb='20px !important' lineHeight='58px'>
                Enjoy a whole new shopping experience
              </Typography>
              <Typography variant='subtitle2' fontSize={20} pr='30%' mt='40px' mb='24px !important' lineHeight='38px'>
                India's leading Direct to Consumer (D2C) network for Brands &
                Stores
              </Typography>
              <Button
                variant='contained'
                disableElevation
                onClick={() => {}}
                endIcon={<ArrowForwardIcon fontSize='small' mt='40px' />}
              >
                shop@costbo.com
              </Button>
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box display={{ xs: 'none', md: 'flex' }} alignItems="flex-end">
              <Box
                component='img'
                src='/./assets/images/shop-banner1.jpg'
                alt='shop banner 1'
                width='220px'
                height='auto'
                borderRadius='25px'
                mr={1.5}
              />
              <Box
                component='img'
                src='/./assets/images/shop-banner.jpg'
                alt='shop bannner 2'
                width='409px'
                height='auto'
                borderRadius='25px'
                ml='1.5'
              ></Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Design1

const styles = {
  headerSection: {
    height: '700px',
    background: 'url(./assets/images/home-bg.png) no-repeat center',
    backgroundSize: '100% 100%',
    backgroundColor: 'transparent',
    paddingTop: '100px',
    mb:'30px'
  },

  actionBtn:{
    fontSize:'15px',
    textTransform :"none",
    '&:hover' : {
      backgroundColor: whiteColor,
      color: blackColor,
    }
  }
}
