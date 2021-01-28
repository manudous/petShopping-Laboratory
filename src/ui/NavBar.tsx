import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    buttonProperties: {
      backgroundColor: "white",
      fontWeight: "bold",
      marginLeft: "1rem", 
    },
    link: {
      textDecoration: "none",
    },
    container: {
      paddingLeft: "3rem"
    }
  })
);

export const NavBar = () => {
  const classes = useStyles();

  const [value, setValue] = React.useState("recents");

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Animals Shopping</Typography>
        <div className="{classes.container}">
          <Link to="/" className={classes.link}>
            <Button
              color="inherit"
              variant="contained"
              className={classes.buttonProperties}
            >
              Kitties
            </Button>
          </Link>
          <Link to="/puppies" className={classes.link}>
            <Button
              color="inherit"
              variant="contained"
              className={classes.buttonProperties}
            >
              Puppies
            </Button>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};
