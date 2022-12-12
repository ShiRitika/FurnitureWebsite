import React from 'react';
import { makeStyles } from '@mui/styles';
import Header from '../Components/Header.js';
import Footer from '../Components/Footer.js';

const useStyles = makeStyles({
  BlogHeading: {
    textAlign: 'center',
    margin: '10rem',
    backgroundColor: 'pink',
  },
});

const Blog = () => {
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
