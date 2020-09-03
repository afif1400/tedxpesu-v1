import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    minWidth: 275,
    minHeight: 375,
    borderRadius: 0,
    paddingBottom: 20,
  },
  typo: {
    fontFamily: "Raleway, sans-serif",
    fontWeight: "600",
    fontStyle: "normal",
    paddingBottom: 20,
    color: "#fff",
  },
  typo2: {
    fontFamily: "Raleway, sans-serif",
    fontWeight: "300",
    color: "#fff",
  },
});

export default function SimpleCard({ image }) {
  const classes = useStyles();

  return (
    <Card
      elevation={0}
      className={classes.root}
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
      }}
    >
      <CardContent className={classes.content}>
        <Typography className={classes.typo} variant="h5" component="h1">
          Speaker name
        </Typography>
        <Typography className={classes.typo2} variant="body2" component="h2">
          Lorem ipsum dolor sit amet, consectetur
        </Typography>
      </CardContent>
    </Card>
  );
}
