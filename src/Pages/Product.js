import React from "react";
import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  ProductHeading:{
    textAlign:'center',
    margin: '10rem',
    backgroundColor:'pink'
  }
});


function Product() {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <h1 className={classes.ProductHeading}>This is Product Page</h1>
      <Footer />
    </div>
  );
}

export default Product;
