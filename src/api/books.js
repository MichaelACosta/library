import axios from "axios";

const decoder = response => {
  if (response.status === 200) return response.data;
  return "error";
};

const http = "http://localhost:3000";

export const fetchBooks = () => {
  return axios
    .get(`${http}/books`)
    .then(response => decoder(response))
    .catch(error => {
      console.log(error);
    });
};
