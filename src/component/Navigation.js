import * as React from 'react';
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
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';
import { UserAuth } from './AuthContext';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import ContactsIcon from '@mui/icons-material/Contacts';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import MenuIcon from '@mui/icons-material/Menu';

function ResponsiveAppBar() {
  const { user, logOut } = UserAuth();
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" style={{ backgroundColor: 'darkblue' }}>
      <Container maxWidth="xl" color="black">
        <Toolbar disableGutters>
          <Box display="flex" flexGrow={1}>
            <Button color="inherit" component={Link} to="/">
              <MenuIcon />
              <Typography
                variant="h6"
                noWrap
                sx={{
                  mr: 2,
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                  fontSize: '1rem',
                }}
              >
                CHARACTER CARD
              </Typography>
            </Button>

            <Box>
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
            </Box>
          </Box>

          <div>
            {user?.displayName ? (
              <div>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt={user.email} src={user.photoURL} />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">
                      <Link to="/dashboard" style={{ textDecoration: 'none' }}>
                        Dashboard
                      </Link>
                    </Typography>
                  </MenuItem>
                  <MenuItem>
                    <Typography textAlign="center" onClick={handleSignOut}>
                      Logout
                    </Typography>
                  </MenuItem>
                </Menu>
              </div>
            ) : (
              <Link to="/login" style={{ textDecoration: 'none' }}>
                <IconButton color='inherit'>
                  <LoginIcon />
                  Sign In
                </IconButton>
              </Link>
            )}
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
