import React from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import KidSelect from "./components/KidSelect/KidSelect";
import Profile from "./components/Profile/Profile";
import History from "./components/History/History";

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

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h3>Just checking if App works</h3>} />
        <Route path="/kidselect" element={<KidSelect kids={TEMP_KIDS} />} />
        <Route path="/addkid" element={<Profile kids={TEMP_KIDS} />} />
        <Route path="/edit/:name" element={<Profile kids={TEMP_KIDS} />} />
        <Route path="/history/:name" element={<History kids={TEMP_KIDS} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
