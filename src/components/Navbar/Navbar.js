import React, { useState } from "react";
import logo from "../../img/logo.png";
import hamburger from "../../img/hamburger.png";
import globe from "../../img/globe.png";

const Navbar = ({ navbar, getLang, lang, setLang }) => {
  const [active, setActive] = useState(false);

  return (
    <div className="navbar">
      <div className={active ? "wrapper active" : "wrapper"}>
        <img className="logo" src={logo} alt="logoPng" />
        <ul className="font-face-gm">
          <li>
            <a href="#home">{navbar.h_main}</a>
          </li>
          <li>
            <a href="#aboutUs">{navbar.h_aboutUs}</a>
          </li>
          <li>
            <a href="#portfolio">{navbar.h_portfolio}</a>
          </li>
          <li>
            <a href="#services">{navbar.h_service}</a>
          </li>
          <li>
            <a href="#contacts">{navbar.h_contact}</a>
          </li>
          <li className="li-xbtn">
            <button onClick={() => setActive(!active)} className="xbtn">
              X
            </button>
          </li>
        </ul>
        <div className="cont-wrapper">
          <div className="cont">
            <img src={globe} alt="globeIcon" />
            <select
              value={lang}
              onChange={(e) => {
                setLang(e.target.value);
                getLang(e.target.value);
              }}
              className="select-lang decorated"
            >
              <option value="ru">Ру</option>
              <option value="uz">Uz</option>
              <option value="eng">Eng</option>
            </select>
          </div>
          <img
            onClick={() => setActive(!active)}
            className="hamburger"
            src={hamburger}
            alt="hamburgerPng"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
