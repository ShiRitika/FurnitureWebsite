import React from "react";
import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  ContactHeading:{
    textAlign:'center',
    margin: '10rem',
    backgroundColor:'pink'
  }
});


const Contact = () => {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <h1 className={classes.ContactHeading}>This is Blog Contact</h1>
      <Footer />
    </div>
  );
}

export default Contact;
