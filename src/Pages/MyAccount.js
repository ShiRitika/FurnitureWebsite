import React from 'react';
import { makeStyles } from '@mui/styles';
import Header from '../Components/Header.js';
import Footer from '../Components/Footer.js';

const useStyles = makeStyles({
  MyAccountHeading: {
    textAlign: 'center',
    margin: '10rem',
    backgroundColor: 'pink',
  },
});

const MyAccount = () => {
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
