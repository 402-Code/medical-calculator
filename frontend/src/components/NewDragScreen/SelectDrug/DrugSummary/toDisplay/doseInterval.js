const doseInterval = (selectedDrug) => {
  const interval = selectedDrug.dose_interval_in_hours;

  let h;
  switch (interval) {
    case 1:
      h = "godzina";
      break;
    case 2:
      h = "godziny";
      break;
    case 3:
      h = "godziny";
      break;
    case 4:
      h = "godziny";
      break;
    default:
      h = "godzin";
      break;
  }

  return `${interval} ${h}`;
};

export default doseInterval;
