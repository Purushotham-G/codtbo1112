import { Box, Container, Grid, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Google2 = () => {
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
    <Container>
      <Box>
        <Box>
          <Container sx={{ maxWidth: '700px !important', my: 2 }}>
            <Grid container spacing={2}>
              {details?.map((detail) =>
                detail?.brands?.map((brand, i) => {
                  count = count + 1
                  if (count > 8) return

                  return (
                    <Grid item xs={6} md={3}>
                      <Box justifyContent='center' alignItems='center'>
                        <Box
                          component='img'
                          src={brand?.brandLogo}
                          sx={{
                            width: { md: '100px', xs: '90px' },
                            borderRadius: '50%',
                          }}
                          my={1}
                          
                          
                        />
                        <Typography
                          component='h6'
                          display='flex'
                          justifyContent={'center'}
                          alignItems='center'
                        >
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
      </Box>
    </Container>
  )
}
