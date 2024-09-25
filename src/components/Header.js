import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { useAppContext } from "../context/AppContext";
import "./Header.css";

const Header = () => {
  const { cart, favorites } = useAppContext();

  return (
    <header>
      <div className="header-content">
        <div className="header-left">
          <button className="menu-btn">☰</button>
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className="header-right">
          <button className="refresh-btn">↻</button>
          <Link to="/favorites" className="favorites-btn">
            ♡ {favorites.length}
          </Link>
          <Link to="/cart" className="cart">
            <span className="cart-icon">🛒</span>
            <span className="cart-amount">{cart.length} items</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
