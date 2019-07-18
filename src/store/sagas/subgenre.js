// @flow
import { delay, all, put, takeLatest, select } from "redux-saga/effects";
import { change } from "redux-form";
import type { Saga } from "redux-saga";
import {
  CREATE_SUBGENRE,
  createSubgenreSuccess,
  createSubgenreFail,
  CREATE_NEW_SUBGENRE,
  CLEAR_NEW_SUBGENRE
} from "../actions/subgenre";
import { updateSubgenres } from "../actions/book";
import { changeStep } from "../actions/step";
import { toggleNewSubgenre } from "../actions/subgenre";
import type { SubgenreT } from "../../models";

function* receiveSubgenresSaga(action: { type: string, data: SubgenreT }) {
  try {
    yield delay(500);
    yield put(createSubgenreSuccess());

    const receivedId = Math.round(Math.random() * 10000);
    yield put(change("newBook", "subgenre", receivedId));

    const state = yield select();
    const { genres } = state.bookReducer;
    const updatedGenre = genres.find(
      genre => genre.name === state.form.newBook.values.genre
    );
    updatedGenre.subgenres.push({ ...action.data, id: receivedId });

    yield put(updateSubgenres(genres));
    yield put(changeStep(3));
  } catch (error) {
    console.error(error);
    yield put(createSubgenreFail());
  }
}

function* createNewSubgenresSaga() {
  yield put(changeStep(2));
  yield put(toggleNewSubgenre(true));
}

function* clearNewSubgenresSaga() {
  yield put(changeStep(1));
  yield put(toggleNewSubgenre(false));
}

export default function* subgenreSaga(): Saga<*> {
  yield all([
    takeLatest(CREATE_SUBGENRE, receiveSubgenresSaga),
    takeLatest(CREATE_NEW_SUBGENRE, createNewSubgenresSaga),
    takeLatest(CLEAR_NEW_SUBGENRE, clearNewSubgenresSaga)
  ]);
}
