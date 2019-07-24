import * as types from "./types";

export const sendUser = payload => ({
  type: types.SEND_USER,
  payload
});
