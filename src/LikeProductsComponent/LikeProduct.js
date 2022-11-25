import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import LikeProductImages from "./LikeProductImages.js";
import DiscoverMoreButton from "../DiscoverMoreButton.js";

const useStyles = makeStyles({
  likeProductContainer: {
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
      padding: "0 15rem",
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
  likeProductHead: {},
});

function LikeProduct() {
  const classes = useStyles();

  return (
    <div className={classes.likeProductContainer}>
      <Typography variant="h3" className={classes.likeProductHead}>
        PRODUCTS YOU MAY LIKE
      </Typography>
      <Typography variant="body1">
        suspendises varius enim ros eros elementum tristique. Duis curses, mi
        quis viverra arnare, eros dolar enterdum nulla
      </Typography>
      <LikeProductImages />
      <DiscoverMoreButton />
    </div>
  );
}

export default LikeProduct;
