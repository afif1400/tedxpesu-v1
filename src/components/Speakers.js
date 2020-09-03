import React from "react";
import { Grid, responsiveFontSizes, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import SimpleCard from "./Card";
import speakerImage1 from "../assets/speaker1.jpg";
import speakerImage2 from "../assets/speaker2.jpeg";
import speakerImage3 from "../assets/speaker3.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 50,
  },
  heading: {
    fontFamily: "Raleway",
    fontStyle: "normal",
    fontWeight: "bold",
    transition: "0.5s",
  },
  grid: {
    justifyContent: "center",
    paddingTop: "4rem",
    transition: "0.4s",
  },
  gridItem: {
    maxWidth: 275,
    margin: 40,
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
          Meet the speakers
        </Typography>
        <Grid container className={classes.grid}>
          <Grid className={classes.gridItem} item xs={12} sm={8} md={5} lg={4}>
            <SimpleCard image={speakerImage1} />
          </Grid>
          <Grid className={classes.gridItem} item xs={12} sm={8} md={5} lg={4}>
            <SimpleCard image={speakerImage2} />
          </Grid>
          <Grid className={classes.gridItem} item xs={12} sm={8} md={5} lg={4}>
            <SimpleCard image={speakerImage3} />
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
};

export default Speakers;
