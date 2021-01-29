import React from "react";

interface Context {
  animalId: string[];
  setAnimalId: (ids: string[]) => void;
}

export const MyContext = React.createContext<Context>(null);

export const MyContextProvider = (props) => {
  const [animalId, setAnimalId] = React.useState<string[]>([]);

  return (
    <MyContext.Provider value={{ animalId, setAnimalId }}>
      {props.childen}
    </MyContext.Provider>
  );
};
