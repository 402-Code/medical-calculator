import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { KidProvider } from "./context/KidConext";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import "normalize.css";
import "./App.scss";
import Profile from "./components/Profile/Profile";
import History from "./components/History/History";
import NewDragScreen from "./components/NewDragScreen/NewDragScreen";
import RequireAgreement from "./components/Agreement/RequireAgreement";
import Header from "./components/Header/Header";
import TEMP_KIDS from "./components/mocks/tempKids";
import TEMP_DRUG from "./components/mocks/tempDrug.json"

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
  })
  
  // Temporary drug
  const drug = JSON.parse(JSON.stringify(TEMP_DRUG));

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };
  return (
    <ThemeProvider theme={theme}>
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
      <RequireAgreement>
      <KidProvider>
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<NewDragScreen kids={TEMP_KIDS} drug={drug} />} />
            <Route path="/addkid" element={<Profile kids={TEMP_KIDS} />} />
            <Route path="/edit/:name" element={<Profile kids={TEMP_KIDS} />} />
            <Route
              path="/history/:name"
              element={<History kids={TEMP_KIDS} />}
            />
          </Routes>
        </BrowserRouter>
        </KidProvider>
      </RequireAgreement>
    </ThemeProvider>
  );
}

export default App;
