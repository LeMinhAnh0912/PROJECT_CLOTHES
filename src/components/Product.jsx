import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <div className="product">
      <h2>{product.name}</h2>
      <p>{product.price} VND</p>
      <img src={product.image} alt="error" />

      <Link to={`/product/${product.id}`}>Xem Chi Tiết</Link>
    </div>
  );
};

export default Product;
