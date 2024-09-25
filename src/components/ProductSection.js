import React from "react";
import { useAppContext } from "../context/AppContext";
import "./ProductSection.css";

const ProductSection = ({ title, products }) => {
  const { addToCart, addToFavorites } = useAppContext();

  return (
    <section className="product-section">
      <h2>{title}</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            {product.oldPrice && (
              <p className="old-price">{product.oldPrice}</p>
            )}
            <p className="price">{product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
            <button onClick={() => addToFavorites(product)}>♡</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
