import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  mainContainer: {
    "& div": {
      "& button": {
        fontWeight: 400,
        fontSize: "0.6rem",
        borderRadius: "8rem",
        backgroundColor: "transparent",
        color: "black",
        border: "1px solid grey",
        boxShadow: "none",
        "& span:hover": {
          backgroundColor: "red",
        },
      },
    },
  },
});

function ReviewButtons() {
  const classes = useStyle();
  return (
    <div className={classes.mainContainer}>
      <Stack direction="row" spacing={2}>
        <Button variant="contained">Description</Button>
        <Button variant="contained">Specification</Button>
        <Button variant="contained"> Comments</Button>
        <Button variant="contained"> Reviews </Button>
      </Stack>
    </div>
  );
}

export default ReviewButtons;
