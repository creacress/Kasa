// Import de React
import React from "react";

// Composant Banner : affiche une bannière en fonction de l'origine
function Banner(props) {
  if (props.origin === "home") {
    // Si l'origine est "home", affiche une bannière avec un titre spécifique
    return (
      <section className="banner_home">
        <h2>Chez vous, partout et ailleurs</h2>
      </section>
    );
  } else if (props.origin === "about") {
    // Si l'origine est "about", affiche une bannière sans contenu
    return <section className="banner_about"></section>;
  }
}

export default Banner;
