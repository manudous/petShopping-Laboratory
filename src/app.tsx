import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Kutties } from "./components/Kutties";
import { Cart } from "./components/Cart";
import { MyContextProvider } from "./components/Context";

export const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Kutties />
          </Route>
        </Switch>
      </Router>
      <Cart />
    </>
  );
};
