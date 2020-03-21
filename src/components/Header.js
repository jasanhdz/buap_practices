import React from "react";
import "./styles/header.css";
import logoTwitter from "../assets/twitter.svg";
import logoInstagram from "../assets/instagram.svg";
import logoGithub from "../assets/github.svg";
import logoLinkedin from "../assets/linkedin.svg";

const Header = () => {
  return (
    <div className="Header">
      <div className="Header__group">
        <img className="Header__group-logo" src={logoTwitter} alt="twitter" />
        <img
          className="Header__group-logo"
          src={logoInstagram}
          alt="instagram"
        />
        <img className="Header__group-logo" src={logoGithub} alt="github" />
        <img className="Header__group-logo" src={logoLinkedin} alt="linkedin" />
      </div>
    </div>
  );
};

export default Header;
