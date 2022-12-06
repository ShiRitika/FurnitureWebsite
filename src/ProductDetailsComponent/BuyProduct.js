import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import StandardImageList from "./Image.js";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Divider from "@mui/material/Divider";
import GroupedButtons from "./IncDecButton.js";
import AddToCartButton from "./AddToCartButton.js";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const useStyles = makeStyles({
  mainContainer: {
    margin: "4% 15%",
    width: "70%",
    display: "flex",
  },
  ImageContainer: {
    width: "50%",
    padding: "0rem 2rem 0rem 0rem",
  },
  TextContainer: {
    width: "50%",
    padding: "10px 30px",
    "& h5": {
      fontWeight: "bold",
    },
  },
  TableContainer: {
    width: "20%",
    textDecoration: "none",
    borderRadius: "0px",
    "& table": {
      width: "60%",
      "& tr": {
        "& td": {
          borderBottom: "none",
          padding: "2px",
        },
      },
    },
  },
  price: {
    fontWeight: "bold",
    color: "#ef6a40",
  },
  description: {
    color: "#78909c",
  },
  buttonContent: {
    display: "flex",
  },
  heartContent: {
    cursor: "pointer",
    marginLeft: "1rem",
    backgroundColor: "white",
    width: "2.5rem",
    height: "2.5rem",
    borderRadius: "50%",
    boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
    "& svg": {
      color: "#ff7043",
      margin: "0.5rem 0.5rem",
    },
  },
  FacebookIconContainer: {
    cursor: "pointer",
    display: "inline-block",
    margin: " 2rem 1rem 2rem 0rem",
    backgroundColor: "#3B5997",
    textAlign: "center",
    width: "2.5rem",
    height: "2.5rem",
    borderRadius: "50%",
    "& svg": {
      margin: "0.5rem 0.5rem",
      backgroundColor: "#3B5997",
      color: "white",
    },
  },
  TwitterIconContainer: {
    cursor: "pointer",
    display: "inline-block",
    margin: " 2rem 1rem 2rem 0rem",
    backgroundColor: "#55ADED",
    width: "2.5rem",
    height: "2.5rem",
    borderRadius: "50%",
    "& svg": {
      margin: "0.5rem 0.5rem",
      backgroundColor: "#55ADED",
      color: "white",
    },
  },
  LinkdinIconContainer: {
    cursor: "pointer",
    display: "inline-block",
    margin: " 2rem 1rem 2rem 0rem",
    backgroundColor: "#0177B5",
    width: "2.5rem",
    height: "2.5rem",
    borderRadius: "50%",
    "& svg": {
      margin: "0.5rem 0.5rem",
      backgroundColor: "#0177B5",
      color: "white",
    },
  },
});

function BuyProduct() {
  const classes = useStyles();
  return (
    <div className={classes.mainContainer}>
      <div className={classes.ImageContainer}>
        <StandardImageList />
      </div>
      <div className={classes.TextContainer}>
        <Typography variant="h5">Faded SkyBLue Denim Jeans</Typography>
        <Typography variant="h6" className={classes.price}>
          $149.99
        </Typography>
        <br></br>
        <TableContainer className={classes.TableContainer}>
          <Table>
            <TableRow>
              <TableCell>Category</TableCell>
              <TableCell>:</TableCell>
              <TableCell>Household</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Availability</TableCell>
              <TableCell>:</TableCell>
              <TableCell>In Stock</TableCell>
            </TableRow>
          </Table>
        </TableContainer>
        <br></br>
        <Divider />
        <br></br>
        <Typography variant="subtitle2" className={classes.description}>
          A couch, also known as a sofa, settee, chesterfield, is a cushioned
          item of furniture for seating multiple people ( uncommon for a single
          person to use a couch alone)
        </Typography>
        <GroupedButtons />
        <div className={classes.buttonContent}>
          <AddToCartButton />
          <div className={classes.heartContent}>
            <FavoriteBorderIcon />
          </div>
        </div>
        <div className={classes.FacebookIconContainer}>
          <FacebookOutlinedIcon />
        </div>
        <div className={classes.TwitterIconContainer}>
          <TwitterIcon />
        </div>
        <div className={classes.LinkdinIconContainer}>
          <LinkedInIcon />
        </div>
      </div>
    </div>
  );
}

export default BuyProduct;
