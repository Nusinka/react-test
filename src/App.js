import React from "react";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import FinishPage from "./components/FinishPage";
import NewBookPage from "./components/NewBookPage";
import { history } from "./store/configureStore";

function App() {
  return (
    <ConnectedRouter history={history}>
      <Route path="/" exact component={NewBookPage} />
      <Route path="/finish-page" exact component={FinishPage} />
    </ConnectedRouter>
  );
}

export default App;
