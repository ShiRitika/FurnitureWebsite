import React from "react";
import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  PageHeading:{
    textAlign:'center',
    margin: '10rem',
    backgroundColor:'pink'
  }
});


function Page() {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <h1 className={classes.PageHeading}>This is Page Page</h1>
      <Footer />
    </div>
  );
}

export default Page;
