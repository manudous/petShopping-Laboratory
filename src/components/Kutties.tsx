import React from "react";
import { PictureInfo } from "../types/pictureInfo";
import { kitties } from "../data/mock";

import {
  Card,
  Avatar,
  CardHeader,
  Checkbox,
  FormControlLabel,
  CardActionArea,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import PetsIcon from "@material-ui/icons/Pets";

export const useStyles = makeStyles({});


export const Kutties: React.FC = () => {
  const [animals, setAnimals] = React.useState<PictureInfo[]>([]);

  const [state, setState] = React.useState({});

  React.useEffect(() => {
    setAnimals(kitties);
  }, []);


  const onCheckboxClicked = (event) => {
    setState({
      ...state,
      [event.target.id]: event.target.checked
    })
  }

  const classes = useStyles();

  return (
    <>
      <h1>Kitties</h1>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={3}
      >
        {animals.map(
          (animal): JSX.Element => (
            <Grid item key={animal.id}>
              <Card className="root">
                <CardHeader
                  avatar={
                    <Avatar aria-label="cat">
                      <PetsIcon color="primary" />
                    </Avatar>
                  }
                  title={animal.title}
                />
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="250"
                    image={animal.picUrl}
                    title="Contemplative Reptile"
                  />
                </CardActionArea>

                <FormControlLabel
                  control={
                    <Checkbox id={animal.id} onChange={onCheckboxClicked} />
                  }
                  label="Buy"
                />
              </Card>
            </Grid>
          )
        )}
      </Grid>
    </>
  );
};
