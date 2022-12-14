import React from "react";
import { makeStyles } from "@mui/styles";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const useStyles = makeStyles({
  MyAccountHeading: {
    textAlign: "center",
    margin: "10rem",
    backgroundColor: "pink",
  },
});

function MyAccount() {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <h1 className={classes.MyAccountHeading}>This is My Account Page</h1>
      <Footer />
    </div>
  );
}

export default MyAccount;
