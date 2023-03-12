import React from "react";

function Card({ src, name, id }) {
  return (
    <li className="card">
      <div className="view front-view">
        <img src="/images/que_icon.svg" alt="icon" />
      </div>
      <div className="view back-view">
        <img src={src} alt="card-img" name={name} id={id} />
      </div>
    </li>
  );
}

export default Card;
