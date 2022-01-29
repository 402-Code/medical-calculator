import axios from "axios";

const sendGetRequest = (url, body) => {
  const dataPromise = axios
    .get(url, { params: { body } })
    .then((res) => res.data);

  return dataPromise;
};

export default sendGetRequest;
