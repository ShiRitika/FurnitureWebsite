import React from "react";
import { makeStyles } from "@mui/styles";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const useStyles = makeStyles({
  aboutHeading: {
    textAlign: "center",
    margin: "10rem",
    backgroundColor: "pink",
  },
});

function About() {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <h1 className={classes.aboutHeading}>This is About Page</h1>
      <Footer />
    </div>
  );
}

export default About;
