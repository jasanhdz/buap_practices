import React from "react";
import "./styles/header.css";
import logoTwitter from "../assets/twitter.svg";
import logoInstagram from "../assets/instagram.svg";
import logoGithub from "../assets/github.svg";
import logoLinkedin from "../assets/linkedin.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
      <div className="Header__group">
        <Link to="//www.twitter.com/@jasanhdz" target="_blank">
          <img className="Header__group-logo" src={logoTwitter} alt="twitter" />
        </Link>
        <Link to="//www.instagram.com/jasanhdz" target="_blank">
          <img
            className="Header__group-logo"
            src={logoInstagram}
            alt="instagram"
          />
        </Link>
        <Link to="//www.github.com/JasanHdz" target="_blank">
          <img className="Header__group-logo" src={logoGithub} alt="github" />
        </Link>
        <Link to="//linkedin.com/in/jasanhdz/" target="_blank">
          <img
            className="Header__group-logo"
            src={logoLinkedin}
            alt="linkedin"
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;
