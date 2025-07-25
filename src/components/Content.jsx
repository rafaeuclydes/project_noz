import React from "react";

const Content = ({
  image,
  title,
  description,
  variant = "",
  size,
  value,
  composition,
}) => {
  return (
    <div className={`content__container ${variant}`}>
      <img className="about__img" src={image} alt={`Imagem ${title}`} />

      <div className="content__text">
        <h3 className="content__title">{title}</h3>

        {Array.isArray(description) ? (
          description.map((paragraph, i) => (
            <p key={i} className="content__description">
              {paragraph}
            </p>
          ))
        ) : (
          <p className="content__description">{description}</p>
        )}

        {size && value && (
          <div className="content__box__value">
            <h4 className="box__value__number">
              {size} <br /> {value}
            </h4>
          </div>
        )}
        <p className="content__composition">{composition}</p>
      </div>
    </div>
  );
};

export default Content;
