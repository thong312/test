import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Button, ListItemIcon } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import ContactsIcon from '@mui/icons-material/Contacts';

export default function Navigation() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'left' }}>
          CHARACTERS CARD
        </Typography>
        <Button color="inherit" component={Link} to="/">
          
            <HomeIcon />
         
          Home
        </Button>
        <Button color="inherit" component={Link} to="/about">
          
            <InfoOutlinedIcon />
          
          About Us
        </Button>
        <Button color="inherit" component={Link} to="/news">
          
            <FiberNewIcon />
          
          News
        </Button>
        <Button color="inherit" component={Link} to="/contact">
         
            <ContactsIcon />
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
}
