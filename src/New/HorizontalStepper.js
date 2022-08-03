import * as React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/material/styles'
import Stack from '@mui/material/Stack'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Check from '@mui/icons-material/Check'
import SettingsIcon from '@mui/icons-material/Settings'
import GroupAddIcon from '@mui/icons-material/GroupAdd'
import VideoLabelIcon from '@mui/icons-material/VideoLabel'
import StepConnector, {
  stepConnectorClasses,
} from '@mui/material/StepConnector'
import { Box, Typography } from '@mui/material'
import { primaryColor, whiteColor } from 'configs/styles/muiThemes'
import { red } from '@mui/material/colors'
import CheckRoundedIcon from '@mui/icons-material/CheckRounded'

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
    left: 'calc(-50% + 50px)',
    right: 'calc(50% + 50px)',
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 1,
  },
}))

const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 36,
  height: 36,
  cursor: 'pointer',
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundColor: primaryColor,
    color: whiteColor,
    border: red,
    
  }),
  ...(ownerState.completed && {
    backgroundColor:primaryColor,
  }),
}))

function ColorlibStepIcon(props) {
  const { active, completed, className, iconClicked } = props

  const icons = {
    1: (
      <Box display='flex' alignItems='center' justifyContent='center' onClick={() => iconClicked()}>
        {completed || active ? (
          <CheckRoundedIcon sx={{ color: whiteColor }} />
        ) : (
          <Typography variant='h5' component='p'>
            1
          </Typography>
        )}
      </Box>
    ),
    2: (
      <Box onClick={() => iconClicked()}>
        {completed || active ? (
          <CheckRoundedIcon sx={{ color: whiteColor }} />
        ) : (
          <Typography variant='h5' component='p'>
            2
          </Typography>
        )}
      </Box>
    ),
    3: (
      <Box onClick={() => iconClicked()}>
        {completed || active ? (
          <CheckRoundedIcon sx={{ color: whiteColor }} />
        ) : (
          <Typography variant='h5' component='p'>
            3
          </Typography>
        )}
      </Box>
    ),
    4: (
      <Box onClick={() => iconClicked()}>
        {completed || active ? (
          <CheckRoundedIcon sx={{ color: whiteColor }} />
        ) : (
          <Typography variant='h5' component='p'>
            4
          </Typography>
        )}
      </Box>
    ),
    5: (
      <Box onClick={() => iconClicked()}>
        {completed || active ? (
          <CheckRoundedIcon sx={{ color: whiteColor }} />
        ) : (
          <Typography variant='h5' component='p'>
            5
          </Typography>
        )}
      </Box>
    ),
  }

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  )
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
}

export default function HorizontalStepper({ steps, stepClicked, activeStep }) {
  return (
    <Stack sx={{ width: '100%' }} mt={2}>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<ColorlibConnector />}
      >
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel
              StepIconComponent={(props) =>
                ColorlibStepIcon({
                  ...props,
                  iconClicked: () => stepClicked(index),
                })
              }
            >
              <Typography
                variant='h5'
                component='p'
                fontSize={{ xs: '12px', md: '13px' }}
                fontWeight={500}
                display={{ xs: 'none', md: 'block' }}
                sx={{ cursor: 'pointer' }}
                onClick={() => stepClicked(index)}
              >
                {label}
              </Typography>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
  )
}
