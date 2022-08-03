import { Box, Typography } from '@mui/material'
import Slider from "react-slick";

function SlackSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 2000,
  }
  return (
    <Box>
        <Typography>hello welcome to Slack Slider</Typography>
      <Slider {...settings}>
          <Box width='250px' height='200' textAlign='center' sx={{backgroundColor:'red'}}>
            <Typography variant='h5'>1</Typography>
            </Box>
            <Box width='250px' height='200' textAlign='center' sx={{backgroundColor:'yellow'}}>
            <Typography variant='h5'>2</Typography>
            </Box>
            <Box width='250px' height='200' textAlign='center' sx={{backgroundColor:'green'}}>
            <Typography variant='h5'>3</Typography>
            </Box>
            <Box width='250px' height='200' textAlign='center' sx={{backgroundColor:'light-grey'}}>
            <Typography variant='h5'>4</Typography>
            </Box>
            <Box width='250px' height='200' textAlign='center' sx={{backgroundColor:'blue'}}>
            <Typography variant='h5'>5</Typography>
            </Box>
            
      </Slider>
    </Box>
  )
}

export default SlackSlider
