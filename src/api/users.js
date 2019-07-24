import axios from "axios";
import { http } from "./utils";

export const sendUser = user => {
  return axios.post(`${http}/users`, user).then(response => response);
};
