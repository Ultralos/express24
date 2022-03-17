import React from "react";
import {Outlet, Link} from "react-router-dom";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import logo from './logo.png';

const pages = ['Exchange Rate', 'Converter'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];



function MainLayout() {
  
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    console.log('asd')
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
    <AppBar position="static" style={{ background: '#ffec00' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display:'flex'}}
            
          >
            <img alt="express 24" src={logo} />
          </Typography>

          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'space-around' }}>

          <Link to="/exchange-rate" style={{textDecoration: 'none' }}>
              <Button
                key='Exchange Rate'
                style={{ my: 2, color: 'black', display: 'block'}}
              >
                Exchange Rate
              </Button>
            </Link>
            <Link to="/converter" style={{textDecoration: 'none' }}>
              <Button
                key='Converter'
                style={{ my: 2, color: 'black', display: 'block'}}
              >
                Converter
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    <Outlet />
    </>
  );
}

export default MainLayout;
