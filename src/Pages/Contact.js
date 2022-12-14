import React from "react";
import { makeStyles } from "@mui/styles";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const useStyles = makeStyles({
  ContactHeading: {
    textAlign: "center",
    margin: "10rem",
    backgroundColor: "pink",
  },
});

function Contact() {
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
