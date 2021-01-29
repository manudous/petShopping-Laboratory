import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavBar } from "../ui/NavBar";
import { Cart } from "../components/Cart";


import { Puppies } from "../components/Puppies";
import { Kutties } from "../components/Kutties";

export const RoutesComponent = () => {
  return (
    <>
      <Router>
        <NavBar />
        <div>
          <Switch>
            <Route exact path="/puppies" component={Puppies} />

            <Route path="/" component={Kutties} />
          </Switch>
        </div>
        <Cart />
      </Router>
    </>
  );
};
