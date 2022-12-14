import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  ButtonContainer: {
    textAlign: "center",
    marginBottom: "4rem",
    marginTop: "2rem",
    "& div": {
      display: "block",
      "& button.MuiButton-root:hover": {
        border: "1px solid #ff7043",
      },
    },

    "& button": {
      color: "#ff7043",
      border: "1px solid #d09ed1",
      textAlign: "center",
      lineHeight: 2,
      padding: "8px 40px",
      borderRadius: "2px",
    },
    "& button : hover": {
      border: "1px solid #ff7043",
    },
  },
});

function DiscoverMoreButton({ children, onClick }) {
  const classes = useStyle();

  return (
    <div className={classes.ButtonContainer}>
      <Stack spacing={2} direction="row">
        <Button variant="outlined" className={classes.Button} onClick={onClick}>
          {children}
        </Button>
      </Stack>
    </div>
  );
}

export default DiscoverMoreButton;
