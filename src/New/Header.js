import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import React from 'react'
import { backNumColor, blackColor, whiteColor } from 'configs/styles/muiThemes'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom'
import Ecommerce from './Ecommerce';
import Footer from './Footer';

export const headerColor = '#bee1e6'

function Header() {
  return (
    <>
      <Box sx={styles.headers} pt={2} pb={2}>
        <Container sx={{ maxWidth: '1300px !important' }}>
          <Box display='flex' justifyContent='space-between'>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton>{<MenuIcon />} </IconButton>
            </Box>
            <Box component='img' src='./assets/images/logo.png' width={{xs:'none', md:'120px'}} />
            <Box
              sx={{ display: { xs: 'none', md: 'flex' }, fontSize: '14px' }}
              alignItems='center'
              justifyContent='center'
              columnGap={4}
              mx={2}
            >
              <Typography
                variant='subtitle1'
                fontWeight={600}
                fontSize='14px'
                color={blackColor}
                component={Link}
                to={'/howtowork'}
              >
                How It Work
              </Typography>
              <Typography
                variant='subtitle1'
                fontWeight={600}
                fontSize='14px'
                color={blackColor}
                cursor='pointer'
                component={Link}
                to={'/steptopromote'}
              >
                Steps to Promote
              </Typography>
              <Typography
                variant='subtitle1'
                fontWeight={600}
                fontSize='14px'
                color={blackColor}
                component={Link}
                to={'/businessDashboard'}
                cursor='pointer'
              >
                Business Dashboard
              </Typography>
              <Typography variant='subtitle1' fontWeight={600} fontSize='14px'>
                Get CostBo App
              </Typography>
            </Box>
            <Box >
              <IconButton sx={{display:{xs:'flex', md:'none'} }}>{<AccountCircleIcon fontSize='30px' background='blackColor' color='whiteColor' />} </IconButton>
              <Button
                variant='conatined'
                fontSize='14px'
                fontWeight={600}
                border='1px solid blackColor'
                sx={{
                  backgroundColor: blackColor,
                  color: whiteColor,
                  '&hover': {
                    background: headerColor,
                    color: blackColor,
                  },
                  display:{xs:'none', md:'flex'}
                }}
              >
                start Selling
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default Header

const styles = {
  headers: {
    background: headerColor,
    borderBottom: '1px solid rgb(245, 247, 237)',
    // borderBottom : '1px solid blackColor'
    // borderBottom: "0 1px 3px 0px rgb(0 0 0 / 12%)"
  },
  backImg: {
    background: 'url(./assets/images/banner_bg.jpg)  no-repeat center center',
    backgroundSize: '100% 100%',
    backgroundColor: 'transparent',
  },
}
