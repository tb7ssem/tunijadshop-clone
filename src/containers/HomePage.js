import React from "react";
import Header from "../components/Header";
import ProductsSection from "../components/ProductsSection";
import CTAButtons from "../components/CTAButtons";
import Footer from "../components/Footer";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <main>
        <ProductsSection />
        <CTAButtons />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
