// TODO - wczytać dawkę (dose) z serwera

const scheduleApplicationsArray = (noOfPlannedApplications, lastApplicationDate, drug) => {
  const plannedArray = [];

  const date = lastApplicationDate;
  const nextDose = {
    drugName: drug.name,
    drugId: drug._id,
    dose: 333
  };
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < noOfPlannedApplications; i++) {
    date.setHours(date.getHours() + drug.interval);
    const hoursAndMinutes = date.toLocaleTimeString().slice(0, 5);
    const day = `${date.getDate()}.${date.getMonth()}`;
    plannedArray.push({ day, hoursAndMinutes, ...nextDose });
  }
  return plannedArray;
};

export default scheduleApplicationsArray;
