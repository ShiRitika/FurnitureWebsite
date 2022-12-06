import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  mainContainer: {
    "& h5": {
      fontSize: "15px",
      "& span": {
        "& label": {
          fontSize: "1.2rem",
          margin: "auto",
        },
      },
    },
  },
});

export default function CustomizedRating() {
  const classes = useStyles();

  return (
    <div className={classes.mainContainer}>
      <Box
        sx={{
          "& > legend": { mt: 2 },
        }}
      >
        <Typography variant="h5">
          5 stars
          <Rating name="customized-10" defaultValue={5} max={5} />
        </Typography>
        <Typography variant="h5">
          4 stars
          <Rating name="customized-10" defaultValue={4} max={5} />
        </Typography>
        <Typography variant="h5">
          3 stars
          <Rating name="customized-10" defaultValue={3} max={5} />
        </Typography>
        <Typography variant="h5">
          2 stars
          <Rating name="customized-10" defaultValue={2} max={5} />
        </Typography>
        <Typography variant="h5">
          1 stars
          <Rating name="customized-10" defaultValue={2} max={5} />
        </Typography>
      </Box>
    </div>
  );
}
