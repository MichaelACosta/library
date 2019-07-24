import * as types from "./types";

export const sendBook = payload => ({
  type: types.SEND_BOOK,
  payload
});
