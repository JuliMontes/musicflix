import { Box, CardMedia, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { colorBlack, colorWhite } from '../../UI/variablesStyle'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import { Link } from 'react-router-dom'

const FooterBox = styled(Box)(({ theme }) => ({
  width: '100%',
  background: `${colorBlack}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  padding: '1rem 0',
  flexShrink: 0,
  marginTop: 'calc(20% + 30px)',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column'
  }
}))

const FooterImg = styled(CardMedia)(({ theme }) => ({
  margin: '0 auto',
  height: '10%',
  width: '20%',
  paddingTop: '1rem',
  [theme.breakpoints.down('md')]: {
    width: '50%',
    height: '40%'
  }
}))

const FooterText = styled(Typography)(({ theme }) => ({
  color: `${colorWhite}`,
  padding: '1rem'
}))

const BoxLeft = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  width: '25%',
  paddingLeft: '1rem',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    paddingLeft: '0'
  }
}))

const Div = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-evenly',
  width: '100%'
}))

const BoxRight = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  width: '25%',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    alignItems: 'center'
  }
}))

const BoxMedium = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  width: '50%',
  paddingBottom: '1rem',
  [theme.breakpoints.down('sm')]: {
    width: '100%'
  }
}))

function Footer() {
  const social = [
    {
      name: 'WhatsApp',
      icon: <WhatsAppIcon />
    },
    {
      name: 'Linkedin',
      icon: <LinkedInIcon />
    },
    {
      name: 'Github',
      icon: <GitHubIcon />
    }
  ]

  const links = [
    'https://wa.me/573127113190?text=Me%20interesan%20las%20webs%20que%20est%C3%A1s%20desarrollando.',
    'https://www.linkedin.com/in/julian-andres-mg/',
    'https://github.com/JuliMontes'
  ]
  return (
    <>
      <FooterBox component='footer'>
        <BoxLeft>
          <Div>
            {social.map((item, index) => (
              <Link
                key={index}
                to={links[index]}
                target='_blank'
                rel='noopener noreferrer'
                style={{ color: `${colorWhite}` }}>
                {item.icon}
              </Link>
            ))}
          </Div>
        </BoxLeft>
        <BoxMedium>
          <FooterImg
            component='img'
            image='/logo_green.png'
          />
        </BoxMedium>
        <BoxRight>
          <FooterText variant='p'>© Julián Andrés Montes García</FooterText>
        </BoxRight>
      </FooterBox>
    </>
  )
}

export default Footer