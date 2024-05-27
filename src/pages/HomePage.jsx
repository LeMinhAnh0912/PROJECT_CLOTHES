import React from "react";
import ProductHome from "../components/ProductHome";

const HomePage = ({ products }) => {
  return (
    <div>
      <h1>Trang Chủ</h1>

      <ProductHome products={products} />
    </div>
  );
};

export default HomePage;
