// TODO - wczytać dawkę (dose) z serwera

const scheduleApplicationsArray = (noOfPlannedApplications, lastApplicationDate, drug) => {
  const plannedArray = [];

  let hour = lastApplicationDate.getHours();
  const nextDose = {
    minutes: lastApplicationDate.getMinutes(),
    drugName: drug.name,
    dose: 333
  };
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < noOfPlannedApplications; i++) {
    hour += parseInt(drug.interval, 10);
    if (hour > 24) hour -= 24;
    plannedArray.push({ hour, ...nextDose });
  }
  return plannedArray;
};

export default scheduleApplicationsArray;
