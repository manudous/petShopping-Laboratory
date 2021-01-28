import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import { Link, NavLink } from "react-router-dom";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: "primary"
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      marginLeft: "3rem"
    },
  })
);

export const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4">
            Animals Shopping
          </Typography>
          <BottomNavigation className={classes.root}>
          <BottomNavigationAction label="Puppies"  />
            <Typography variant="h6">
              <NavLink to="/">Kutties</NavLink>
            </Typography>
            <Typography variant="h6">
              <NavLink to="/puppies">Puppies</NavLink>
            </Typography>
          </BottomNavigation>
        </Toolbar>
      </AppBar>
    </div>
  );
};
