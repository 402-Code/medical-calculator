import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const ensureTwoDigits = (value) => (value ? ("0" + value).slice(-2) : "00");

const dayOfTheWeek = ["ND", "PN", "WT", "ŚR", "CZW", "PT", "SB"];

const formatDate = (date) =>
  `${ensureTwoDigits(date.getDate())}.${ensureTwoDigits(date.getMonth() + 1)}`;

const getDays = () => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const today = new Date();

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  const dayBefore = new Date();
  dayBefore.setDate(dayBefore.getDate() - 2);

  return [dayBefore, yesterday, today, tomorrow].map((date) => ({
    day: dayOfTheWeek[date.getDay()],
    date: formatDate(date),
    dateObj: date,
  }));
};

const days = getDays();

export default function Calendar() {
  const [tab, setTab] = useState(2);

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <Box sx={{ width: "100%", bgcolor: "primary" }}>
      <Tabs value={tab} onChange={handleChange} centered>
        {days.map(({ day, date }) => (
          <Tab
            icon={<div>{day}</div>}
            label={date}
            key={date}
            iconPosition="bottom"
          />
        ))}
      </Tabs>
    </Box>
  );
}
