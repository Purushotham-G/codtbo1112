import { Box, Container, Grid, IconButton, Typography } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import React from 'react'
import { Link } from 'react-router-dom'
import { primaryColor, whiteColor } from 'configs/styles/muiThemes'
import StoreIcon from '@mui/icons-material/Store'
import Inventory2Icon from '@mui/icons-material/Inventory2'
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined'
import RedeemOutlinedIcon from '@mui/icons-material/RedeemOutlined'
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined'

export const fontColor = '#ff8339'
export const fontColor1 = '#a2a4a7'
export const fontColor2 = '#f5f6f8'

function BusDetailsSide({ active }) {
  return (
    <Box
      boxShadow='5px 0px 10px 0px rgba(0, 0, 0, 0.04)'
      pr={6}
      pt={2}
      // sx={{ display: { xs: 'none', md: 'flex' } }}
    >
      <Box display='flex' pl={2}>
        <Typography
          variant='h6'
          fontWeight={600}
          fontSize='17px'
          color={fontColor}
        >
          {' '}
          Hello,
        </Typography>
        <Typography variant='h6' fontWeight={600} fontSize='18px'>
          {' '}
          Purushotham
        </Typography>
      </Box>
      <Box
        display='flex'
        alignItems='center'
        component={Link}
        to='/businessDetails'
        gap={2}
        mt={2}
      >
        <IconButton
          sx={{
            backgroundColor:
              active == 'BUSINESS DETAIL' ? fontColor2 : fontColor,
            border:
              active == 'BUSINESS DETAIL'
                ? '1px solid #a2a4a7'
                : '1px solid fontColor',
          }}
        >
          {
            <StoreIcon
              sx={{
                color: active == 'BUSINESS DETAIL' ? fontColor1 : whiteColor,
                fontSize: '18px',
              }}
            />
          }{' '}
        </IconButton>
        <Typography
          fontSize='15px'
          sx={{
            cursor: 'pointer',
            color: active == 'BUSINESS DETAIL' ? fontColor1 : fontColor,
          }}
        >
          BUSINESS DETAIL
        </Typography>
      </Box>
      <Box>
        <Box display='flex' alignItems='center' gap={2} mt={2}>
          <IconButton
            sx={{
              backgroundColor:
                active == 'BUSINESS DETAIL' ? fontColor2 : fontColor,
              border:
                active == 'BUSINESS DETAIL'
                  ? '1px solid #a2a4a7'
                  : '1px solid fontColor',
            }}
          >
            {
              <Inventory2Icon
                sx={{
                  color: active == 'BUSINESS DETAIL' ? fontColor1 : whiteColor,
                  fontSize: '18px',
                }}
              />
            }{' '}
          </IconButton>
          <Typography color={fontColor1} fontSize='15px'>
            PRODUCT DETAILS
          </Typography>
        </Box>
        <Box display='flex' ml={2}>
          <Typography color={fontColor1} fontSize='15px' mx={1}>
            1
          </Typography>
          <Typography color={fontColor1} fontSize='15px'>
            ADD OR EDIT PRODUCT
          </Typography>
        </Box>
        <Box display='flex' ml={2}>
          <Typography color={fontColor1} fontSize='15px' mx={1}>
            2
          </Typography>
          <Typography color={fontColor1} fontSize='15px'>
            INVENTORY UPDATE
          </Typography>
        </Box>
      </Box>
      <Box display='flex' alignItems='center' gap={2} mt={2}>
        <IconButton
          sx={{
            backgroundColor: fontColor2,
            border: '1px solid #a2a4a7',
          }}
        >
          {
            <InventoryOutlinedIcon
              sx={{
                color: fontColor1,
                fontSize: '18px',
              }}
            />
          }{' '}
        </IconButton>
        <Typography color={fontColor1} fontSize='15px'>
          ECOMMERCE
        </Typography>
      </Box>
      <Box display='flex' alignItems='center' gap={2} mt={2}>
        <IconButton
          sx={{
            backgroundColor: fontColor2,
            border: '1px solid #a2a4a7',
          }}
        >
          {
            <RedeemOutlinedIcon
              sx={{
                color: fontColor1,
                fontSize: '18px',
              }}
            />
          }{' '}
        </IconButton>
        <Typography color={fontColor1} fontSize='15px'>
          ORDER & PROMOTIONS
        </Typography>
      </Box>
      <Box display='flex' alignItems='center' gap={2} mt={2}>
        <IconButton
          sx={{
            backgroundColor: fontColor2,
            border: '1px solid #a2a4a7',
          }}
        >
          {
            <PeopleOutlinedIcon
              sx={{
                color: fontColor1,
                fontSize: '18px',
              }}
            />
          }{' '}
        </IconButton>
        <Typography color={fontColor1} fontSize='15px'>
          SUBSCRIPTION
        </Typography>
      </Box>
      <Box display='flex' alignItems='center' gap={2} mt={2} mb={2}>
        <IconButton
          sx={{
            backgroundColor: fontColor2,
            border: '1px solid #a2a4a7',
          }}
        >
          {
            <ShoppingCartIcon
              sx={{
                color: fontColor1,
                fontSize: '18px',
              }}
            />
          }{' '}
        </IconButton>
        <Typography color={fontColor1} fontSize='15px'>
          CRM
        </Typography>
      </Box>
    </Box>
  )
}

export default BusDetailsSide
