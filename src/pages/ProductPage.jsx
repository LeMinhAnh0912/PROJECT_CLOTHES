import React from "react";
import { useParams } from "react-router-dom";

const ProductPage = ({ products }) => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId));

  if (!product) {
    return <p>Sản phẩm không tồn tại!</p>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Giá: {product.price} VND</p>
      <p>Mô tả: {product.description}</p>
    </div>
  );
};

export default ProductPage;
