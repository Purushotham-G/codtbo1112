import { Box, Container, Grid, Icon, Typography } from '@mui/material'
import React from 'react'
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined'

function Profile() {
  return (
    <>
      <Box sx={{ background: '#f2f2f2' }}>
        <Container sx={{ maxWidth: '1450px !important' }}>
          <Box>
            <Typography fontWeight={600} fontSize='20px' sx={{ color: '#000' }}>
              My Account
            </Typography>
          </Box>
          <Grid container>
            <Grid item md={3}></Grid>
            <Grid item xs={12} md={9}>
              <Box>
                <Typography
                  fontWeight={600}
                  fontSize='20px'
                  sx={{ color: '#000' }}
                >
                  Profile
                </Typography>
                <Typography
                  sx={{ color: '#ababab' }}
                  fontWeight={400}
                  fontSize='14px'
                >
                  Manage your details, view your tier status and change your
                  password
                </Typography>
              </Box>
              <Box sx={{ background: '#fff' }}>
                <Typography
                  fontWeight={600}
                  fontSize='16.5px'
                  sx={{ color: '#000' }}
                >
                  Profile Picture
                </Typography>
                <Box>
                  <Box
                    sx={{
                      display: 'flex',
                      width: '110px',
                      height: '110px',
                      alignItems: 'center',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      justifyContent: 'center',
                      backgroundColor: 'yellow',
                      position: 'relative',
                    }}
                  >
                    <Box component='img' src='./assets/images/p.png' />
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        display: 'flex',
                        justifyContent: 'center',
                        background: 'red',
                        width: '100%',
                        // height: '30px', 
                      }}
                    >
                      <CameraAltOutlinedIcon sx={{ color: '#fff' }} />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default Profile
