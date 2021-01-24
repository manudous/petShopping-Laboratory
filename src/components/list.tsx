import React from "react";
import { PictureInfo } from "../types/pictureInfo";
import { kitties } from "../data/mock";

import Typography from "@material-ui/core/Typography";
import {
  Card,
  Hidden,
  Avatar,
  CardHeader,
  IconButton,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import PetsIcon from "@material-ui/icons/Pets";

export const useStyles = makeStyles({});

export const ListPage: React.FC = () => {
  const [animals, setAnimals] = React.useState<PictureInfo[]>(kitties);
  const [state, setState] = React.useState({
    checked: false,
    
  });
  console.log(state);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const classes = useStyles();
  console.log(animals);

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
        {animals.map((animal) => (
          <Grid item key={animal.id}>
            <Card>
              <CardHeader
                avatar={
                  <Avatar aria-label="cat">
                    <PetsIcon color="primary" />
                  </Avatar>
                }
                title={animal.title}
              />
              <CardMedia title="hola" image={animal.picUrl} />
             
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    id={animal.id}
                    checked={state.checked}
                    onChange={handleChange}
                    name="checked"
                  />
                }
                label="Buy"
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
