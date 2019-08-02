import axios from "axios";
import { http } from "./utils";

const decoder = response => {
  if (response.status === 200) return response.data;
  return "error";
};

export const fetchBooks = () => {
  return axios
    .get(`${http}/books`)
    .then(response => decoder(response))
    .catch(error => {
      console.log(error);
    });
};

export const sendBook = book => {
  return axios.post(`${http}/books`, book).then(response => response);
};

export const fetchStatus = () => {
  return axios
    .get(`${http}/status`)
    .then(response => decoder(response))
    .catch(error => {
      console.log(error);
    });
};
