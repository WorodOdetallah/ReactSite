import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import img from "./images/5356572.jpg";
const root2 = ReactDOM.createRoot(document.getElementById("root3"));
root2.render(
  <div
    className="wrap"
    style={{ backgroundImage: `url(${img})`, backgroundRepeat: "no-repeat" }}
  >
    <Header />
    <App />
    <Footer />
  </div>
);
