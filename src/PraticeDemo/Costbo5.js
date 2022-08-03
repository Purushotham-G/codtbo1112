import { Box, Container, Modal } from '@mui/material'
import React, { useState } from 'react'
import Costbo6 from './Costbo6'

function Costbo5() {

    const [open, setOpen] = useState(false)
  return (
    <Container sx={{maxWidth:'1300px !important'}}>
        <Box>
            <Modal anchor='left' open={ open } onClose={()=>setOpen(false)}>
                <Costbo6 onCloseClick={()=>setOpen(false)} />
            </Modal>
        </Box>
    </Container>
  )
}

export default Costbo5