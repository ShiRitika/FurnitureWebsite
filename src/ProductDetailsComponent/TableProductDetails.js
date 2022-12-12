import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import HeaderImage from './HeaderImage';
import BuyProduct from './BuyProduct';
import Review from './Review';

const protocol = 'http';
const host = 'localhost';
const port = 8000;
const urlConfiguration = {
  getProduct: 'table',
};
const apiURL = `${protocol}://${host}:${port}/${urlConfiguration.getProduct}`;

const TableProductDetails = () => {
  const [product, setProduct] = useState([]);

  const fetchData = () => axios.get(apiURL).then((response) => {
    setProduct(response.data);
  });

  useEffect(() => {
    fetchData();
  }, []);

  const filterProducts = (id) => {
    const newID = parseInt(id);
    const singleProduct = product.filter((object) => object.id === newID);
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

export default TableProductDetails;
