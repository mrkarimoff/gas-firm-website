import React, { useEffect, useState } from "react";
import { storage } from "../../firebaseConfig/firebase.config";
import { ref, getDownloadURL } from "firebase/storage";
import "./section3.scss";
import asset1 from "../../img/Asset1.png";
import asset2 from "../../img/Asset2.png";
import asset3 from "../../img/Asset3.png";
import asset4 from "../../img/Asset4.png";
import asset5 from "../../img/Asset5.png";
import asset6 from "../../img/Asset6.png";
import asset7 from "../../img/Asset7.png";
import asset8 from "../../img/Asset8.png";

const Section3 = ({ section3LangArr }) => {
  const [staff, setStaff] = useState([]);

  useEffect(() => {
    let arr = [];
    const staffRef = ref(storage, `gasCompany/teamPics/staff0.webp`);
    getDownloadURL(staffRef).then((url) => {
      arr.push(url);

      const staffRef = ref(storage, `gasCompany/teamPics/staff1.webp`);
      getDownloadURL(staffRef).then((url) => {
        arr.push(url);

        const staffRef = ref(storage, `gasCompany/teamPics/staff2.webp`);
        getDownloadURL(staffRef).then((url) => {
          arr.push(url);

          const staffRef = ref(storage, `gasCompany/teamPics/staff3.webp`);
          getDownloadURL(staffRef).then((url) => {
            arr.push(url);

            const staffRef = ref(storage, `gasCompany/teamPics/staff4.webp`);
            getDownloadURL(staffRef).then((url) => {
              arr.push(url);

              const staffRef = ref(storage, `gasCompany/teamPics/staff5.webp`);
              getDownloadURL(staffRef).then((url) => {
                arr.push(url);
                setStaff(arr);
              });
            });
          });
        });
      });
    });
  }, []);

  return (
    <div className="section3">
      <div className="wrapper">
        <h2 className="font-face-gm">
          {section3LangArr && section3LangArr[0].cardsTitle}
        </h2>
        <div className="card-container2">
          {section3LangArr &&
            section3LangArr[1].cards.map((card, ci) => (
              <div key={ci} className="card2 font-face-gm">
                <h3>{card.title}</h3>
                <div className="p-cont">
                  <p>{card.body}</p>
                </div>
              </div>
            ))}
        </div>
        <h2 className="font-face-gm">
          {section3LangArr && section3LangArr[2].certificateTitle}
        </h2>
        <div className="asset-container">
          <img src={asset1} alt="asset1" />
          <img src={asset2} alt="asset2" />
          <img src={asset3} alt="asset3" />
          <img src={asset4} alt="asset4" />
          <img src={asset5} alt="asset5" />
          <img src={asset6} alt="asset6" />
          <img src={asset7} alt="asset7" />
          <img src={asset8} alt="asset8" />
        </div>
        <h2 className="font-face-gm">
          {section3LangArr && section3LangArr[3].staffTitle}
        </h2>
        <div className="image-container">
          {section3LangArr &&
            section3LangArr[4].staff.map((person, pi) => (
              <div key={pi} className="image-staff font-face-gm">
                <img src={staff[pi]} alt={`staff${pi}Webp`} />
                <h5>{person.name}</h5>
                <h4>{person.position}</h4>
                <p>{person.info}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Section3;
