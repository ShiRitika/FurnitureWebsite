import React from 'react';
import BestFurnitureManufacture from '../Components/BestFurnitureManufacture.js';
import Header from '../Components/Header.js';
import MainImage from '../Components/MainImage.js';
import PopularProduct from '../Components/PopularProduct.js';
import LikeProduct from '../Components/LikeProduct.js';
import SocialNetworkInspired from '../Components/SocialInspiration.js';
import TopPick from '../Components/TopPick.js';
import Footer from '../Components/Footer.js';

const Home = () => {
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
