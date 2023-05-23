// Import de React
import React from "react";

// Composant LodgmentsHost : affiche le nom de l'hôte et son image
function LodgmentsHost(props) {
  return (
    <div className="host">
      <p className="host_name">{props.host.name}</p>
      <img className="host_img" src={props.host.picture} alt="host" />
    </div>
  );
}

export default LodgmentsHost;
