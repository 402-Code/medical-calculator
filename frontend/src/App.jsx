import React, {useState} from "react";
import Button from '@mui/material/Button';
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import Header from './components/Header/Header';
import './App.scss'



function App() {
    const [darkMode, setDarkMode] = useState(false);
    const paletteType = darkMode ? "dark" : "light";
    const theme = createTheme({
        palette: {
            mode: paletteType,
            background: {
                default: paletteType === "ligth" ? "#eaeaea" : "#121212",
            },
            primary: {
                main: "#1976d2",
            },
        },
    });
    const handleThemeChange = () => {
        setDarkMode(!darkMode);
    };
    return (
        <ThemeProvider theme={theme}>
            <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
        </ThemeProvider>
    )
}

export default App;
