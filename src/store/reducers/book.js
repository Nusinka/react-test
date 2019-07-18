import {
  RECEIVE_GENRES,
  RECEIVE_GENRES_SUCCESS,
  RECEIVE_GENRES_FAIL,
  UPDATE_SUBGENRES
} from "../actions/book";
import {
  CREATE_SUBGENRE,
  CREATE_SUBGENRE_FAIL,
  CREATE_SUBGENRE_SUCCESS
} from "../actions/subgenre";
import type { GenreT } from "../../models";

type ActionT = {
  type: string,
  error: string,
  genres: GenreT
};

type StateT = {
  loading: boolean,
  loaded: boolean,
  error: string,
  genres: GenreT
};

const initialState = {
  loading: false,
  loaded: false,
  error: "",
  genres: []
};

const bookReducer = (state: StateT = initialState, action: ActionT): StateT => {
  switch (action.type) {
    case RECEIVE_GENRES:
      return {
        ...state,
        loading: true,
        loaded: false,
        error: "",
        genres: {}
      };
    case RECEIVE_GENRES_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        genres: action.genres
      };
    case RECEIVE_GENRES_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case UPDATE_SUBGENRES:
      return {
        ...state,
        genres: action.genres
      };
    case CREATE_SUBGENRE:
      return {
        ...state,
        loading: true,
        loaded: false,
        error: ""
      };
    case CREATE_SUBGENRE_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true
      };
    case CREATE_SUBGENRE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    default:
      return state;
  }
};

export default bookReducer;
