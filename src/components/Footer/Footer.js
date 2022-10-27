import React from "react";
import "./footer.scss";
import footerLogo from "../../img/footer-logo.png";
import footerHome from "../../img/footer-home.png";
import footerPhone from "../../img/footer-phone.png";
import footerEmail from "../../img/footer-email.png";
import footerC from "../../img/footer-c.png";

const Footer = ({ footerLangArr }) => {
  return (
    <div id="contacts" className="footer">
      {footerLangArr?.map((item, index) => (
        <div key={index} className="wrapper">
          <div className="footer-container">
            <div className="footer-info font-face-gm">
              <img src={footerLogo} alt="footerLogoPng" />
              <p>{item.text}</p>
            </div>
            <div className="category font-face-gm">
              <h3>{item.category}</h3>
              <ul>
                <li>
                  <a href="#">{item.home}</a>
                </li>
                <li>
                  <a href="#">{item.about}</a>
                </li>
                <li>
                  <a href="#">{item.service}</a>
                </li>
                <li>
                  <a href="#">{item.portfolio}</a>
                </li>
              </ul>
            </div>
            <div className="contact font-face-gm">
              <h3>{item.contact}</h3>
              <div className="home-cont">
                <img src={footerHome} alt="footerHomePng" />
                <p>{item.address}</p>
              </div>
              <div className="phone-cont">
                <img src={footerPhone} alt="footerPhonePng" />
                <p>{item.phone}</p>
              </div>
              <div className="email-cont">
                <img src={footerEmail} alt="footerEmailPng" />
                <p>{item.gmail}</p>
              </div>
            </div>
          </div>
          <div className="line"></div>
          <div className="c-cont">
            <img src={footerC} alt="footerCPng" />
            <p>{item.copyright}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Footer;
