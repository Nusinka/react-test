// @flow
import { delay, all, put, takeLatest } from "redux-saga/effects";
import type { Saga } from "redux-saga";
import {
  RECEIVE_GENRES,
  receiveGenresSuccess,
  receiveGenresFail,
  CREATE_BOOK,
  createBookSuccess,
  createBookFail
} from "../actions/book";
import { genres } from "../../mockData";
import { history } from "../configureStore";
import { BookT } from "../../models";

function* receiveGenresSaga() {
  try {
    yield delay(500);
    yield put(receiveGenresSuccess(genres));
  } catch (error) {
    console.error(error);
    yield put(receiveGenresFail());
  }
}

function* createBookSaga(action: { type: string, data: BookT }) {
  try {
    yield delay(500);
    history.push("/finish-page");
    yield put(createBookSuccess());
  } catch (error) {
    console.error(error);
    yield put(createBookFail());
  }
}

export default function* bookSaga(): Saga<*> {
  yield all([
    takeLatest(RECEIVE_GENRES, receiveGenresSaga),
    takeLatest(CREATE_BOOK, createBookSaga)
  ]);
}
