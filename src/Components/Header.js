import React from "react";
import { makeStyles } from "@mui/styles";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import logoImage from "../assets/furnLogo.png";
import { Badge } from "@mui/material";
import { Link , NavLink } from "react-router-dom";

const useStyles = makeStyles({
  navContainer: {
    position: "relative",
    backgroundColor: "#e3d2c9",
    paddingLeft: "8%",
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
  },
  navContent: {
    position: "relative",
    color: "black",
    display: "flex",
    '& li:hover' :{
      backgroundColor:'#dfb8a4',
      borderRadius: '4px'
    },
    "& span": {
      "& span": {
        backgroundColor: "#ff7043",
      },
    },
  },
  navItem: {
    display: "inline-block",
    margin: "2rem 1rem",
    fontSize: "16px",
    cursor: "pointer",
    '& a.active':{
        color:'#ef5350'
    },
  },
  navLink: {
    textDecoration: "none",
    color: "black",
  },
  rightConatiner: {
    display: "flex",
    marginLeft: "auto",
    padding: "0 2rem",
  },
  searchProducts: {
    margin: "auto",
    fontSize: "16px",
    cursor: "pointer",
    borderBottom: "1px solid black",
  },
  shopingIcon: {
    cursor: "pointer",
    margin: "auto",
  },
  searchIcon: {
    background: "none",
    border: "#e3d2c9",
  },
  searchInput: {
    padding: "6px",
    marginTop: "8px",
    border: "none",
    backgroundColor: "#e3d2c9",
    fontSize: "16px",
    color: "black",
    fontWeight: "bold",
  },
  logoImage: {
    width: "130px",
    height: "120px",
    zIndex: 5,
    position: "absolute",
    top: 0,
    left: 0,
  },
  "css-jcn4dz-MuiBadge-badge": {
    backgroundColor: "#ef5350",
  },
  
});

const Header = () => {
  const classes = useStyles();

  return (
    <nav className={classes.navContainer}>
      <img src={logoImage} alt="" className={classes.logoImage} />
      <div className={classes.navContent}>
        <ul className={classes.navBar}>
          <li className={classes.navItem}>
            <NavLink className={classes.navLink} to="/">Home</NavLink>
          </li>
          <li className={classes.navItem}>
            <NavLink className={classes.navLink} to="/product">Product</NavLink>
          </li>
          <li className={classes.navItem}>
            <NavLink className={classes.navLink} to="/about">About</NavLink>
          </li>
          <li className={classes.navItem}>
            <NavLink className={classes.navLink} to="/page">Page</NavLink>
          </li>
          <li className={classes.navItem}>
            <NavLink className={classes.navLink} to="/blog">Blog</NavLink>
          </li>
          <li className={classes.navItem}>
            <NavLink className={classes.navLink} to="/contact">Contact</NavLink>
          </li>
        </ul>
        <div className={classes.rightConatiner}>
          <div className={classes.searchProducts}>
            <form action="">
              <input className={classes.searchInput} type="text" placeholder="Search Product" name="search"></input>
              <button className={classes.searchIcon} type="submit">
                <SearchIcon />
              </button>
            </form>
          </div>
          <li className={classes.navItem}>
            <NavLink className={classes.navLink} to="/myAccount">My Account</NavLink>
          </li>
          <Badge className={classes.shopingIcon}
            badgeContent={"0"}
            color="secondary">
            <ShoppingBagIcon className={classes.shopingIcon} />
          </Badge>
        </div>
      </div>
    </nav>
  );
};

export default Header;
