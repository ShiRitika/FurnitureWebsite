import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  ErrorHeading: {
    textAlign: "center",
  },
});

function Page404() {
  const classes = useStyles();
  return (
    <div className={classes.ErrorHeading}>
      <h1>404 Page</h1>
      <p>URl not found</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default Page404;
