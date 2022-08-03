import { Box, Container, Grid, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { navBarBorderColor, whiteColor } from 'configs/styles/muiThemes'

function Costbo4() {
  const [details, setDetails] = useState([])
  let count = 0

  useEffect(() => {
    axios
      .get(
        `https://web.costbo.com/business-query-side/api/v1/business/getBrands`
      )
      .then((resp) => {
        console.log(resp)
        setDetails(resp.data?.details)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <Container
      sx={{
        maxWidth: '1300px ! important',
        mt:'4'
      }}
    >
      <Box>
        <Container sx={{ maxWidth: '900px !important' }}>
          <Box textAlign='center'>
            <Typography
              variant='h5'
              sx={{ fontSize: { xs: '20px', md: '40px' } }}
            >
              Shop by Category
            </Typography>
          </Box>
          <Grid container>
            {details?.map((detail) =>
              detail?.brands?.map((brand) => {
                count = count + 1
                if (count > 6) return

                return (
                  <Grid item xs={4} md={2} my={4}>
                    <Box
                      sx={{
                        cursor: 'pointer',
                        '&:hover': {
                          backgroundColor: 'whiteColor',
                        },
                      }}
                      textAlign='center'
                    >
                      <Box
                        component='img'
                        src={brand?.brandLogo}
                        justifyContent='center'
                        sx={{
                          width: { xs: '70px', md: '90px' },
                          borderRadius: '50%',
                          boxShadow: '4',
                        }}
                      />
                      <Typography textAlign='center' variant='h5' sx={{fontSize:{xs:'14px', md:'24px'}}} mt={2}>
                        {brand?.businessName}
                      </Typography>
                    </Box>
                  </Grid>
                )
              })
            )}
          </Grid>
        </Container>
      </Box>
    </Container>
  )
}

export default Costbo4
