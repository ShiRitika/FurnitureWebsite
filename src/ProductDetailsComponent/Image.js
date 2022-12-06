import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { makeStyles } from "@mui/styles";
import sofa1Image from "../assets/Sofa1.png";
import sofa2Image from "../assets/Sofa2.png";
import sofa3Image from "../assets/Sofa3.png";
import sofa4Image from "../assets/Sofa4.png";

const useStyles = makeStyles({
  sofaImage: {
    cursor: "pointer",
  },
  showSofaImage: {
    width: "100%",
  },
});

function StandardImageList() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.BigImageContent}>
        <img
          id="image1"
          src={sofa1Image}
          alt=""
          className={classes.showSofaImage}
        />
      </div>
      <ImageList cols={4}>
        <ImageListItem >
          <img src={sofa1Image} alt="" className={classes.sofaImage} />
        </ImageListItem>
        <ImageListItem >
          <img src={sofa2Image} alt="" className={classes.sofaImage} />
        </ImageListItem>
        <ImageListItem >
          <img src={sofa3Image} alt="" className={classes.sofaImage} />
        </ImageListItem>
        <ImageListItem >
          <img src={sofa4Image} alt="" className={classes.sofaImage} />
        </ImageListItem>
      </ImageList>
    </div>
  );
}

export default StandardImageList;
