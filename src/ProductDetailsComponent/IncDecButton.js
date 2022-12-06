import React, { useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  btnContainer: {
    margin: "1rem 0",
    "& button": {
      fontSize: "1rem",
      border: "1px solid #90a4ae",
      color: "black",
      borderRadius: "30px",
    },
  },
});

const GroupedButtons = () => {
  const classes = useStyles();

  const [currentNum, UpdatedNum] = useState(1);

  const IncrementNum = () => {
    UpdatedNum(currentNum + 1);
  };

  const DecrementNum = () => {
    if (currentNum > 0) {
      UpdatedNum(currentNum - 1);
    } else {
      UpdatedNum(0);
    }
  };

  return (
    <ButtonGroup size="small" className={classes.btnContainer}>
      <Button onClick={DecrementNum}>-</Button>
      <Button>{currentNum}</Button>
      <Button onClick={IncrementNum}>+</Button>
    </ButtonGroup>
  );
};

export default GroupedButtons;
