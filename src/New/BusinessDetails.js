import {
  Box,
  Container,
  Grid,
  IconButton,
  Switch,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'
import BusinessDetailsCard from './BusinessDetailsCard'
import HorizontalStepper from './HorizontalStepper'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Link } from 'react-router-dom'
import AddressContactDetailsCard from './AddressContactDetailsCard'
import BusDetailsSide from './BusDetailsSide'
import Header from './Header'
import Footer from './Footer'
import BusinessProductTypeCard from './BusinessProductTypeCard'
import BannerImagesCard from './BannerImagesCard'
import TaxGstDetailsCard from './TaxGstDetailsCard'

export const fontColor = '#ff8339'
export const fontColor1 = '#a2a4a7'

function BusinessDetails() {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    'Business Detail',
    'Address & Contact Detail',
    'Banner Image',
    'Business & Product Type',
    'Tax & GST Details',
  ]
  const getActiveComponent = () => {
    switch (activeStep) {
      case 0:
        return <BusinessDetailsCard />
      case 1:
        return <AddressContactDetailsCard />
      case 2:
        return <BannerImagesCard />
      case 3:
        return <BusinessProductTypeCard />
      case 4:
        return <TaxGstDetailsCard />
      default:
        return <> Invalid </>
    }
  }

  return (
    <>
      <Header />
      <Box>
        <Container sx={{ maxWidth: '1300px !important' }}>
          <Grid container>
            <Grid item md={3}>
              <BusDetailsSide />
            </Grid>
            <Grid item xs={12} md={9}>
              <HorizontalStepper
                steps={steps}
                activeStep={activeStep}
                stepClicked={(data) => setActiveStep(data)}
              />
              {getActiveComponent()}
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer />
    </>
  )
}

export default BusinessDetails
