import { takeEvery, put } from "redux-saga/effects";
import * as api from "../api";
import * as types from "./types";
import * as actions from "./actions";

export function* sendBook(book) {
  yield api.sendBook(book.payload);
}

export function* fetchStatus() {
  const result = yield api.fetchStatus();
  if (result) {
    yield put(actions.setStatus(result));
  }
}

export default function* rootSaga() {
  yield takeEvery(types.SEND_BOOK, sendBook);
  yield takeEvery(types.FETCH_STATUS, fetchStatus);
}
