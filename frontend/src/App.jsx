import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChildProvider } from "./context/ChildContext";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import "normalize.css";
import "./App.scss";
import RequireAgreement from "./components/Agreement/RequireAgreement";
import KidSelect from "./components/KidSelect/KidSelect";
import Profile from "./components/Profile/Profile";
import History from "./components/History/History";
import Header from "./components/Header/Header";
import TEMP_KIDS from "./components/mocks/tempKids";

function App() {
  const [darkMode, setDarkMode] = useState(true);
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
      <RequireAgreement>
      <ChildProvider>
        <BrowserRouter>
          <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
          <Routes>
            <Route path="/" element={<h3>Just checking if App works</h3>} />
            <Route path="/kidselect" element={<KidSelect />} />
            <Route path="/addkid" element={<Profile kids={TEMP_KIDS} />} />
            <Route path="/edit/:name" element={<Profile kids={TEMP_KIDS} />} />
            <Route
              path="/history/:name"
              element={<History kids={TEMP_KIDS} />}
            />
          </Routes>
        </BrowserRouter>
        </ChildProvider>
      </RequireAgreement>
    </ThemeProvider>
  );
}

export default App;
