import React from "react";
import Product from "./Product";

const ProductHome = ({ products }) => {
  // Phân loại sản phẩm theo danh mục
  const bestSellingProducts = products.filter(
    (product) => product.category === "best-seller"
  );
  const newProducts = products.filter((product) => product.category === "new");
  const recommendedProducts = products.filter(
    (product) => product.category === "recommended"
  );
  const specialOfferProducts = products.filter(
    (product) => product.category === "special-offer"
  );

  return (
    <div>
      <div className="tilte-seemore">
        <h4>Best Selling Products:</h4>
      </div>
      <div className="product-list">
        {bestSellingProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>

      <div className="tilte-seemore">
        <h4>New Products:</h4>
      </div>
      <div className="product-list-1">
        {newProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>

      <div className="tilte-seemore">
        <h4>Recommended Products:</h4>
      </div>
      <div className="product-list-2">
        {recommendedProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>

      <div className="tilte-seemore">
        <h4>Special Offer</h4>
      </div>
      <div className="product-list-3">
        {specialOfferProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductHome;
