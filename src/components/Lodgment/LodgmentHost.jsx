import React from "react";
// Permet d'afficher le nom de l'hote //
function LodgmentsHost(props) {
  return (
    <div className="host">
      <p className="host_name">{props.host.name}</p>
      <img className="host_img" src={props.host.picture} alt="host" />
    </div>
  );
}

export default LodgmentsHost;
