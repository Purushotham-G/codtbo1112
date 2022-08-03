import {
  Container,
  Divider,
  Drawer,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { Box } from '@mui/system'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'
import React, { useState } from 'react'

export default function MenuBar({ onClickClose }) {
  const [open, setOpen] = useState(false)
  return (
    // <Box sx={{ backgroundColor: 'yellow' }}>
    //   <Container maxWidth={'1300px !important'}>
    //     <Grid container my={2}>
    //       <Grid item xs={12} md={6}>
    //         <Box alignItems='center' justifyContent='center'>
    //           <Stack direction='row'>
    //             <IconButton>
    //               <MenuIcon />
    //             </IconButton>
    //             <Typography
    //               variant='h6'
    //               sx={{ display: { xs: 'none', md: 'flex' } }}
    //               alignItems='center'
    //             >
    //               Menu
    //             </Typography>
    //             <Box
    //               component='img'
    //               alt='logo'
    //               sx={{ display: { xs: 'flex', md: 'none' } }}
    //               src='./assets/images/shop-banner.jpg'
    //               width='60px'
    //               height='60px'
    //               borderRadius='6px'
    //             ></Box>
    //           </Stack>
    //         </Box>
    //       </Grid>
    //       <Grid item xs={12} md={6}>
    //         <Box>
    //           <TextField
    //             variant='filled'
    //             aria-label='search products'
    //             size='small'
    //             style={{borderStyle:'1px solid black'}}
    //             InputProps={{
    //               endAdornment: (
    //                 <InputAdornment>
    //                   {<SearchIcon position='end' />}
    //                 </InputAdornment>
    //               ),
    //             }}
    //           />
    //         </Box>
    //       </Grid>
    //     </Grid>
    //   </Container>
    // </Box>

    <Box>
      <IconButton
        size='large'
        color='inherit'
        edge='start'
        onClick={() => setOpen(true)}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant='h6'>Menu</Typography>
      <Box>
        <Box
          sx={{
            width: '280px',
            backgroundColor: '#fff',
            height: '100vh !important',
          }}
        >
          <IconButton
            sx={{
              position: 'absolute',
              top: '30px',
              left: '250px',
            }}
            onClick={() => setOpen(false)}
          >
            <CloseIcon sx={{ color: '#fff' }} />
          </IconButton>
        </Box>
        <Drawer anchor='left' open={open} onClose={() => setOpen(false)}>
          <Box>
            <Box width='250px' textAlign='center'>
              <Typography>Sidebar</Typography>
              <Divider />
            </Box>
          </Box>
        </Drawer>
      </Box>
    </Box>
  )
}
