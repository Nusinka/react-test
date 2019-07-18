// @flow
import { GenreT, BookT } from "../../models";

export const RECEIVE_GENRES = "RECEIVE_GENRES";
export const RECEIVE_GENRES_SUCCESS = "RECEIVE_GENRES_SUCCESS";
export const RECEIVE_GENRES_FAIL = "RECEIVE_GENRES_FAIL";
export const UPDATE_SUBGENRES = "UPDATE_SUBGENRES";
export const CREATE_BOOK = "CREATE_BOOK";
export const CREATE_BOOK_SUCCESS = "CREATE_BOOK_SUCCESS";
export const CREATE_BOOK_FAIL = "CREATE_BOOK_FAIL";

export function receiveGenres() {
  return { type: RECEIVE_GENRES };
}

export function receiveGenresSuccess(genres: GenreT) {
  return { type: RECEIVE_GENRES_SUCCESS, genres };
}

export function receiveGenresFail(error: string) {
  return { type: RECEIVE_GENRES_FAIL, error };
}

export function updateSubgenres(genres: GenreT) {
  return { type: UPDATE_SUBGENRES, genres };
}

export function createBook(data: BookT) {
  return { type: CREATE_BOOK, data };
}

export function createBookSuccess() {
  return { type: CREATE_BOOK_SUCCESS };
}

export function createBookFail(error: string) {
  return { type: CREATE_BOOK_FAIL, error };
}
