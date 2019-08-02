import * as types from "./types";

export const sendBook = payload => ({
  type: types.SEND_BOOK,
  payload
});

export const fetchStatus = () => ({
  type: types.FETCH_STATUS
});

export const setStatus = payload => ({
  type: types.SET_STATUS,
  payload
});
