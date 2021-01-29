import React from "react";

import { puppies } from "../data/mock";

import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { MyContext } from "../context/Context";
import { CardPet } from "../common/CardPet";
import { mapPet } from "../common/mapPet";
import { petStyles } from "./styles";

export const Puppies: React.FC = () => {
  const myContext = React.useContext(MyContext);

  const pets = mapPet(puppies);

  const classes = petStyles();

  return (
    <>
      <Typography variant="h2" color="initial" className={classes.h1Header}>
        Puppies
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
            <CardPet key={pet.id} {...pet} />
          )
        )}
      </Grid>
    </>
  );
};
