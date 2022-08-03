import {
  Box,
  Button,
  Container,
  Grid,
  Icon,
  IconButton,
  Typography,
} from '@mui/material'
import { blackColor, whiteColor } from 'configs/styles/muiThemes'
import React from 'react'
import { headerColor } from './Header'
import EmailIcon from '@mui/icons-material/Email'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import { WhatsApp } from '@mui/icons-material'

function Footer() {
  return (
    <>
      <Box backgroundColor={headerColor}>
        <Container sx={{ maxWidth: '1300px !important' }}>
          <Box
            display='flex'
            justifyContent={{ md: 'space-between', xs: 'center' }}
            flexDirection={{ md: 'row', xs: 'column' }}
            alignItems='center'
            gap={1}
            pt={2}
            pb={2}
          >
            <Box
              component='img'
              src='./assets/images/logo.png'
              alt='CostBo'
              width={{ xs: '60%', md: '120px' }}
            />
            <Box
              display='flex'
              justifyContent={{ md: 'space-between', xs: 'center' }}
              alignItems='center'
              flexDirection={{ md: 'row', xs: 'column' }}
              gap={1}
            >
              <Typography variant='h5' fontSize='16px' textAlign='center'>
                Your profitable online journey is just few minutes away!
              </Typography>
              <Button
                variant='contained'
                sx={{
                  backgroundColor: blackColor,
                  color: whiteColor,
                  fontSize: '13px',
                  border: '1px solid blackColor',
                }}
              >
                Start Selling
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* footer social flatform */}

      <Container sx={{ maxWidth: '1300px !important' }}>
        <Box
          display='flex'
          justifyContent={{ xs: 'center', md: 'space-between' }}
          flexDirection={{ xs: 'column', md: 'row' }}
          alignItems='center'
          backgroundColor={whiteColor}
          mt={1}
          mb={1}
        >
          <Box>
            <Typography
              fontSize={{ xs: '13px', md: '16px' }}
              fontWeight={500}
              color={blackColor}
            >
              Any questions/clarifications, we are here to help!
            </Typography>
          </Box>
          <Box display='flex' flexDirection={{xs:'column', md:'row'}}>
            <Box
              display='flex'
              alignItems='center'
              justifyContent='center'
              mr={{ xs: 'none', md: '3' }}
            >
              <IconButton>
                <EmailIcon fontSize='20px' />
              </IconButton>
              <Typography
                variant='h5'
                fontWeight={500}
                fontSize={{ xs: '13px', md: '16px' }}
              >
                ecommerce@costbo.com
              </Typography>
            </Box>
            <Box display='flex' alignItems='center' justifyContent='center'>
              <IconButton>
                <WhatsApp fontSize='20px' />
              </IconButton>
              <Typography
                variant='h6'
                fontWeight={500}
                fontSize={{ xs: '13px', md: '16px' }}
              >
                {' '}
                +91 8088422611
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>

      {/* footer last line */}
      <Box backgroundColor='#f7f7f7' pt={1} pb={1}>
        <Container sx={{ maxWidth: '1300px !important' }}>
          <Typography
            fontSize={{ xs: '13px', md: '15px' }}
            display='flex'
            justifyContent='center'
            alignItems='center'
            textAlign='center'
            fontWeight={500}

          >
            © 2022 CostBo Services Private Ltd, All Rights Reserved.
          </Typography>
        </Container>
      </Box>
    </>
  )
}

export default Footer
