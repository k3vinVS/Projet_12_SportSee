import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo-site.png";
import haltereIcon from "../assets/icon-haltere.png";
import bikeIcon from "../assets/icon-bike.png";
import natationIcon from "../assets/icon-natation.png";
import yogaIcon from "../assets/icon-yoga.png";
import nameSite from "../assets/name-site.png";
import "../styles/liens.css";

const Header = () => {
  return (
    <div className="liens-container">
      <div className="liens-container_top">
        <div className="logo">
          <img src={logo} alt="logo" />
          <img src={nameSite} alt="Nom de l'application" />
        </div>
        <nav className="liens">
          {/* Link not usable for the moment */}
          <NavLink to="/" onClick={(e) => e.preventDefault()}>
            Accueil
          </NavLink>

          {/* Link to the profiles page */}
          <NavLink to="/user">Profil</NavLink>

          {/* Link not usable for the moment */}
          <NavLink to="/user/setting" onClick={(e) => e.preventDefault()}>
            Réglage
          </NavLink>

          {/* Link not usable for the moment */}
          <NavLink to="/user/community" onClick={(e) => e.preventDefault()}>
            Communité
          </NavLink>
        </nav>
      </div>
      <div className="liens-container_bottom">
        <div className="icons-container">
          <Link>
            <img src={yogaIcon} alt="icone yoga" />
          </Link>
          <Link>
            <img src={natationIcon} alt="icone natation" />
          </Link>
          <Link>
            <img src={bikeIcon} alt="icone vélo" />
          </Link>
          <Link>
            <img src={haltereIcon} alt="icone haltère" />
          </Link>
        </div>
        <div className="text-container">
          <p>Copyright, SportSee 2020</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
