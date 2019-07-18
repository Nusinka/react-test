// @flow
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import bookReducer from "./book";
import stepReducer from "./step";
import subgenreReducer from "./subgenre";
import { connectRouter } from "connected-react-router";
import type { BrowserHistory } from "history";

const reducers = (history: BrowserHistory): any =>
  combineReducers({
    router: connectRouter(history),
    form: formReducer,
    bookReducer,
    stepReducer,
    subgenreReducer
  });

export default reducers;
