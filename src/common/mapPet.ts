import React from "react";
import { PictureInfo } from "../types/pictureInfo";

export const mapPet = (props) => {
  const [pets, setPets] = React.useState<PictureInfo[]>([]);

  React.useEffect(() => {
    setPets(props);
  }, []);

  return pets;
};
