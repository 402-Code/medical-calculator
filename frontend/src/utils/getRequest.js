import axios from "axios";

const MEDICATION_LIST_ENDPOINT = "https://jsonplaceholder.typicode.com/todos";

const sendGetRequest = (body) => {
  const dataPromise = axios
    .get(MEDICATION_LIST_ENDPOINT, { params: { body } })
    .then((res) => res.data);

  return dataPromise;
};

export default sendGetRequest;
