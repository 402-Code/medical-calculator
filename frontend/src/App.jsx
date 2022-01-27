import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import KidSelect from "./components/KidSelect/KidSelect";
// import Profile from "./components/Profile/Profile";
import History from "./components/History/History";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import Header from "./components/Header/Header";
import "normalize.css";
import "./App.scss";

function App() {
  // Temporary kids array
  const TEMP_KIDS = [
    {
      name: "Franio",
      birthdate: "02-01-2021",
      weight: 11,
      height: 70,
      gender: "boy",
      bmi: 2,
      avatar: {},
    },
    {
      name: "Maja",
      birthdate: "31-03-2020",
      weight: 14,
      height: 81,
      gender: "girl",
      bmi: 2,
      avatar: {},
    },
  ];

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
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h3>Just checking if App works</h3>} />
          <Route path="/kidselect" element={<KidSelect kids={TEMP_KIDS} />} />
          {/* <Route path="/addkid" element={<Profile kids={TEMP_KIDS} />} /> */}
          {/* <Route path="/edit/:name" element={<Profile kids={TEMP_KIDS} />} /> */}
          <Route path="/history/:name" element={<History kids={TEMP_KIDS} />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
