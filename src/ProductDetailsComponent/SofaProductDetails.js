import React from "react";
import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";
import HeaderImage from "./HeaderImage.js";
import BuyProduct from "./BuyProduct.js";
import Review from "./Review.js";

function SofaProductDetails() {
  return (
    <div>
      <Header />
      <HeaderImage />
      <BuyProduct />
      <Review />
      <Footer />
    </div>
  );
}

export default SofaProductDetails;
