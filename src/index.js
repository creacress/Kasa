// Import de React et ReactDOM
import React from "react";
import ReactDOM from "react-dom/client";
// Import du composant App depuis le fichier App.js
import App from "./App";

// Création d'une racine ReactDOM à l'élément HTML avec l'ID "root"
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendu de l'application dans la racine
root.render(
  <React.StrictMode> {/* Utilisation du mode strict de React */}
    <App /> {/* Rendu du composant App */}
  </React.StrictMode>
);
