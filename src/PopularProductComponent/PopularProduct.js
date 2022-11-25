import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import ProductTabs from "./PopularProductTabs";

const useStyles = makeStyles({
  PopularProductContainer: {
    textAlign: "center",
    padding: "2rem 10rem 2rem 10rem",
    "& div": {
      "& div": {
        "& div": {
          borderRadius: "0px",
          color: "black",
          boxShadow: "none",
          fontWeight: "bold",
          '& button':{
            color: "black",
            textTransform: "capitalize",
            minWidth: "16.66%",
          },
          '& button.Mui-selected ': {
            color: '#ff7043',
          },
          '& span.MuiTabs-indicator':{
            backgroundColor: '#ff7043'
          },
        },
      },
    },
    "& h3": {
      fontWeight: "bold",
      fontSize: "2rem",
      margin: "1rem",
    },
    "& p": {
      color: "rgba(0, 0, 0, 0.6)",
      fontWeight: 500,
      padding: "0 12rem",
      marginBottom: "3rem",
    },
  },

  PopularProductHead: {},
});

function PopularProduct() {
  const classes = useStyles();

  return (
    <div className={classes.PopularProductContainer}>
      <Typography variant="h3" className={classes.PopularProductHead}>
        POPULAR PRODUCTS
      </Typography>
      <Typography variant="body1">
        suspendises varius enim ros eros elementum tristique. Duis curses, mi
        quis viverra ornare, eros dolar enterdum nulla
      </Typography>
      <ProductTabs />
    </div>
  );
}

export default PopularProduct;
