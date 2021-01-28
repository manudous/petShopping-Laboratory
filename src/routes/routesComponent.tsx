import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Puppies } from "../components/Puppies";
import { Kutties } from "../components/Kutties";

export const RoutesComponent = () => {
  return (
    <>
      <Router>
        <div>
          <Switch>
            <Route exact path="/puppies" component={Puppies} />

            <Route path="/" component={Kutties} />
          </Switch>
        </div>
      </Router>
    </>
  );
};
