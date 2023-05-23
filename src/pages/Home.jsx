// Import de React depuis la bibliothèque React
import React from "react";
// Import du composant Header depuis un fichier local
import Header from "../components/Header";
// Import du composant Banner depuis un fichier local
import Banner from "../components/Banner";
// Import du composant Card depuis un fichier local
import Card from "../components/Card";
// Import du composant Footer depuis un fichier local
import Footer from "../components/Footer";

// Composant Home : représente la page d'accueil de l'application
function Home() {
  // Rendu du composant
  return (
    <div>
      <Header /> {/* Affiche le composant Header */}
      <main>
        <Banner origin="home" /> {/* Affiche le composant Banner avec l'origine "home" */}
        <Card /> {/* Affiche le composant Card */}
      </main>
      <Footer /> {/* Affiche le composant Footer */}
    </div>
  );
}

export default Home;
