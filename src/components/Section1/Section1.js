import React, { useState, useEffect } from "react";
import "./section1.scss";
import img4 from "../../img/image4.webp";
import { storage } from "../../firebaseConfig/firebase.config";
import { ref, getDownloadURL } from "firebase/storage";

const Section1 = ({ section1LangArr }) => {
  const [image1, setImage1] = useState();
  const [image2, setImage2] = useState();
  const [image3, setImage3] = useState();
  const [image4, setImage4] = useState();
  const [image5, setImage5] = useState();
  const [image6, setImage6] = useState();
  const [image7, setImage7] = useState();
  const [image8, setImage8] = useState();

  useEffect(() => {
    const img1Ref = ref(storage, "gasCompany/image1.webp");
    getDownloadURL(img1Ref).then((url) => {
      setImage1(url);
    });

    const img2Ref = ref(storage, "gasCompany/image2.webp");
    getDownloadURL(img2Ref).then((url) => {
      setImage2(url);
    });

    const img3Ref = ref(storage, "gasCompany/image3.webp");
    getDownloadURL(img3Ref).then((url) => {
      setImage3(url);
    });

    const img4Ref = ref(storage, "gasCompany/image41.webp");
    getDownloadURL(img4Ref).then((url) => {
      setImage4(url);
    });

    const img5Ref = ref(storage, "gasCompany/image5.webp");
    getDownloadURL(img5Ref).then((url) => {
      setImage5(url);
    });

    const img6Ref = ref(storage, "gasCompany/image6.webp");
    getDownloadURL(img6Ref).then((url) => {
      setImage6(url);
    });

    const img7Ref = ref(storage, "gasCompany/image7.webp");
    getDownloadURL(img7Ref).then((url) => {
      setImage7(url);
    });

    const img8Ref = ref(storage, "gasCompany/image8.webp");
    getDownloadURL(img8Ref).then((url) => {
      setImage8(url);
    });
  }, []);

  return (
    <div id="aboutUs" className="section1">
      {section1LangArr?.map((item, index) => (
        <div key={index} className="wrapper">
          <div className="box1">
            <img className="aboutImg" src={img4} alt="img4" />
            <div className="text1 font-face-gm">
              <h2>{item.title1}</h2>
              <p>{item.text1}</p>
            </div>
          </div>
          <div id="portfolio" className="box2">
            <h2 className="font-face-gm">{item.title2}</h2>
            <div className="box2-cont">
              <div className="text2 font-face-gm">
                <p>{item.text2}</p>
              </div>
              <div className="picture-cont">
                <div className="pic-box hidden-box"></div>
                <img className="pic-box" src={image1} alt="image1Webp" />
                <img className="pic-box" src={image2} alt="image2Webp" />
                <div className="pic-box hidden-box"></div>
                <img className="pic-box" src={image3} alt="image3Webp" />
                <img className="pic-box" src={image4} alt="image4Webp" />
                <img className="pic-box" src={image5} alt="image5Webp" />
                <img className="pic-box" src={image6} alt="image6Webp" />
                <div className="pic-box hidden-box"></div>
                <img className="pic-box" src={image7} alt="image7Webp" />
                <img className="pic-box" src={image8} alt="image8Webp" />
                <div className="pic-box hidden-box"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Section1;
