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
import { MyContext } from "./Context";

export const useStyles = makeStyles({});
interface visualMode {
  id: string;
  selected: boolean;
}

export const Kutties: React.FC = () => {
  const myContext = React.useContext(MyContext);
  console.log(myContext.animalId)
  
  const [animals, setAnimals] = React.useState<PictureInfo[]>([]);

  const [selected, setSelected] = React.useState<visualMode>();

  React.useEffect(() => {
    setAnimals(kitties);
  }, []);

  const onCheckboxClicked = (event) => {
    setSelected({
      id: event.target.id,
      selected: event.target.checked
    })
  }
  console.log(selected);
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
