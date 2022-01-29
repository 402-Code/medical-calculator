const getDataVersion = () => {
  let dataVersion;
  if (localStorage.getItem("data_version") === null) {
    dataVersion = { data_version: "2000-01-01" };
  } else {
    dataVersion = JSON.parse(localStorage.getItem("data_version"));
  }
  return dataVersion;
};

export default getDataVersion;
