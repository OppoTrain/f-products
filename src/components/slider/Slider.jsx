import React from "react";
import bella1 from "../../assets/hero2 .png";
import bella2 from "../../assets/hero4.jpg";
import { useTranslation } from "react-i18next";
import "./Slider.css";

export default function Slider() {
  const { t } = useTranslation();

  return (
    <>
      <div
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval={3000}
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={bella1}
              className="d-block w-100"
              alt="Pastel Blue Image"
            />
            <h3 className="carousel-caption">{t("slider.caption1")}</h3>
          </div>

          <div className="carousel-item">
            <img
              src={bella2}
              className="d-block w-100"
              alt="Pastel Peach Image"
            />
            <h3 className="carousel-caption">{t("slider.caption2")}</h3>
          </div>
        </div>
      </div>
    </>
  );
}
