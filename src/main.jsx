import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // تأكد من أن مسار App صحيح
import "./index.css"; // تأكد من أن هذا الملف موجود أيضًا إذا كان يحتوي على تنسيقات CSS
import { BrowserRouter as Router } from "react-router-dom"; // تأكد من أنك تستخدم Router إذا كان لديك عدة صفحات

const root = ReactDOM.createRoot(document.getElementById("root")); // العنصر الذي سيتم ربط React فيه
root.render(
  <Router>
    <App />
  </Router>
);
