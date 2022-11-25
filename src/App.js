import React from "react";
import "./App.css";
import BestFurnitureManufacture from "./BestFurnitureManufacture";
import Header from "./Header";
import MainImage from "./MainImage.js";
import PopularProduct from "./PopularProductComponent/PopularProduct.js";
import LikeProduct from "./LikeProductsComponent/LikeProduct.js";
import SocialNetworkInspired from "./SocialInspiration.js";
import TopPick from "./TopPickComponent/TopPick.js";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <MainImage />
      <PopularProduct />
      <BestFurnitureManufacture />
      <LikeProduct />
      <SocialNetworkInspired />
      <TopPick />
      <Footer />
    </div>
  );
}

export default App;
