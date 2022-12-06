import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import Rating from "@mui/material/Rating";

const useStyle = makeStyles({
  ButtonContainer: {
    margin: "0",
    "& div": {
      display: "block",
      "& button": {
        backgroundColor: "#ff7043",
      },
      "& button.MuiButton-root:hover": {
        border: "1px solid #ff7043",
        color: "black",
      },
    },

    "& button": {
      color: "white",
      border: "1px solid #d09ed1",
      textAlign: "center",
      lineHeight: 2,
      padding: "8px 40px",
      borderRadius: "1px",
    },
  },
  formContainer: {
    margin: "3rem 0",
  },
  formContent: {},
  formInput: {
    width: "100%",
    height: "40px",
    margin: "0.4rem 0",
  },
  reviewContent: {
    color: "#5a5757",
    fontSize: "15px",
  },
});

const Form = () => {
  const classes = useStyle();

  return (
    <div className={classes.formContainer}>
      <Typography variant="h5">Add a Review</Typography>
      <div className={classes.reviewContent}>
        Your Rating:
        <Rating name="customized-10" defaultValue={5} max={5} />
        Outstanding
      </div>
      <div className={classes.formBody}>
        <div className={classes.formContent}>
          <input
            className={classes.formInput}
            type="text"
            placeholder=" Your Full Name"
          />
        </div>
        <div className={classes.formContent}>
          <input
            type="email"
            id="email"
            className={classes.formInput}
            placeholder="Email Address"
          />
        </div>
        <div className={classes.formContent}>
          <input
            className={classes.formInput}
            type="number"
            id="phone"
            placeholder="Phone Number"
          />
        </div>
        <div className={classes.formContent}>
          <textarea
            className={classes.formInput}
            id="review"
            placeholder="Review"
          ></textarea>
        </div>
      </div>

      <div className={classes.ButtonContainer} align="right">
        <Stack spacing={2} direction="row">
          <Button variant="outlined" className={classes.Button}>
            SUBMIT NOW
          </Button>
        </Stack>
      </div>
    </div>
  );
};

export default Form;
