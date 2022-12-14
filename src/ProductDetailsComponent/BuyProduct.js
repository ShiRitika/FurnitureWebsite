import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Divider from "@mui/material/Divider";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DiscoverMoreButton from "../Components/DiscoverMoreButton";
import GroupedButtons from "./IncDecButton";
import StandardImageList from "./StandardListImage";

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
    "& div": {
      margin: "0px",
      "& div": {
        margin: "0 1rem 0 0",
        "& button": {
          color: "white",
          backgroundColor: "#ff7043",
        },
        "& button:hover": {
          color: "#ff7043",
        },
      },
    },
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

const BuyProduct = (props) => {
  const classes = useStyles();
  const product = props.data;

  return product.map((prd) => (
    <div className={classes.mainContainer} key={prd.id}>
      <div className={classes.ImageContainer}>
        <StandardImageList img={prd.images} />
      </div>
      <div className={classes.TextContainer}>
        <Typography variant="h5">{prd.productDetails[0].name}</Typography>
        <Typography variant="h6" className={classes.price}>
          $
          {prd.price}
        </Typography>
        <br />
        <TableContainer className={classes.TableContainer}>
          <Table>
            <TableRow>
              <TableCell>Category</TableCell>
              <TableCell>:</TableCell>
              <TableCell>{prd.productDetails[0].category}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Availability</TableCell>
              <TableCell>:</TableCell>
              <TableCell>{prd.productDetails[0].availability}</TableCell>
            </TableRow>
          </Table>
        </TableContainer>
        <br />
        <Divider />
        <br />
        <Typography variant="subtitle2" className={classes.description}>
          {prd.productDetails[0].description}
        </Typography>
        <GroupedButtons />
        <div className={classes.buttonContent}>
          <DiscoverMoreButton> Add To Cart</DiscoverMoreButton>
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
  ));
};

export default BuyProduct;
