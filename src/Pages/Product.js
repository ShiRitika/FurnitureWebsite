import React from 'react';
import { makeStyles } from '@mui/styles';
import Header from '../Components/Header.js';
import Footer from '../Components/Footer.js';

const useStyles = makeStyles({
  ProductHeading: {
    textAlign: 'center',
    margin: '10rem',
    backgroundColor: 'pink',
  },
});

const Product = () => {
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
