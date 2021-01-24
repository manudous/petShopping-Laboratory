import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ListPage } from "./components/list";


export const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <ListPage />
        </Route>
      </Switch>
    </Router>
  );
};
