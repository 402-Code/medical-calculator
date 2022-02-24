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
  SwipeableDrawer,
  Switch,
  IconButton,
  Button,
  Divider
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

  const [deferredPrompt, setDeferredPrompt] = useState(null);
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    setDeferredPrompt(e);
  });

  const install = async () => {
    deferredPrompt.prompt();
    // setDeferredPrompt(null);
  };

  const installButton = () => {
    return (
      <Button variant="contained" sx={{ mx: 4, my: 2 }} onClick={install}>
        Zainstaluj
      </Button>
    );
  };

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

  const handleLogin = () => {};

  const handleRegister = () => {};

  const buttonList = [
    { text: 'Zaloguj się', icon: <LoginIcon />, onClick: handleLogin },
    { text: 'Utwórz konto', icon: <HowToRegIcon />, onClick: handleRegister }
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
              p: 2
            }}
          >
            <Typography variant="h6" mr={1} color="text.primary">
              Ciemny motyw
            </Typography>
            <Switch checked={darkMode} onChange={handleThemeChange} />
          </Box>
          <Divider />
          <List>
            {buttonList.map((btn) => (
              <ListItem key={btn.text}>
                <Button onClick={btn.onClick}>
                  {btn.text}
                  <ListItemIcon sx={{ ml: 2 }}>{btn.icon}</ListItemIcon>
                </Button>
              </ListItem>
            ))}
          </List>
          <Divider />
          {deferredPrompt ? installButton() : null}
        </SwipeableDrawer>
      </AppBar>
      {/* {params} */}
    </Box>
  );
}
