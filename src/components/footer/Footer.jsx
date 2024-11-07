import React from "react";
import { useTranslation } from "react-i18next";
import "./Footer.css";

export default function Footer() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <footer className="footer" dir={isArabic ? "rtl" : "ltr"}>
      <div className="footer-content">
        <div className="footer-section">
          <h4>{t("footer.ourBrands")}</h4>
          <ul>
            {t("footer.brandsList", { returnObjects: true }).map(
              (brand, index) => (
                <li key={index}>{brand}</li>
              )
            )}
          </ul>
        </div>
        <div className="footer-section">
          <h4>{t("footer.ourProducts")}</h4>
          <ul>
            {t("footer.productsList", { returnObjects: true }).map(
              (product, index) => (
                <li key={index}>{product}</li>
              )
            )}
          </ul>
        </div>
        <div className="footer-section">
          <h4>{t("footer.moreProducts")}</h4>
          <ul>
            {t("footer.moreProductsList", { returnObjects: true }).map(
              (moreProduct, index) => (
                <li key={index}>{moreProduct}</li>
              )
            )}
          </ul>
        </div>
        <div className="footer-section">
          <h4>{t("footer.tools")}</h4>
          <ul>
            {t("footer.toolsList", { returnObjects: true }).map(
              (tool, index) => (
                <li key={index}>{tool}</li>
              )
            )}
          </ul>
        </div>
        <div className="footer-section">
          <h4>{t("footer.aboutUs")}</h4>
          <ul>
            {t("footer.aboutUsList", { returnObjects: true }).map(
              (about, index) => (
                <li key={index}>{about}</li>
              )
            )}
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          {t("footer.cookieMessage")} <a href="#">{t("footer.cookiePolicy")}</a>
          .
        </p>
      </div>
    </footer>
  );
}
