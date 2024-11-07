import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navbar/NavBar";
import "./i18n"; // استيراد إعدادات الترجمة
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div id="root">
      <NavBar />
      <Footer />
    </div>
  );
}

export default App;
