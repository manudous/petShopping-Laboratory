import React from "react";
import { MyContextProvider } from "./context/Context";

import { RoutesComponent } from "./routes/RoutesComponent";

export const App = () => {
  return (
    <>
    <MyContextProvider>
      
    </MyContextProvider>
      <RoutesComponent />
    </>
  );
};
