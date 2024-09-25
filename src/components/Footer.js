import React from "react";
import Logo from "./Logo";
import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-logo">
        <Logo />
        <p>STE TUNIJAD SHOP</p>
      </div>
      <div className="footer-contact">
        <p>Vous avez des questions ? Appelez-nous !</p>
        <p className="phone-number">58 888 757 / 58 88 06 05</p>
      </div>
      <div className="footer-links">
        <h3>Liens utiles</h3>
        <ul>
          <li>
            <a href="/">Accueil</a>
          </li>
          <li>
            <a href="/boutique">Boutique</a>
          </li>
          <li>
            <a href="/liste-de-souhaits">Liste de souhaits</a>
          </li>
          <li>
            <a href="/mon-compte">Mon compte</a>
          </li>
          <li>
            <a href="/panier">Panier</a>
          </li>
          <li>
            <a href="/politique-de-confidentialite">
              Politique de confidentialité
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
      <p>© Tunijad Shop - All Rights Reserved</p>
    </div>
  </footer>
);

export default Footer;
