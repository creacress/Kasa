// Import de React
import React from "react";

// Composant LodgmentTags : affiche les tags d'un hébergement sous forme d'une liste
function LodgmentTags(props) {
  return (
    <ul className="lodgment_tags">
      {props.tags.map((tag, idx) => {
        return (
          <li className="lodgment_tag" key={idx}>
            {tag}
          </li>
        );
      })}
    </ul>
  );
}

export default LodgmentTags;

