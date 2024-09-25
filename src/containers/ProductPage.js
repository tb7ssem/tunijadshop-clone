import React from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { id } = useParams();

  // Fetch product details based on id
  // This is a placeholder, replace with actual data fetching logic
  const product = {
    id,
    name: "Sample Product",
    price: "$9.99",
    description: "This is a sample product.",
  };

  return (
    <div className="product-page">
      <h1>{product.name}</h1>
      <p>Price: {product.price}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductPage;
