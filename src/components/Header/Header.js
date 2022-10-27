import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import "./header.scss";
import location from "../../img/location.png";
import phone from "../../img/phone.png";
import globe from "../../img/globe.png";

const Header = ({ getLang, headerLangArr }) => {
  const [lang, setLang] = useState("");

  return (
    <>
      {headerLangArr?.map((item) => (
        <div key={item.id} className="header font-face-gm">
          <div key={item.id} className="wrapper">
            <div className="location">
              <img src={location} alt="locationIcon" />
              <span className="address font-face-gm">{item.h_address}</span>
            </div>
            <div className="info">
              <div className="cont">
                <img src={phone} alt="phoneIcon" />
                {item.h_phone}
              </div>
              <p className="mid">|</p>
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
            </div>
          </div>
          <Navbar
            lang={lang}
            setLang={setLang}
            getLang={getLang}
            navbar={{ ...item }}
          />
        </div>
      ))}
    </>
  );
};

export default Header;
