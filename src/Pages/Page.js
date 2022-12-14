import React from "react";
import { makeStyles } from "@mui/styles";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const useStyles = makeStyles({
  PageHeading: {
    textAlign: "center",
    margin: "10rem",
    backgroundColor: "pink",
  },
});

function Page() {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <h1 className={classes.PageHeading}>This is Page Page</h1>
      <Footer />
    </div>
  );
}

export default Page;
