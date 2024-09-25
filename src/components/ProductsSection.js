import React from "react";
import "./ProductsSection.css";

const ProductsSection = () => {
  const categories = [
    {
      name: "Accessoires et Périphériques",
      image: "/images/accessories.jpg",
      count: "32 produit",
    },
    {
      name: "Accessoires Téléviseurs",
      image: "/images/tv-accessories.jpg",
      count: "4 produit",
    },
    {
      name: "ANDROID TV BOX",
      image: "/images/android-tv-box.jpg",
      count: "1 produit",
    },
    {
      name: "Cables & Adaptateurs",
      image: "/images/cables.jpg",
      count: "6 produit",
    },
  ];

  const products = [
    {
      id: 1,
      name: "SUPPORT MURAL MOBILE HOME",
      price: "35,000 د.ت",
      oldPrice: "45,000 د.ت",
      image: "/images/support-mural.jpg",
    },
    {
      id: 2,
      name: "SUPPORT MURAL FIXE POUR TV",
      price: "22,000 د.ت",
      oldPrice: "30,000 د.ت",
      image: "/images/support-tv.jpg",
    },
    {
      id: 3,
      name: "ÉCOUTEURS BLUETOOTH",
      price: "89,000 د.ت",
      oldPrice: "100,000 د.ت",
      image: "/images/ecouteurs.jpg",
    },
    {
      id: 4,
      name: 'TV Orient 32" Avec TNT',
      price: "369,000 د.ت",
      oldPrice: "400,000 د.ت",
      image: "/images/tv-orient.jpg",
    },
    // Add more products as needed
  ];

  return (
    <section className="products-section">
      <div className="category-grid">
        {categories.map((category, index) => (
          <div key={index} className="category-item">
            <img src={category.image} alt={category.name} />
            <h3>{category.name}</h3>
            <p>{category.count}</p>
          </div>
        ))}
      </div>

      <h2>Les Bonnes Affaires</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="old-price">{product.oldPrice}</p>
            <p className="price">{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
