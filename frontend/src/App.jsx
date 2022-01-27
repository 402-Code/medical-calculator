import React from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import History from "./components/History/History";
import NewDragScreen from "./components/NewDragScreen/NewDragScreen";

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
  // Temporary drug
  const drugJson = {
    "medication": "ibuprofen",
    "min_access_age_in_months": 3,
    "weight_based_calculations": {
      "dose_per_1kg": {
        "amount": 20,
        "unit": "mg"
      },
      "max_daily_dose": [
        {
          "age_form-to_in_month": [3, 12],
          "max_per_1kg": 40,
          "unit": "mg"
        },
        {
          "age_form-to_in_month": [13, 24],
          "max_per_1kg": 50,
          "unit": "mg"
        }
      ]
    },
    "age_based_calculations": {
      "dose_per_age": [
        {
          "age_form-to_in_month": [3, 6],
          "amount": 11.5,
          "unit": "mg"
        },
        {
          "age_form-to_in_month": [7, 12],
          "amount": 11.5,
          "unit": "mg"
        }
      ],
      "max_daily_dose": [
        {
          "age_form-to_in_month": [3, 12],
          "max_per_age": 200,
          "unit": "mg"
        },
        {
          "age_form-to_in_month": [13, 24],
          "max_per_age": 300,
          "unit": "mg"
        }
      ]
    },
    "dose_interval_in_hours": 6,
    "max_application_days": 7,
    "way_of_application": "Podawanie roztworu doustnie, za pomocą za pomocą zakraplacza dołączonego do opakowania",
    "contraindications": "Przeciwwskazany w ospie wietrznej (zwiększa ryzyko nadkażeń bakteryjnych)"
  }
  const drug = JSON.parse(JSON.stringify(drugJson));

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NewDragScreen kids={TEMP_KIDS} drug={drug} />} />
        <Route path="/addkid" element={<Profile kids={TEMP_KIDS} />} />
        <Route path="/edit/:name" element={<Profile kids={TEMP_KIDS} />} />
        <Route path="/history/:name" element={<History kids={TEMP_KIDS} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
