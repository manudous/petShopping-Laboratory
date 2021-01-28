import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { MyContextProvider } from "./components/Context";
import { RoutesComponent } from "./routes/RoutesComponent";

export const App = () => {
  return (
    <>
      
        <RoutesComponent />
      
    </>
  );
};
