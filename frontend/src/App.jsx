import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChildProvider } from "./context/ChildContext";
import { createTheme, Paper } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import "normalize.css";
import RequireAgreement from "./components/Agreement/RequireAgreement";
import KidSelect from "./components/KidSelect/KidSelect";
import Profile from "./components/Profile/Profile";
import History from "./components/History/History";
import Header from "./components/Header/Header";
import TEMP_DRUG from "./components/mocks/tempDrug.json";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const paletteType = darkMode ? "dark" : "light";
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === "light" ? "#eaeaea" : "#202020",
      },
      primary: {
        main: "#1976d2",
      },
    },
  });
  const drug = JSON.parse(JSON.stringify(TEMP_DRUG));
  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RequireAgreement>
        <ChildProvider>
          <BrowserRouter>
            <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
            <Routes>
              <Route path="/kidselect" element={<KidSelect />} />
              <Route path="/addkid" element={<Profile />} />
              <Route path="/edit/:kidname" element={<Profile />} />
              <Route
                path="/history/:kidname"
                element={<History drug={drug} />}
              />
            </Routes>
          </BrowserRouter>
        </ChildProvider>
      </RequireAgreement>
    </ThemeProvider>
  );
}

export default App;
