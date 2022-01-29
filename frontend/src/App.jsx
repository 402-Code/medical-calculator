import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { KidProvider } from "./context/KidConext";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import "normalize.css";
import "./App.scss";
import today from "./utils/today";
import sendGetRequest from "./utils/getRequest";
import getDataVersion from "./utils/getDataVersion";
import RequireAgreement from "./components/Agreement/RequireAgreement";
import KidSelect from "./components/KidSelect/KidSelect";
import Profile from "./components/Profile/Profile";
import History from "./components/History/History";
import Header from "./components/Header/Header";
import TEMP_KIDS from "./components/mocks/tempKids";

let DATA_VERSION = getDataVersion();

function App() {
  const [medicationList, setMedicationList] = useState([]);
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

  useEffect(async () => {
    const data = await sendGetRequest(DATA_VERSION);
    if (data.length === 0) {
      setMedicationList(JSON.parse(localStorage.getItem("medicationList")));
    } else {
      localStorage.setItem("medicationList", JSON.stringify(data));
      DATA_VERSION = { data_version: today };
      localStorage.setItem("data_version", JSON.stringify(DATA_VERSION));
      setMedicationList(data)
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
      <RequireAgreement>
      <KidProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<h3>Just checking if App works</h3>} />
            <Route path="/kidselect" element={<KidSelect kids={TEMP_KIDS} />} />
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
