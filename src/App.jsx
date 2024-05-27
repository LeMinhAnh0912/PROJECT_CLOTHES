import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import "./App.css";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products ")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage products={products} />} />
        <Route
          path="/product/:productId"
          element={<ProductPage products={products} />}
        />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
