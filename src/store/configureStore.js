import { applyMiddleware, createStore } from "redux";
import { routerMiddleware } from "react-router-redux";
import createSagaMiddleware from "redux-saga";
import { createBrowserHistory } from "history";
import reducers from "./reducers";
import rootSaga from "./sagas";

export const history = createBrowserHistory();

const configureStore = (initialState, browserHistory) => {
  const routermw = routerMiddleware(browserHistory);
  const sagaMiddleware = createSagaMiddleware();
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

  const store = createStore(
    reducers(history),
    initialState,
    composeEnhancers(applyMiddleware(routermw), applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore({}, history);
