// Import de React, useState et useEffect depuis la bibliothèque React
import React, { useState, useEffect } from "react";
// Import d'axios pour effectuer des requêtes HTTP
import axios from "axios";
// Import du composant Header depuis un fichier local
import Header from "../components/Header";
// Import du composant Footer depuis un fichier local
import Footer from "../components/Footer";
// Import du composant Error depuis un fichier local
import Error from "./Error";
// Import du composant Slideshow depuis un fichier local
import Slideshow from "../components/Gallery/Slideshow";
// Import du composant Collapse depuis un fichier local
import Collapse from "../components/Collapse/Collapse";
// Import du composant LodgmentHost depuis un fichier local
import LodgmentHost from "../components/Lodgment/LodgmentHost";
// Import du composant LodgmentRatings depuis un fichier local
import LodgmentRatings from "../components/Lodgment/LodgmentRatings";
// Import du composant LodgmentTags depuis un fichier local
import LodgmentTags from "../components/Lodgment/LodgmentTags";
// Import du composant LodgmentTitle depuis un fichier local
import LodgmentTitle from "../components/Lodgment/LodgmentTitle";

// Composant Lodgment : représente une page d'hébergement spécifique
function Lodgment() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const lodgmentId = window.location.pathname.substring(10);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("../hotels.json");
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        setError(true);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <Error />;
  }

  const lodgment = data.find((item) => item.id === lodgmentId);
  // Si aucun hébergement correspondant n'est trouvé, affichage du composant Error
  if (!lodgment) return <Error />;

  // Rendu du composant
  return (
    <div className="lodgment">
      <Header /> {/* Affiche le composant Header */}
      <main key={lodgment.id}>
        <Slideshow pictures={lodgment.pictures} /> {/* Affiche le composant Slideshow avec les images de l'hébergement */}
        <section className="lodgment_body">
          <div className="lodgment_wrapper">
            <div className="lodgment_info">
              <LodgmentTitle
                title={lodgment.title}
                location={lodgment.location}
              /> {/* Affiche le composant LodgmentTitle avec le titre et l'emplacement de l'hébergement */}
              <LodgmentTags tags={lodgment.tags} /> {/* Affiche le composant LodgmentTags avec les tags de l'hébergement */}
            </div>
            <div className="lodgment_host">
              <LodgmentHost host={lodgment.host} /> {/* Affiche le composant LodgmentHost avec les informations sur l'hôte de l'hébergement */}
              <LodgmentRatings ratings={lodgment.rating} /> {/* Affiche le composant LodgmentRatings avec les évaluations de l'hébergement */}
            </div>
          </div>
          <div className="lodgment_details">
            <Collapse
              title="Description"
              description={lodgment.description}
              class="dropdown_lodgment"
            ></Collapse> {/* Affiche le composant Collapse avec le titre "Description" et la description de l'hébergement */}
            <Collapse
              title="Équipements"
              description={lodgment.equipments}
              class="dropdown_lodgment"
            ></Collapse> {/* Affiche le composant Collapse avec le titre "Équipements" et les équipements de l'hébergement */}
          </div>
        </section>
      </main>
      <Footer /> {/* Affiche le composant Footer */}
    </div>
  );
}

export default Lodgment;
