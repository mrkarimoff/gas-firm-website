import React, { useState, useEffect } from "react";
import { db } from "./firebaseConfig/firebase.config";
import { ref, onValue } from "firebase/database";
import Header from "./components/Header/Header";
import Carousel from "./components/Carousel/Carousel";
import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";
import Section3 from "./components/Section3.js/Section3";
import Footer from "./components/Footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";

const App = () => {
  const [headerInfo, setHeaderInfo] = useState([]);
  const [headerLangArr, setHeaderLangArr] = useState();
  const [defHeaderLangArr, setDefHeaderLangArr] = useState();

  const [companyInfo, setCompanyInfo] = useState([]);
  const [defCarouselArr, setDefCarouselArr] = useState();
  const [carouselLangArr, setCarouselLangArr] = useState();

  const [section1, setSection1] = useState([]);
  const [defSection1Arr, setDefSection1Arr] = useState();
  const [section1LangArr, setSection1LangArr] = useState();

  const [section2, setSection2] = useState([]);
  const [defSection2Arr, setDefSection2Arr] = useState();
  const [section2LangArr, setSection2LangArr] = useState();

  const [section3, setSection3] = useState([]);
  const [defSection3Arr, setDefSection3Arr] = useState();
  const [section3LangArr, setSection3LangArr] = useState();

  const [footer, setFooter] = useState([]);
  const [defFooterArr, setDefFooterArr] = useState();
  const [footerLangArr, setFooterLangArr] = useState();

  useEffect(() => {
    const footerRef = ref(db, "footer");
    onValue(footerRef, (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        arr.push({ lang: item.key, arr: item.val() });
      });
      let arr2 = arr.filter((item) => item.lang === "ru");
      setDefFooterArr(arr2[0].arr);
      setFooter(arr);
    });
  }, []);

  useEffect(() => {
    const section3Ref = ref(db, "section3");
    onValue(section3Ref, (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        arr.push({ lang: item.key, arr: item.val() });
      });
      let arr2 = arr.filter((item) => item.lang === "ru");
      setDefSection3Arr(arr2[0].arr);
      setSection3(arr);
    });
  }, []);

  useEffect(() => {
    const section2Ref = ref(db, "section2");
    onValue(section2Ref, (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        arr.push({ lang: item.key, arr: item.val() });
      });
      let arr2 = arr.filter((item) => item.lang === "ru");
      setDefSection2Arr(arr2[0].arr);
      setSection2(arr);
    });
  }, []);

  useEffect(() => {
    const section1Ref = ref(db, "section1");
    onValue(section1Ref, (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        arr.push({ lang: item.key, arr: item.val() });
      });
      let arr2 = arr.filter((item) => item.lang === "ru");
      setDefSection1Arr(arr2[0].arr);
      setSection1(arr);
    });
  }, []);

  useEffect(() => {
    const companyInfoRef = ref(db, "companyInfo");
    onValue(companyInfoRef, (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        arr.push({ lang: item.key, arr: item.val() });
      });
      let arr2 = arr.filter((item) => item.lang === "ru");
      setDefCarouselArr(arr2[0].arr);
      setCompanyInfo(arr);
    });
  }, []);

  useEffect(() => {
    const headerInfoRef = ref(db, "headerInfo");
    onValue(headerInfoRef, (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        arr.push({
          id: item.key,
          ...item.val(),
        });
      });
      let arr2 = arr.filter((item) => item.id === "ru");
      setDefHeaderLangArr(arr2);
      setHeaderInfo(arr);
    });
  }, []);

  function getLang(language) {
    let arr = headerInfo.filter((item) => item.id === language);
    setHeaderLangArr(arr);

    let arrCarousel = companyInfo.filter((item) => item.lang === language);
    setCarouselLangArr(arrCarousel[0].arr);

    let arrSection1 = section1.filter((item) => item.lang === language);
    setSection1LangArr(arrSection1[0].arr);

    let arrSection2 = section2.filter((item) => item.lang === language);
    setSection2LangArr(arrSection2[0].arr);

    let arrSection3 = section3.filter((item) => item.lang === language);
    setSection3LangArr(arrSection3[0].arr);

    let arrFooter = footer.filter((item) => item.lang === language);
    setFooterLangArr(arrFooter[0].arr);
  }

  return (
    <div>
      <Header
        getLang={getLang}
        headerLangArr={headerLangArr ? headerLangArr : defHeaderLangArr}
      />
      <Carousel
        carouselLangArr={carouselLangArr ? carouselLangArr : defCarouselArr}
      />
      <Section1
        section1LangArr={section1LangArr ? section1LangArr : defSection1Arr}
      />
      <Section2
        section2LangArr={section2LangArr ? section2LangArr : defSection2Arr}
      />
      <Section3
        section3LangArr={section3LangArr ? section3LangArr : defSection3Arr}
      />
      <Footer footerLangArr={footerLangArr ? footerLangArr : defFooterArr} />
    </div>
  );
};

export default App;
