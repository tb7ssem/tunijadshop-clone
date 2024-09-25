import React from "react";
import "./CategoryGrid.css";

const CategoryGrid = () => {
  const categories = [
    {
      name: "Abonnement",
      image: "/images/abonnement.jpg",
      count: "27 produit",
    },
    {
      name: "Accessoires et Périphériques",
      image: "/images/accessories.jpg",
      count: "32 produit",
    },
    // Add more categories...
  ];

  return (
    <div className="category-grid">
      {categories.map((category, index) => (
        <div key={index} className="category-item">
          <img src={category.image} alt={category.name} />
          <h3>{category.name}</h3>
          <p>{category.count}</p>
        </div>
      ))}
    </div>
  );
};

export default CategoryGrid;
