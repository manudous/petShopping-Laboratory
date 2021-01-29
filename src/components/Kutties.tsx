import React from "react";
import { kitties } from "../data/mock";

import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

import { MyContext } from "../context/Context";
import { CardPet } from "../common/CardPet";
import { mapPet } from "../common/mapPet";
import { petStyles } from "./styles";

interface visualMode {
  id: string;
  selected: boolean;
}

export const Kutties: React.FC = (): JSX.Element => {
  const myContext = React.useContext(MyContext);

  const pets = mapPet(kitties);

  const [selected, setSelected] = React.useState<visualMode>();

  const onCheckboxClicked = (event) => {
    setSelected({
      id: event.target.id,
      selected: event.target.checked,
    });
  };

  console.log(selected);
  const classes = petStyles();

  return (
    <>
      <Typography variant="h2" color="initial" className={classes.h1Header}>
        Kitties
      </Typography>
      <Grid
        className="animate__animated animate__fadeIn"
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={3}
      >
        {pets.map(
          (pet): JSX.Element => (
            <CardPet
              key={pet.id}
              {...pet}
              onCheckboxClicked={onCheckboxClicked}
            />
          )
        )}
      </Grid>
    </>
  );
};
