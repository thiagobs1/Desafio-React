import React from "react";
import ReactDOM from "react-dom";
import "./global.css";
import "./Utils.css";
import { Header } from "./pages/header/Header";
import { Footer } from "./pages/footer/Footer";
import { Main } from "./pages/main/Main";

ReactDOM.render(
  <React.StrictMode>
    <div className="wrapper">
      <Header />,
      <Main />,
      <div className="footer">
        <Footer />
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
