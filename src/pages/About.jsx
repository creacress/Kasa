// Import de React depuis la bibliothèque React
import React from "react";
// Import des composants nécessaires depuis des fichiers locaux
import Banner from "../components/Banner";
import Collapse from "../components/Collapse/Collapse";
import Footer from "../components/Footer";
import Header from "../components/Header";
import aboutCollapse from "../components/Collapse/aboutCollapse.json";

// Composant About : représente la page "A Propos"
function About() {
  // Rendu du composant
  return (
    <div className="about">
      <Header /> {/* Affiche le composant Header */}
      <main>
        <Banner origin="about" /> {/* Affiche le composant Banner avec l'origine "about" */}
        <section className="dropdown">
          {
            // voici un commentaire
          }
          {aboutCollapse.map((text, idx) => {
            return (
              <Collapse
                title={text.title}
                key={idx}
                description={text.description}
                class="dropdown_container"
              />
            );
          })}
        </section>
      </main>
      <Footer /> {/* Affiche le composant Footer */}
    </div>
  );
}

export default About;
