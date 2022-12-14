import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  Wrapper: {
    height: "1rem",
    backgroundColor: `${({ theme }) => theme.colors.bg}`,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    fontSize: "1.3rem",
  },
  a: {
    textDecoration: "none",
    backgroundColor: "wheat",
  },
});

function PageNavigation() {
  const classes = useStyles();

  return (
    <div className={classes.Wrapper}>
      <NavLink to="/">Home</NavLink>
      {" "}
      {">"}
      {" "}
      Product Details
    </div>
  );
}

export default PageNavigation;
