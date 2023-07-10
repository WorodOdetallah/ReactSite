import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import { Router, Routes, Route, BrowserRouter, Link } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import img from "./images/5356572.jpg";
import AddProduct from "./addP";
import Welcome from "./welcomePage";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div
    className="wrap"
    style={{ backgroundImage: `url(${img})`, backgroundRepeat: "no-repeat" }}
  >
    <Header />
    <BrowserRouter>
      <ul className="list_link">
        <li>
          <Link className="btn btn-primary" to="/welcomePage">
            Home
          </Link>
        </li>
        <li>
          <Link className="btn btn-primary" to="/App">
            Products
          </Link>
        </li>
        <li>
          <Link className="btn btn-primary" to="/AddP">
            Add Page
          </Link>
        </li>
      </ul>
      <Routes>
        <Route exact path="*" element={<Welcome />}></Route>
        <Route exact path="/App" element={<App />}></Route>
        <Route exact path="/Addp" element={<AddProduct />}></Route>
      </Routes>
    </BrowserRouter>
    <Footer />
  </div>
);
