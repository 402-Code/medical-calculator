import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
  Switch,
  IconButton
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LoginIcon from '@mui/icons-material/Login';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './Header.scss';

export default function Header({ darkMode, handleThemeChange }) {
  const [showMenu, setShowMenu] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handlePreviousPage = (e) => {
    e.preventDefault();
    navigate('/');
  };

  const toggleMenu = (e) => {
    if (pathname === '/') setShowMenu((prev) => !prev);
    else {
      handlePreviousPage(e);
    }
  };

  const listItems = [
    { text: 'Zaloguj sie', icon: <LoginIcon /> },
    { text: 'Zarejestruj sie', icon: <HowToRegIcon /> }
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary" enableColorOnDark sx={{ boxShadow: 'none' }}>
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={toggleMenu}>
            {pathname === '/' ? <MenuIcon /> : <ArrowBackIcon />}
          </IconButton>
        </Toolbar>
        <SwipeableDrawer onClose={toggleMenu} onOpen={toggleMenu} open={showMenu}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'text.primary',
              pt: 3,
              pb: 1,
              px: 2
            }}
          >
            <Typography variant="h6" mr={1} color="text.primary">
              Ciemny motyw
            </Typography>
            <Switch checked={darkMode} onChange={handleThemeChange} />
          </Box>
          <List>
            {listItems.map((item) => (
              <ListItem key={item.text}>
                <ListItemText primary={item.text} />
                <ListItemIcon>{item.icon}</ListItemIcon>
              </ListItem>
            ))}
          </List>
        </SwipeableDrawer>
      </AppBar>
      {/* {params} */}
    </Box>
  );
}
