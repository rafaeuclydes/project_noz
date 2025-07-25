import React from "react";
import logoNoz from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header__menu">
        <FontAwesomeIcon className="header__icon" icon={faBars} />
        <div className="header__icon__menu">
          <Link className="header__icon__menu__link" to="/">
            Home
          </Link>
          <Link className="header__icon__menu__link" to="/">
            Contato
          </Link>
        </div>
      </div>
      <Link className="header__link" to="/">
        <img className="header__link__logo" src={logoNoz} alt="Logo da Noz" />
      </Link>
    </div>
  );
};

export default Header;
