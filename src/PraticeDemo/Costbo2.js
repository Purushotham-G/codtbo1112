import {
  AppBar,
  Avatar,
  Box,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import LocalMallIcon from '@mui/icons-material/LocalMall'
import React, { useEffect, useState } from 'react'
import { navBarBorderColor, whiteColor } from 'configs/styles/muiThemes'
import { Search } from '@mui/icons-material'
import Costbo3 from './Costbo3'
import axios from 'axios'
import { setSyntheticTrailingComments } from 'typescript'

function Costbo2() {
  
  const [location, setLocation] = useState({
    loaded: false,
    coordinates: { lat: '', lng: '' },
  })

  const onSuccess = (location) => {
    setLocation({
      loaded : true,
      coordinates:{
        lat : location.coords.latitude,
        lng : location.coords.longitude,
      },
    })
  }
  const onError = () => {}

  useEffect(() => {
    if (!('geolocation' in navigator)) {
      onError({
        code: 0,
        message: 'Geolocation not supported',
      },)
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError)
  }, [])

  const [search, setSearch] = useState('')
  const [array, setArray] = useState([])
  return (
    <>
      <AppBar
        sx={{
          boxShadow: 4,
          background: whiteColor,
          boxShadow: 'none !important',
          borderBottom: '2px solid ' + navBarBorderColor,
        }}
        position='sticky'
      >
        <Container sx={{ maxWidth: '1300px !important' }}>
          <Box
            display='flex'
            my={2}
            alignItems='center'
            justifyContent='center'
          >
            <Grid container spacing={3}>
              <Grid item xs='6' md='6'>
                <Box display='flex' justifyContent='space-between'>
                  <Box display='flex'>
                    <IconButton>
                      <MenuIcon position='start' background=' whiteColor' />
                    </IconButton>
                    <Box>
                      <Box
                        component='img'
                        sx={{
                          cursor: 'pointer',
                          width: { md: '250px', xs: '120px' },
                        }}
                        src='./assets/images/logo_v3.png'
                      ></Box>
                    </Box>
                  </Box>

                  <Box my={2}>
                    <TextField
                      label='Search product'
                      size='small'
                      variant='outlined'
                      sx={{
                        width: '300px',
                        display: { xs: 'none', md: 'flex' },
                      }}
                      onChange={(e) => setSearch(e.target.value)}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment>
                            {
                              <SearchIcon
                                onClick={() => {
                                  axios
                                    .get(
                                      `https://web.costbo.com/search-service/api/v1/costbo/psearch?key=${search}&lat=12.89599&lon=77.5582&page=0`
                                    )
                                    .then((res) => {
                                      console.log('result', res)
                                      setArray(res?.data?.details)
                                    })
                                    .catch((error) => {
                                      console.log(error)
                                    })
                                }}
                                position='end'
                                sx={{ display: { xs: 'flex' } }}
                                cursor='pointer'
                              />
                            }
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Box>
                </Box>
              </Grid>
              <Grid item xs='6' md='6'>
                <Box display='flex' justifyContent='space-between'>
                  <Box my={2}>
                    <TextField
                      label='location'
                      size='small'
                      sx={{
                        width: '300px',
                        display: { xs: 'none', md: 'flex' },
                        my: '2',
                      }}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment>
                            {<SearchIcon position='end' />}
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Box>
                  <Box display='flex' alignItems='center'>
                    <Avatar
                      style={{ border: '1px solid black', color: 'black' }}
                    />
                    <Typography
                      variant='h6'
                      ml='5px'
                      sx={{ display: { xs: 'none', md: 'flex' } }}
                    >
                      Purushotham
                    </Typography>
                    <IconButton>{<KeyboardArrowDownIcon />}</IconButton>
                  </Box>
                  <IconButton>{<LocalMallIcon size='medium' />}</IconButton>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </AppBar>
      <Box>
        {array?.map((item, i) => {
          return (
            <Box>
              <Typography>{item?.productName}</Typography>
            </Box>
          )
        })}
      </Box>
    </>
  )
}

export default Costbo2
