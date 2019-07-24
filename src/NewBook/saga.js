import { takeEvery } from "redux-saga/effects";
import * as api from "../api";
import * as types from "./types";

export function* sendBook(book) {
  yield api.sendBook(book.payload);
}

export default function* rootSaga() {
  yield takeEvery(types.SEND_BOOK, sendBook);
}
