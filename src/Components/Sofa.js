import * as React from "react";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import products from "../Constant/products";

const useStyles = makeStyles({
  sofaImage: {
    height: "13rem",
    width: "20rem",
  },
  dollar: {
    color: "#a10606",
    fontWeight: "bolder",
    fontSize: "15px",
  },
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function SofaImages() {
  const classes = useStyles();

  const getProducts = () => {
    return products.map((prd,idx) => {
      return (
        <Grid item xs={4}>
          <Item>
            <div>
            <Link className={classes.navLink} to="/productDetails">
              <img src={prd.img} alt="" className={classes.sofaImage} /></Link>
            </div>
            <Typography variant="body" >
              {prd.desc}
              <br></br>
              <br></br>
              <span className={classes.dollar}>{`$ ${prd.price}`}</span>
            </Typography>
          </Item>
        </Grid>
      );
    }) 
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Grid container>
        {getProducts()}
      </Grid>
    </Box>
  );
}

export default SofaImages;
