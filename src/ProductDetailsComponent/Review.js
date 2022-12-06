import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import ReviewButtons from "./ReviewButtons.js";
import CustomizedRating from "./Rating.js";
import Rating from "@mui/material/Rating";
import Avatar from "@mui/material/Avatar";
import Avtar1 from "../assets/Avtar1.JPG";
import Avtar2 from "../assets/Avtar2.JPG";
import Avtar3 from "../assets/Avtar3.JPG";
import Form from "./Form.js";

const useStyles = makeStyles({
  mainContainer: {
    margin: "4% 15%",
    width: "70%",
    display: "flex",
  },
  ReviewContainer: {
    width: "50%",
    padding: "0rem 1rem 0rem 1rem",
  },
  AddReviewContainer: {
    width: "50%",
    padding: "10px 30px",
    "& h5": {
      fontWeight: "bold",
    },
  },
  starContainer: {
    width: "100%",
    display: "flex",
    margin: "2rem 0rem",
  },
  overallContent: {
    width: "50%",
    backgroundColor: "#F4F4F4",
    textAlign: "center",
    padding: "1.5rem",
    "& h5": {
      fontWeight: "bold",
    },
    "& h3": {
      color: "#e74c1e",
      fontWeight: "bold",
    },
    "& h6": {
      color: "#5a5757",
    },
  },
  starContent: {
    textAlign: "center",
    padding: "0rem",
    width: "40%",
    "& h6": {
      fontSize: "1.15rem",
    },
  },
  AvtarContainer: {
    "& div": {
      "& div": {
        width: "5rem",
        height: "5rem",
        marginRight: "1rem",
      },
    },
  },
  AvtarContent: {
    display: "flex",
  },
  AvtarImage: {
    width: "20%",
  },
  StarReview: {
    margin: "0.5rem 0",
    "& h5": {
      fontSize: "14px",
    },
    "& span": {
      "& label": {
        "& span": {
          fontSize: "1.2rem",
        },
      },
    },
  },
  TextContent: {
    margin: "0 0rem 1rem 0rem",
    "& h6": {
      fontSize: "12px",
      color: "#5a5757",
    },
  },
});

function Review() {
  const classes = useStyles();
  return (
    <div className={classes.mainContainer}>
      <div className={classes.ReviewContainer}>
        <ReviewButtons />
        <div className={classes.starContainer}>
          <div className={classes.overallContent}>
            <Typography variant="h5">Overall</Typography>
            <Typography variant="h3" className={classes.price}>
              4.0
            </Typography>
            <Typography variant="subtitle2" className={classes.description}>
              (03 Reviews)
            </Typography>
          </div>
          <div className={classes.starContent}>
            <Typography variant="h6">Based on 3 Reviews</Typography>
            <CustomizedRating />
          </div>
        </div>
        <div className={classes.AvtarContainer}>
          <div className={classes.AvtarContent}>
            <div className={classes.AvtarImage}>
              <Avatar alt="Remy Sharp" src={Avtar1} />
            </div>
            <div className={classes.StarReview}>
              <h5>Blake Ruiz</h5>
              <Rating name="customized-10" defaultValue={5} max={5} />
            </div>
          </div>
          <div className={classes.TextContent}>
            <Typography variant="subtitle2" className={classes.description}>
              Lorem ipsum dolor sit amet,consectetur adipisicing elit, sed do
              euismod tempor incidient ut abour at dolora manga alique .Ut enim
              ad minim venim, quis nostrated excretition uliamna laboeris nisi
              ut aliquies ex ea commodo.
            </Typography>
          </div>

          <div className={classes.AvtarContent}>
            <div className={classes.AvtarImage}>
              <Avatar alt="Travis Howard" src={Avtar2} />
            </div>
            <div className={classes.StarReview}>
              <h5>Blake Ruiz</h5>
              <Rating name="customized-10" defaultValue={5} max={5} />
            </div>
          </div>
          <div className={classes.TextContent}>
            <Typography variant="subtitle2" className={classes.description}>
              Lorem ipsum dolor sit amet,consectetur adipisicing elit, sed do
              euismod tempor incidient ut abour at dolora manga alique .Ut enim
              ad minim venim, quis nostrated excretition uliamna laboeris nisi
              ut aliquies ex ea commodo.
            </Typography>
          </div>

          <div className={classes.AvtarContent}>
            <div className={classes.AvtarImage}>
              <Avatar alt="Cindy Baker" src={Avtar3} />
            </div>
            <div className={classes.StarReview}>
              <h5>Blake Ruiz</h5>
              <Rating name="customized-10" defaultValue={5} max={5} />
            </div>
          </div>
          <div className={classes.TextContent}>
            <Typography variant="subtitle2" className={classes.description}>
              Lorem ipsum dolor sit amet,consectetur adipisicing elit, sed do
              euismod tempor incidient ut abour at dolora manga alique .Ut enim
              ad minim venim, quis nostrated excretition uliamna laboeris nisi
              ut aliquies ex ea commodo.
            </Typography>
          </div>
        </div>
      </div>
      <div className={classes.AddReviewContainer}>
        <Form />
      </div>
    </div>
  );
}

export default Review;
