import React from "react";
import BestFurnitureManufacture from "../Components/BestFurnitureManufacture";
import Header from "../Components/Header";
import MainImage from "../Components/MainImage";
import PopularProduct from "../Components/PopularProduct";
import LikeProduct from "../Components/LikeProduct";
import SocialNetworkInspired from "../Components/SocialInspiration";
import TopPick from "../Components/TopPick";
import Footer from "../Components/Footer";

function Home() {
  return (
    <div>
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

export default Home;
