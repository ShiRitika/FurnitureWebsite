import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import socialImage1 from "../assets/SocialImage1.png";
import socialImage2 from "../assets/SocialImage2.png";

import DiscoverMoreButton from "./DiscoverMoreButton.js";
import InstagramIcon from "@mui/icons-material/Instagram";

const useStyles = makeStyles({
  MainConatiner: {
    width: "90%",
    display: "flex",
    marginLeft: "8%",
    marginRight: "2%",
  },
  TextContent: {
    width: "40%",
    position: "relative",
    "& h3": {
      fontWeight: "bold",
      fontSize: "2rem",
      letterSpacing: "2px",
      margin: "1rem 0",
    },
    "& p": {
      color: "rgba(0, 0, 0, 0.6)",
      fontWeight: 500,
      fontSize: "14px",
    },
    "& svg": {
      width: "4em",
      height: "3em",
      margin: "1rem 0",
    },
    "& div": {
      textAlign: "left",
    },
  },
  Image1Content: {
    width: "40%",
  },
  Image2Content: {
    width: "40%",
  },
  socialImage1: {
    height: "100%",
    width: "100%",
  },
  socialImage2: {
    height: "100%",
    width: "100%",
  },
  instagramIcon: {
    color: "#ff7043",
    width: "4rem",
  },
});

function SocialNetworkInspired() {
  const classes = useStyles();

  return (
    <div className={classes.MainConatiner}>
      <div className={classes.TextContent}>
        <InstagramIcon className={classes.instagramIcon} />
        <Typography variant="h3" className={classes.TopProductHead}>
          GET INSPIRED WITH INSTAGRAM
        </Typography>
        <Typography variant="body1">
          suspendises varius enim ros eros elementum tristique. Duis curses, mi
          quis viverra arnare, eros dolar enterdum nulla
        </Typography>
        <DiscoverMoreButton />
      </div>
      <div className={classes.Image1Content}>
        <img src={socialImage1} alt="" className={classes.socialImage1} />
      </div>
      <div className={classes.Image2Content}>
        <img src={socialImage2} alt="" className={classes.socialImage2} />
      </div>
    </div>
  );
}

export default SocialNetworkInspired;
