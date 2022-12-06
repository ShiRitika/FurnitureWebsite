import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";

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
});

const AddToCartButton = () => {
  const classes = useStyle();
  return (
    <div className={classes.ButtonContainer}>
      <Stack spacing={2} direction="row">
        <Button variant="outlined" className={classes.Button}>
          ADD TO CART
        </Button>
      </Stack>
    </div>
  );
};

export default AddToCartButton;
