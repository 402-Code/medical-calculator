import React, { useState, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChildProvider } from "./context/ChildContext";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import "normalize.css";
import RequireAgreement from "./components/Agreement/RequireAgreement";
import Profile from "./components/Profile/Profile";
import History from "./components/History/History";
import NewDragScreen from "./components/NewDragScreen/NewDragScreen";
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
  const selectedDrug = useRef();
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
              <Route path="/" element={<NewDragScreen selectedDrug={selectedDrug} />} />
              <Route path="/addkid" element={<Profile />} />
              <Route path="/edit/:kidname" element={<Profile />} />
              <Route
                path="/history/:kidname"
                element={<History selectedDrug={selectedDrug} />}
              />
            </Routes>
          </BrowserRouter>
        </ChildProvider>
      </RequireAgreement>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
