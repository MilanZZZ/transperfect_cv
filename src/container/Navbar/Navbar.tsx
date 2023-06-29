import { useState } from "react";
import i18n from "i18next";
import { images } from "../../constants";

import "./Navbar.scss";

const Navbar = () => {
  const [langOpen, setLangOpen] = useState(false);
  const [chosenLang, setChosenLang] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="nav">
      <div className="nav__container">
        <div>
          <div className="nav__avatar">
            <img src={images.Avatar} alt="avatar" />
          </div>
          <div className="name__nav_container">
            <h1 className="nav__name">Milan Živković</h1>
            <p className="nav__subtitle">Software Engineer</p>
          </div>
        </div>
        <div
          className="image__dif"
          onClick={() => setLangOpen((prev) => !prev)}
        >
          <img src={chosenLang ? images.Srb : images.UK} alt="eng-srb" />
        </div>
        {langOpen ? (
          <div className="lang__modal">
            <div
              onClick={() => {
                setChosenLang(false);
                changeLanguage("en");
                setLangOpen(false);
              }}
            >
              <img src={images.UK} alt="eng-srb" />
            </div>
            <div
              onClick={() => {
                setChosenLang(true);
                changeLanguage("sr");
                setLangOpen(false);
              }}
            >
              <img src={images.Srb} alt="eng-srb" />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
