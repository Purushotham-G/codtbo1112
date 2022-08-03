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
import Ecommerce from './Ecommerce'
import Footer from './Footer'
import Header from './Header'
import StepToPromote1 from './StepToPromote1'

function StepToPromote() {
  const stepsToPromoteData = [
    {
      videoUrl: '',
      slNo: '01',
      stepData: {
        display: 'Paylink for instant online payments',
        items: ['Instant payments', 'Pickup', 'Pickup', 'Delivery'],
      },
    },
    {
      videoUrl: '',
      slNo: '02',
      stepData: {
        display: 'Customer referrals to reach more',
        items: [
          'Reach 10,000+ customer’s instantly',
          'No papers & Wider Reach',
          'More Brand Visibility',
          'Sell more',
        ],
      },
    },
    {
      videoUrl: '',
      slNo: '03',
      stepData: {
        display: 'Digital coupon code for offers',
        items: [
          'Reach 10,000+ customer’s instantly',
          'No papers & Wider Reach',
          'More Brand Visibility',
          'Sell more',
        ],
      },
    },
    {
      videoUrl: '',
      slNo: '04',
      stepData: {
        display: 'Share catalogs to customers',
        items: [
          'Learn about customer order details',
          'Share catalogs & Deals',
          'Learn about customer interests',
          'Sell more',
        ],
      },
    },
    {
      videoUrl: '',
      slNo: '05',
      stepData: {
        display: 'Use to customer relationship management (CRM) data',
        items: [
          'Learn about customer order details',
          'Share catalogs & Deals',
          'Learn about customer interests',
          'Sell more',
        ],
      },
    },
  ]
  return (
    <>
      <Header />
      <Ecommerce />
      <Box pt={4} pb={2}>
        <Container sx={{ maxWidth: '1300px !important' }}>
          <Box textAlign='center' my={2}>
            <Typography
              fontWeight={600}
              sx={{ fontSize: { xs: 22, md: 32 }, color: blackColor }}
            >
              Steps To Promote & Earn More
            </Typography>
          </Box>
        </Container>
      </Box>
      {stepsToPromoteData.map((data, index) => {
        return (
          <StepToPromote1
            title={data.stepData.display}
            slNo={data.slNo}
            data={data.stepData.items}
            img={'./assets/images/step_1.png'}
            reverse={(index + 1) % 2 == 1}
          />
        )
      })}
      <Footer />
    </>
  )
}

export default StepToPromote
