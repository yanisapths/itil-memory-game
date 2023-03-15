import React from "react";

function Ans({ src, name, id }) {
  return (
    <div className="deck">
      <div className="view front-view">
        <img src="/images/que_icon.svg" alt="icon" />
      </div>
      <div className="view back-view">
        <img src={src} alt="deck-img" name={name} id={id} />
      </div>
    </div>
  );
}

export default Ans;
