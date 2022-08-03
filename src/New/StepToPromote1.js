import { Box, Container, Grid, Typography } from '@mui/material'
import { style } from '@mui/system'
import {
  backgroundWhite,
  backNumColor,
  blackColor,
  stepWordColor,
  whiteColor,
  wordColor,
} from 'configs/styles/muiThemes'
import React from 'react'

function StepToPromote1({ title, slNo, data, img, reverse }) {
  return (
    <Box
      sx={{ backgroundColor: reverse ? '#fff' : backgroundWhite }}
      pt={4}
      pb={4}
    >
      <Container sx={{ maxWidth: '1300px !important' }}>
        <Box>
          <Grid
            container
            alignItems='center'
            justifyContent='center'
            display='flex'
            flexDirection={reverse ? 'row-reverse' : 'row'}
          >
            <Grid item xs={12} md={6} alignItems='center'>
              <Box>
                <Typography
                  fontWeight={600}
                  sx={{ fontSize: { xs: 18, md: 28 }, color: blackColor }}
                  lineHeight={1.5}
                >
                  {title}
                </Typography>
              </Box>
              {data.map((item, index) => {
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
                      <Typography fontSize='13px'>{index + 1}</Typography>
                    </Box>
                    <Typography
                      component='body2'
                      fontSize='16px'
                      fontWeight={500}
                      color={stepWordColor}
                      ml={2}
                    >
                      {item}
                    </Typography>
                  </Box>
                )
              })}
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid
                container
                alignItems='center'
                justifyContent='center'
                display='flex'
                flexDirection={reverse ? 'row-reverse' : 'row'}
              >
                <Grid item md={3}>
                  <Typography
                    sx={{
                      color: wordColor,
                      display: { xs: 'none', md: 'flex' },
                    }}
                    fontSize='80px'
                    fontWeight={500}
                  >
                    {slNo}
                  </Typography>
                </Grid>
                <Grid item md={9}>
                  <Box
                    component='img'
                    src={img}
                    alt='Influencers & Affiliates Network'
                    sx={{ width: { xs: '100%', md: '85%' } }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

export default StepToPromote1

const styles = {
  // backgroundColor :{ backgroundWhite},
  footer: {},
}
