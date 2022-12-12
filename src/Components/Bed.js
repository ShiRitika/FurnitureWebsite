import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';

const protocol = 'http';
const host = 'localhost';
const port = 8000;
const url_configuration = {
  getProduct: 'bed',
};
const apiURL = `${protocol}://${host}:${port}/${url_configuration.getProduct}`;

const useStyles = makeStyles({
  sofaImage: {
    height: '13rem',
    width: '20rem',
  },
  dollar: {
    color: '#a10606',
    fontWeight: 'bolder',
    fontSize: '15px',
  },
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const BedImages = () => {
  const classes = useStyles();

  const [product, setProduct] = useState([]);

  const fetchData = () => axios.get(apiURL).then((response) => {
    const product = response.data;
    setProduct(product);
  });

  useEffect(() => {
    fetchData();
  }, []);

  const getProducts = () => product.map((prd, idx) => (
    <Grid item xs={4}>
      <Item>
        <div>
          <Link
            className={classes.navLink}
            to={`/productDetails/bed/${prd.id}`}
          >
            <img src={prd.image} alt="" className={classes.sofaImage} />
          </Link>
        </div>
        <Typography variant="body">
          {prd.description}
          <br />
          <br />
          <span className={classes.dollar}>{`$ ${prd.price}`}</span>
        </Typography>
      </Item>
    </Grid>
  ));

  return (
    <Box sx={{ width: '100%' }}>
      <Grid container>{getProducts()}</Grid>
    </Box>
  );
}

export default BedImages;
