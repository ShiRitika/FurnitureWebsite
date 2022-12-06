import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import BestFurnitureImage from "../assets/BestFurnitureManufactureImage.png";
import DiscoverMoreButton from "../Components/DiscoverMoreButton.js";

const useStyles = makeStyles({
  MainConatiner: {
    display: "flex",
    width: "100%",
    "& h3": {
      fontWeight: "bold",
      fontSize: "2rem",
      margin: "5rem 3rem 1rem 3rem",
    },
    "& p": {
      color: "rgba(0, 0, 0, 0.6)",
      fontWeight: 500,
      padding: "0 6rem 1rem 3rem",
      fontSize: "15px",
    },
  },
  ImageContent: {
    width: "60%",
  },
  BestFurnitureImage: {
    width: "100%",
    height: "100%",
  },
  TextContent: {
    width: "40%",
    backgroundColor: "#e3d2c9",
    "& div": {
      textAlign: "left",
      paddingLeft: "1.5rem",
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
});

const BestFurnitureManufacture = () => {
  const classes = useStyles();

  return (
    <div className={classes.MainConatiner}>
      <div className={classes.ImageContent}>
        <img
          src={BestFurnitureImage}
          alt=""
          className={classes.BestFurnitureImage}
        />
      </div>
      <div className={classes.TextContent}>
        <Typography variant="h3">BEST FURNITURE MANUFACTURER</Typography>
        <Typography variant="body1">
          suspendises varius enim ros eros elementum tristique. Duis curses, mi
          quis viverra arnare, eros dolar enterdum nulla.
          <br></br>
          <br></br>
          suspendises varius enim ros eros elementum tristique. Duis curses, mi
          quis viverra arnare, eros dolar enterdum nulla.
        </Typography>
        <DiscoverMoreButton />
      </div>
    </div>
  );
};

export default BestFurnitureManufacture;
