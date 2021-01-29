import React from "react";

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

export const useStyles = makeStyles({
  checkedButton: {
    marginLeft: "1rem",
  },
});

export const CardPet = (props) => {
  const { title, picUrl, id, onCheckboxClicked } = props;
  const classes = useStyles();

  return (
    <Grid item>
      <Card className="root">
        <CardHeader
          avatar={
            <Avatar aria-label="cat">
              <PetsIcon color="primary" />
            </Avatar>
          }
          title={title}
        />
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="250"
            image={picUrl}
            title="Contemplative Reptile"
          />
        </CardActionArea>

        <FormControlLabel
          className={classes.checkedButton}
          control={<Checkbox id={id} onChange={onCheckboxClicked} />}
          label="Buy"
        />
      </Card>
    </Grid>
  );
};
