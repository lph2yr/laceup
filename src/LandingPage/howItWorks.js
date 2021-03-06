import React from "react";

import "./LandingPage.css";
import Card from "./Card";
import Card1 from "./Card1";

import { Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { base } from '../config/Firebase';
import { AWARDS } from "./Awards.js";
import { RULES } from "./Rules.js";

import { Link } from "react-router-dom";

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "60px",
    paddingRight: "60px",
    paddingTop: "30px",
    paddingBottom: "30px",
    width: "99vw",
  },
});

export default function HowItWorks(props) {
  const classes = useStyles();

  const [isLoggedIn, setIsLoggedIn] = React.useState(false)

  base.initializedApp.auth().onAuthStateChanged(function (user) {
    if (user) {
      setIsLoggedIn(true)
    }
    else {
      setIsLoggedIn(false)
    }

  })

  return (
    <div className="landing">
      {isLoggedIn ? (
        <div></div>
      ) : (
          <div
            style={{ paddingBottom: "10px", backgroundColor: "black", opacity: "0.8", paddingTop: "7px" }}
            className="buttons"
          >
            <Button className="login" variant="contained" color="primary">
              <Link style={{ color: "white" }} to="/login">Login</Link>
            </Button>
            <div className="divider" />
            <Button className="signup" variant="contained" color="primary">
              <Link style={{ color: "white" }} to="/register">Sign Up</Link>
            </Button>
          </div>
        )}
      <div className="Grid">
        <Grid container spacing={1} className={classes.gridContainer}>
          {RULES.map((rule, index) => {
            return (
              <Grid key={index} item xs={4}>
                <Card rule={rule} />
              </Grid>
            );
          })}
        </Grid>

        <Grid container spacing={1} className={classes.gridContainer}>
          {AWARDS.map((award, index) => {
            return (
              <Grid key={index} item xs={3}>
                <Card1 award={award} />
              </Grid>
            );
          })}
        </Grid>

      </div>
    </div>
  );
}
