import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import About from "./Pages/About";
import Page from "./Pages/Page";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import MyAccount from "./Pages/MyAccount";
import SofaProductDetails from "./ProductDetailsComponent/SofaProductDetails";
import TableProductDetails from "./ProductDetailsComponent/TableProductDetails";
import ChairProductDetails from "./ProductDetailsComponent/ChairProductDetails";
import BedProductDetails from "./ProductDetailsComponent/BedProductDetails";
import LightningProductDetails from "./ProductDetailsComponent/LightningProductDetails";
import DecoreProductDetails from "./ProductDetailsComponent/DecoreProductDetails";
import Page404 from "./Pages/Page404";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/product" element={<Product />} />
      <Route path="/page" element={<Page />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/myAccount" element={<MyAccount />} />
      <Route path="/productDetails/sofa/:id" element={<SofaProductDetails />} />
      <Route path="/productDetails/table/:id" element={<TableProductDetails />} />
      <Route path="/productDetails/chair/:id" element={<ChairProductDetails />} />
      <Route path="/productDetails/bed/:id" element={<BedProductDetails />} />
      <Route path="/productDetails/lightning/:id" element={<LightningProductDetails />} />
      <Route path="/productDetails/decore/:id" element={<DecoreProductDetails />} />
      <Route path="/*" element={<Page404 />} />
    </Routes>
  );
}

export default App;
