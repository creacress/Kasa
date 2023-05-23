// Import de React depuis la bibliothèque React
import React from "react";

// Composant Footer : représente le pied de page de l'application
function Footer() {
  // Rendu du composant
  return (
    <footer className="footer">
      <img src={process.env.PUBLIC_URL + "/logo-white.png"} alt="Logo white" className="footer_img" />
      <p className="footer_text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;

