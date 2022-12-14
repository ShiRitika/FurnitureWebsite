import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import mainImage from "../assets/mainImage.jpg";
import PageNavigation from "../Components/PageNavigation";

const useStyles = makeStyles({
  mainContainer: {
    position: "relative",
    zIndex: 1,
  },
  imageContainer: {
    backgroundColor: "#e3d2c9",
    width: "92%",
    marginLeft: "auto",
    height: "310px",
    position: "relative",
    zIndex: 2,
  },
  mainImage: {
    width: "100%",
    height: "250px",
    objectFit: "cover",
    objectPosition: "50% 50%",
  },
  imageContent: {
    width: "97.5%",
    height: "250px",
    backgroundColor: "#e3d2c9",
    position: "absolute",
    zIndex: 3,
    marginRight: "auto",
    top: 0,
  },
  TextContainer: {
    position: "absolute",
    zIndex: 4,
    marginRight: "auto",
    top: 80,
    left: 160,
    color: "white",
    "& div": {
      "& a": {
        textDecoration: "none",
        color: "white",
      },
    },
    "& h4": {
      fontWeight: "bold",
    },
  },
});

function HeaderImage() {
  const classes = useStyles();
  return (
    <div className={classes.mainContainer}>
      <div className={classes.imageContainer} />
      <div className={classes.imageContent}>
        <img src={mainImage} alt="" className={classes.mainImage} />
      </div>
      <div className={classes.TextContainer}>
        <Typography variant="h4">PRODUCT DETAILS</Typography>
        <PageNavigation />
      </div>
    </div>
  );
}

export default HeaderImage;
