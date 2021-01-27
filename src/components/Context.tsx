import React from "react";

interface Contexto {
  animalsId: string[];
  setAnimalsId: (ids: string[]) => void;
}

export const MyContext = React.createContext<Contexto>(null);

export const MyContextProvider = (props) => {
  const [animalsId, setAnimalsId] = React.useState<string[]>([]);

  return (
    <MyContext.Provider value={{ animalsId, setAnimalsId }}>
      {props.childen}
    </MyContext.Provider>
  );
};
