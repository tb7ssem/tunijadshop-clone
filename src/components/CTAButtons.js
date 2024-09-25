import React from "react";
import { Link } from "react-router-dom";
import "./CTAButtons.css";

const CTAButtons = () => (
  <div className="cta-buttons">
    <Link to="/vente-adsl" className="cta-btn vente-adsl">
      Vente ADSL
    </Link>
    <Link to="/demande-technicien" className="cta-btn demande-technicien">
      Demande Technicien
    </Link>
    <Link to="/promotions" className="cta-btn promotion">
      PROMOTION
    </Link>
  </div>
);

export default CTAButtons;
