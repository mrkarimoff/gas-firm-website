import React from "react";
import "./section2.scss";
import frame1 from "../../img/Frame1.svg";
import frame2 from "../../img/Frame2.svg";
import frame3 from "../../img/Frame3.svg";

const Section2 = ({ section2LangArr }) => {
  return (
    <div id="services" className="section2">
      {section2LangArr?.map((item, index) => (
        <div key={index} className="wrapper font-face-gm">
          <h2>{item.mainTitle}</h2>
          <div className="card-container">
            <div className="card font-face-gm">
              <img src={frame1} alt="frame1Svg" />
              <h3>{item.cardtitle1}</h3>
              <p>{item.cardText1}</p>
            </div>
            <div className="card font-face-gm">
              <img src={frame2} alt="frame2Svg" />
              <h3>{item.cardTitle2}</h3>
              <p>{item.cardText2}</p>
            </div>
            <div className="card font-face-gm">
              <img src={frame3} alt="frame3Svg" />
              <h3>{item.cardTitle3}</h3>
              <p>{item.cardText3}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Section2;
