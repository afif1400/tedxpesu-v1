import React from "react";
import { Grid, responsiveFontSizes, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 50,
    transition: "0.4s",
  },
  heading: {
    fontFamily: "Raleway",
    fontStyle: "normal",
    fontWeight: "bold",
    transition: "0.4s",
    margin: "0 auto",
    maxWidth: 600,
  },
  describe: {
    fontFamily: "Raleway",
    fontStyle: "normal",
    transition: "0.4s",
    margin: "20px auto",
    maxWidth: 700,
  },
  grid: {
    paddingTop: "4rem",
    transition: "0.4s",
  },
  gridItem: {
    maxWidth: 150,
    maxHeight: 150,
    margin: 20,
    transition: "0.4s",
    "& > *": {
      backgroundColor: "grey",
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

let theme = createMuiTheme({});

theme = responsiveFontSizes(theme);

const Speakers = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <Typography className={classes.heading} align="center" variant="h3">
          Thank you to our sponsors!
        </Typography>
        <Typography
          className={classes.describe}
          variant="body1"
          component="h6"
          align="center"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus,
          aliquam architecto beatae dolorem dolorum earum enim explicabo facilis
          molestiae nesciunt placeat qui quidem repellat, repudiandae similique
          ullam voluptatem. Quos, recusandae..
        </Typography>
        <Grid container justify="center" className={classes.grid}>
          <Grid className={classes.gridItem} item lg={4} md={4} sm={6} xs={6}>
            <Paper square="true" />
          </Grid>
          <Grid className={classes.gridItem} item lg={4} md={4} sm={6} xs={6}>
            <Paper square="true" />
          </Grid>
          <Grid className={classes.gridItem} item lg={4} md={4} sm={6} xs={6}>
            <Paper square="true" />
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
};

export default Speakers;
