import { Container, Grid, IconButton, Modal, Typography } from '@mui/material'
import { Box } from '@mui/system'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import React, { useState } from 'react'
import Sidebar from 'components/layout/Sidebar'
import { borderLineColor, whiteColor } from 'configs/styles/muiThemes'

function Costbo6({ onCloseClick }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Container sx={{ maxWidth: '1300px !important' }}>
        <Box
          sx={{
            width: '280px',
            backgroundColor: '#fff',
            height: '100vh !important',
          }}
        >
          <IconButton onClick={() => setOpen(true)} cursor='pointer'>
            <MenuIcon />
          </IconButton>
          <IconButton
            sx={{
              position: 'absolute',
              top: '30px',
              left: '500px',
              zIndex: '10',
            }}
            onClick={() => onCloseClick()}
          >
            <CloseIcon sx={{ color: '#fff' }} />
          </IconButton>
        </Box>
      </Container>
      <Modal anchor='left' open={open} onClose={() => setOpen(false)}>
        <Costbo6 onCloseClick={() => setOpen(false)} />
      </Modal>

      <Box
        borderRadius='10px'
        overflow='hidden'
        maxHeight='90vh'
        sx={{ overflowY: 'auto' }}
      >
        <Grid container>
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              backgroundColor: whiteColor,
              borderRight: '1px solid ' + borderLineColor,
            }}
            py={{ md: 5, xs: 2 }}
          ></Grid>
          <Grid item xs={12} md={7}>

          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Costbo6
