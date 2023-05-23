// Import de React
import React from "react";
// Import du hook useState de React
import { useState } from "react";
// Import des flèches
import { ReactComponent as ArrowLeft } from "./arrowleft.svg";
import { ReactComponent as ArrowRight } from "./arrowright.svg";

// Composant Slideshow : affiche un carrousel d'images
function Slideshow(props) {
  // Actuelle slide
  const [currentSlide, setCurrentSlide] = useState(0);
  //Calcule longueur totale de 'pictures' en extrayant la propriété 'pictures' de chaque élément du tableau 'props.pictures'
  const arrayLength = props.pictures.flatMap((el) => el.pictures).length;

  // Fonction pour passer à la slide précédente
  function prevSlide() {
    // Affiche la flèche gauche seulement si arrayLength est supérieur ou égal à 1
    <ArrowLeft className={() => (arrayLength >= 1 ? "arrowNoDisplay" : "")}/>;
    
    let newSlide = currentSlide === 0 ? arrayLength - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  }

  // Fonction pour passer à la slide suivante
  function nextSlide() {
    // Si currentSlide est égal à arrayLength moins 1, passe à la première slide (0)
    let newSlide = currentSlide === arrayLength - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  }

  return (
    // Création de la section qui accueillera les slides
    <section className="slideshow_container">
      <div className="slideshow_navigation"> 
        <ArrowLeft className="arrow" onClick={() => prevSlide()} />
        <ArrowRight className="arrow" onClick={() => nextSlide()} />
      </div>
      {props.pictures.map((picture, index) => {
        return (
          <img
            src={picture}
            alt=""
            key={index}
            className={index === currentSlide ? "slideshow_img" : "hide_img"}
          />
        );
      })}
      <div className="slideshow_text">
        {currentSlide + 1}/{props.pictures.length}
      </div>
    </section>
  );
}

export default Slideshow;