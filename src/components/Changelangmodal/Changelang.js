import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

import "./Changelang.css"
import { LOCALES } from "../i18n";
import viewType from "../actions";

function Changelang({ setShowChangeLang, showChangeLang  }) {
  const dispatch = useDispatch();

  const lang = useSelector((state) => state.lang);

  function handleLanguage(lang) {
    setShowChangeLang(false);
    dispatch(viewType.lang.setLang(lang));
  }

  return (
    <>
      <div
        className={
            showChangeLang ? "langmodal langmodal__animated" : "langmodal"
        }
        onClick={() => setShowChangeLang(false)}
      ></div>
      <div
        className={
            showChangeLang 
            ? "langmodal__content langmodal__content__animated"
            : "langmodal__content"
        }
      >
        <div className="langmodal__content__name">
          <h1 className="chooselang">Choose Language</h1>
          <button
            className={lang == LOCALES.ENGLISH ? "button active" : "button"}
            onClick={() => handleLanguage(LOCALES.ENGLISH)}
          >
            <h3 className="english">English</h3>
          </button>
          <button
            className={lang == LOCALES.GERMAN ? "button active" : "button"}
            onClick={() => handleLanguage(LOCALES.GERMAN)}
          >
            <h3 className="germam">German</h3>
          </button>
          <button
            className={lang == LOCALES.SPANISH? "button active" : "button"}
            onClick={() => handleLanguage(LOCALES.SPANISH)}
          >
            <h3 className="germam">Spanish</h3>
          </button>
        </div>
      </div>
    </>
  );
}

Changelang.propTypes = {
    setShowChangeLang: PropTypes.func,
    showChangeLang: PropTypes.bool,
  };

export default Changelang;