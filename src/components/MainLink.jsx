import React from "react";
import { Link } from "react-router-dom";

const MainLink = ({ title, image, path }) => {
  return (
    <Link className="main__link" to={path}>
      <img className="main__link__image" src={image} alt={`Imagem ${title}`} />
      <p className="main__link__text">{title}</p>
    </Link>
  );
};

export default MainLink;
