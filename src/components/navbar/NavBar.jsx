import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faGlobe } from "@fortawesome/free-solid-svg-icons";
import Slider from "../slider/Slider";
import img from "../../assets/logo.png";
import "./Navbar.css";
import { useTranslation } from "react-i18next";
import { Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // استيراد useNavigate

// Import flag images
import englishFlag from "../../assets/en.png";
import arabicFlag from "../../assets/pl.png";
import polFlag from "../../assets/pol.png";
import rsFlag from "../../assets/rs.png";
import crFlag from "../../assets/cr.png";
import inFlag from "../../assets/in.png";
import liFlag from "../../assets/li.png";
import grFlag from "../../assets/gr.png";
import rmFlag from "../../assets/rm.png";
import slFlag from "../../assets/sl.png";
import ukFlag from "../../assets/uk.png";
import hnFlag from "../../assets/hn.png";

function NavBar() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate(); // استخدام useNavigate للتوجيه

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  // دالة لإعادة التوجيه عند النقر على اللوجو
  const handleLogoClick = () => {
    navigate("/"); // سيتم التوجيه إلى الصفحة الرئيسية
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Dropdown>
            <Dropdown.Toggle variant="light" className="icon">
              <FontAwesomeIcon icon={faGlobe} />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => changeLanguage("pol")}>
                <img src={polFlag} alt="polski" className="flag-icon" />
                polish
              </Dropdown.Item>
              <Dropdown.Item onClick={() => changeLanguage("en")}>
                <img src={englishFlag} alt="English" className="flag-icon" />
                English
              </Dropdown.Item>
              <Dropdown.Item onClick={() => changeLanguage("rs")}>
                <img src={rsFlag} alt="Russian" className="flag-icon" />
                Russian
              </Dropdown.Item>
              <Dropdown.Item onClick={() => changeLanguage("cr")}>
                <img src={crFlag} alt="Czech " className="flag-icon" />
                Czech
              </Dropdown.Item>
              <Dropdown.Item onClick={() => changeLanguage("in")}>
                <img src={inFlag} alt="indian " className="flag-icon" />
                indian
              </Dropdown.Item>
              <Dropdown.Item onClick={() => changeLanguage("li")}>
                <img src={liFlag} alt="Lithuanian " className="flag-icon" />
                Lithuanian
              </Dropdown.Item>
              <Dropdown.Item onClick={() => changeLanguage("gr")}>
                <img src={grFlag} alt="German " className="flag-icon" />
                German
              </Dropdown.Item>
              <Dropdown.Item onClick={() => changeLanguage("rm")}>
                <img src={rmFlag} alt="Romanian " className="flag-icon" />
                Romanian
              </Dropdown.Item>
              <Dropdown.Item onClick={() => changeLanguage("sl")}>
                <img src={slFlag} alt="Slovak " className="flag-icon" />
                Slovak
              </Dropdown.Item>
              <Dropdown.Item onClick={() => changeLanguage("uk")}>
                <img src={ukFlag} alt="Ukrainian " className="flag-icon" />
                Ukrainian
              </Dropdown.Item>
              <Dropdown.Item onClick={() => changeLanguage("hn")}>
                <img src={hnFlag} alt="Hungarian " className="flag-icon" />
                Hungarian
              </Dropdown.Item>
              <Dropdown.Item onClick={() => changeLanguage("ar")}>
                <img src={arabicFlag} alt="Arabic" className="flag-icon" />
                Arabic
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <div className="logo-container" onClick={handleLogoClick}>
            <img src={img} alt="Logo" className="logo" />
          </div>

          <div className="spacer"></div>

          <button className="button">{t("product")}</button>

          <FontAwesomeIcon icon={faBars} className="icon" />
        </div>
      </nav>
      <Slider />
    </>
  );
}

export default NavBar;
