import { Box ,styled, Typography } from '@mui/material'
import React from 'react'
import { navData } from '../../constants/Data'

const NavbarBox = styled(Box)(({theme}) => ({ 
  display: 'flex',
  justifyContent: 'space-between',
  overflow: 'overlay',
  margin: '65px 130px 0 130px',
  [theme.breakpoints.down('lg')]:{
    margin:0
  }
}));

const Container = styled(Box)`
 padding:12px 8px;
 text-align: center;
`;

const Text = styled(Typography)`
  font-size: 14px;
  font-weight: 500;
  font-family: inherit;
`;

const Navbar = () => {
  return (
    <NavbarBox>
      {
        navData.map(data =>(
          <Container key={data.text}>
            <img src={data.url}  alt="nav" style={{width: 64}}/>
            <Text>{data.text}</Text>
          </Container>
        ))
      }
    </NavbarBox>
  )
}

export default Navbar