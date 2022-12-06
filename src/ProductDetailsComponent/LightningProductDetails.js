import React, { useState, useEffect } from "react";
import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";
import HeaderImage from "./HeaderImage.js";
import BuyProduct from "./BuyProduct.js";
import Review from "./Review.js";
import { useParams } from "react-router-dom";
import axios from "axios";

const protocol = "http";
const host = "localhost";
const port = 8000;
const url_configuration = {
  getProduct: "lightning",
};
const apiURL = `${protocol}://${host}:${port}/${url_configuration.getProduct}`;

function LightningProductDetails() {
  const [product, setProduct] = useState([]);

  const fetchData = () => {
    return axios.get(apiURL).then((response) => {
      setProduct(response.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filterProducts = (id) => {
    const newID = parseInt(id);
    const singleProduct = product.filter((object) => {
      return object.id === newID;
    });
    return singleProduct;
  };

  const params = useParams();
  const { id } = params;
  const finalProduct = filterProducts(id);

  return (
    <div>
      <Header />
      <HeaderImage />
      <BuyProduct data={finalProduct} />
      <Review />
      <Footer />
    </div>
  );
}

export default LightningProductDetails;
