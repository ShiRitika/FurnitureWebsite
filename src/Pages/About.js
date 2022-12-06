import React from "react";
import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  aboutHeading: {
    textAlign: "center",
    margin: "10rem",
    backgroundColor: "pink",
  },
});

const About = () => {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <h1 className={classes.aboutHeading}>This is About Page</h1>
      <Footer />
    </div>
  );
};

export default About;
