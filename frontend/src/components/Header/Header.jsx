import React, { useState, Fragment } from "react";
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
    IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import LoginIcon from "@mui/icons-material/Login";

export default function Header({ darkMode, handleThemeChange }) {
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        setShowMenu((prev) => !prev));
    };

    const listItems = [
        { text: "Zaloguj sie", icon: <LoginIcon /> },
        { text: "Zarejestruj sie", icon: <HowToRegIcon /> },
    ];

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="primary" enableColorOnDark={true}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={toggleMenu}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
                {listItems.map((anchor) => (
                    <Fragment key={anchor.text}>
                        <SwipeableDrawer
                            onClose={toggleMenu}
                            onOpen={toggleMenu}
                            open={showMenu}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "text.primary",
                                    p: 3,
                                }}
                            >
                                <Typography variant="h5" mr={4} color="text.primary">
                                    Motyw
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
                    </Fragment>
                ))}
            </AppBar>
        </Box>
    );
}