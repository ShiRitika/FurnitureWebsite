import React from "react";
import { makeStyles } from "@mui/styles";
import mainImage from "../assets/mainImage.jpg";
import { Typography } from "@mui/material";
import DiscoverMoreButton from "./DiscoverMoreButton.js";

const useStyles = makeStyles({
  mainContainer: {
    position: "relative",
    zIndex: 1,
    "& h3": {
      fontWeight: "bold",
      fontSize: "3rem",
    },
    "& h6": {
      color: "#637c89",
    },
    "& p": {
      color: "rgba(0, 0, 0, 0.6)",
      fontWeight: 500,
      marginBottom: "2rem",
    },
  },
  imageContainer: {
    backgroundColor: "#e3d2c9",
    width: "92%",
    marginLeft: "auto",
    height: "600px",
    position: "relative",
    zIndex: 2,
  },
  mainImage: {
    width: "100%",
    height: "550px",
  },
  imageContent: {
    width: "97.5%",
    height: "550px",
    backgroundColor: "#e3d2c9",
    position: "absolute",
    zIndex: 3,
    marginRight: "auto",
    top: 0,
  },
  smallContainer: {
    backgroundColor: "white",
    width: "32%",
    position: "absolute",
    zIndex: 4,
    marginRight: "auto",
    top: 80,
    left: 160,
    padding: "2rem 4rem 2rem 2rem ",
    "& div": {
      textAlign: "left",
      marginBottom: "0px",
      "& div": {
        "& button": {
          color: "white",
          backgroundColor: "#ff7043",
        },
        "& button:hover": {
          color: "#ff7043",
        },
      },
    },
  },
  saleContent: {
    fontSize: "80px",
  },
});

const MainImage = () => {
  const classes = useStyles();
  return (
    <div className={classes.mainContainer}>
      <div className={classes.imageContainer}></div>
      <div className={classes.imageContent}>
        <img src={mainImage} alt="" className={classes.mainImage} />
      </div>
      <div className={classes.smallContainer}>
        <Typography variant="h6" className={classes.saleContent}>
          70% SALE OFF
        </Typography>
        <Typography variant="h3" className={classes.SmallContainerHead}>
          FURNITURE AT COST
        </Typography>
        <Typography variant="body1">
          suspendises varius enim ros eros elementum tristique. Duis curses, mi
          quis viverra ornare, eros dolar enterdum nulla
        </Typography>
        <DiscoverMoreButton />
      </div>
    </div>
  );
};

export default MainImage;
