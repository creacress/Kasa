// Import de react //
import React from "react";
// Import hook useState de React //
import { useState } from "react";
// Import des flèches //
import { ReactComponent as ArrowLeft} from "./arrowleft.svg";
import { ReactComponent as ArrowRight} from "./arrowright.svg";

// Composant pour le carrousel //
function Slideshow(props) {
  //Actuelle slide //
  const [currentSlide, setCurrentSlide] = useState(0)
  const arrayLenght = props.pictures.flatMap(el => el.pictures).length;
// Première image sans click //
  function prevSlide() {

   
    
      <ArrowLeft className={() => (arrayLenght >= 1 ? "arrowNoDisplay" : "")}/>
    
   
    let newSlide = currentSlide === 0 ? arrayLenght - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  }
  // Au click passage du slid //
  function nextSlide() {
    // Si current est égale à arrayLenght moins 1 alors 0
    let newSlide = currentSlide === arrayLenght - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  }
  return (
    // Création de la section qui acceuilleras les slides //
    <section className="slideshow_container">
      <div className="slideshow_navigation"> 
        <ArrowLeft className="arrow" onClick={() => {prevSlide()}} />
        <ArrowRight className="arrow" onClick={() => {nextSlide()}} />
      </div>
      {props.pictures.map((picture, index) => {
        return (
          <img src={picture} alt="" key={index} className={index === currentSlide ? "slideshow_img" : "hide_img"} />
        )
      })}
      <div className="slideshow_text">{currentSlide + 1}/{props.pictures.length}</div>
    </section>
  )
}

export default Slideshow;
