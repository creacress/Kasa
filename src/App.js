// Import de React, BrowserRouter, Routes et Route depuis la bibliothèque react-router-dom
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Import du fichier de styles main.css
import "./main.css";
// Import des composants de pages
import Home from "./pages/Home";
import About from "./pages/About";
import Lodgment from "./pages/Lodgment";
import Error from "./pages/Error";

// Composant App : représente le composant racine de l'application
function App() {
  return (
    <BrowserRouter> {/* Utilisation du composant BrowserRouter pour gérer la navigation */}
      <Routes> {/* Utilisation du composant Routes pour définir les routes */}
        <Route path="/" element={<Home />} /> {/* Route pour la page d'accueil */}
        <Route path="/about" element={<About />} /> {/* Route pour la page "A Propos" */}
        <Route path="/lodgment/:id" element={<Lodgment />} /> {/* Route pour une page d'hébergement spécifique */}
        <Route path="*" element={<Error />} /> {/* Route pour toutes les autres URL (erreur 404) */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
