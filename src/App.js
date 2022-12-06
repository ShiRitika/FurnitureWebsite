import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.js";
import Product from "./Pages/Product.js";
import About from "./Pages/About.js";
import Page from "./Pages/Page";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import MyAccount from "./Pages/MyAccount";
import SofaProductDetails from "./ProductDetailsComponent/SofaProductDetails.js";
import Page404 from './Pages/Page404.js';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/product" element={<Product />} />
      <Route path="/page" element={<Page />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/myAccount" element={<MyAccount />} />
      <Route path="/productDetails" element={<SofaProductDetails />} />
      <Route path="/*" element={<Page404 />} />
    </Routes>
  );
}

export default App;
