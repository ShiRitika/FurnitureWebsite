import React from "react";
import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  BlogHeading:{
    textAlign:'center',
    margin: '10rem',
    backgroundColor:'pink'
  }
});


function Blog() {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <h1 className={classes.BlogHeading}>This is Blog Page</h1>
      <Footer />
    </div>
  );
}

export default Blog;
