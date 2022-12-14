import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import TopPickImages from "./TopPickImage";
import DiscoverMoreButton from "./DiscoverMoreButton";

const useStyles = makeStyles({
  TopProductContainer: {
    textAlign: "center",
    padding: "2rem 10rem 2rem 10rem",
    "& h3": {
      fontWeight: "bold",
      fontSize: "2rem",
      margin: "1rem",
    },
    "& p": {
      color: "rgba(0, 0, 0, 0.6)",
      fontWeight: 500,
      padding: "0 12rem",
      marginBottom: "3rem",
    },
    "& div": {
      "& div": {
        "& div": {
          borderRadius: "0px",
          color: "black",
          boxShadow: "none",
          fontWeight: "bold",
        },
      },
    },
  },
});

function TopPick() {
  const classes = useStyles();

  return (
    <div className={classes.TopProductContainer}>
      <Typography variant="h3" className={classes.TopProductHead}>
        TOP PICK
      </Typography>
      <Typography variant="body1">
        suspendises varius enim ros eros elementum tristique. Duis curses, mi
        quis viverra arnare, eros dolar enterdum nulla
      </Typography>
      <TopPickImages />
      <DiscoverMoreButton>Discover More</DiscoverMoreButton>
    </div>
  );
}

export default TopPick;
