import React from "react";
import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  MyAccountHeading:{
    textAlign:'center',
    margin: '10rem',
    backgroundColor:'pink'
  }
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