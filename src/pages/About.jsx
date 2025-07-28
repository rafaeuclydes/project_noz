import React from "react";
import { imagesArray } from "../assets/products";
import Content from "../components/Content";

const About = () => {
  return (
    <div className="about">
      <div className="about__texts">
        <h2 className="about__title">NOZ | Cozinha feita à mão</h2>
        <h3 className="about__noz">Conheça a Noz</h3>
        <p className="about__text-noz">
          Desde 2020, somos uma marca artesanal que une praticidade, nutrição,
          sustentabilidade e afeto. <br />
          <br />
          Trabalhamos com granolas doces e salgadas, em potes de vidro
          reutilizáveis, pacotes avulsos, combos e box de presente - tudo feito
          à mão e sem plástico. <br />
          <br />
          <p className="about__span1">
            🌎 Enviamos para todo o Brasil. <br />
            (frete sob consulta).
          </p>
          <br />
          <p className="about__span2">
            NOZ é presença - no sabor, no <br /> cuidado e no Impacto.
          </p>
        </p>
      </div>

      {imagesArray
        .filter((item) => [7].includes(item.id))
        .map((item) => (
          <Content key={item.id} image={item.image} variant="about" />
        ))}
    </div>
  );
};

export default About;
