import React from "react";
import "./Footer-end.css";
import Master from "../../images/Master.png";
import Elo from "../../images/Elo.png";
import Hiper from "../../images/Hiper.png";
import Visa from "../../images/Visa.png";
import Pagseguro from "../../images/Pagseguro.png";
import Vtex from "../../images/vtex-pci-200.png";
import Diner from "../../images/Diners.png";
import mobileLogo from "../../images/logo-footer.png";
import Boleto from "../../images/Boleto.png";

const FooterEnd = () => {
  return (
    <div>
      <div className="footer-end-wrapper">
        <div>
          <p className="footer-end-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </p>
        </div>

        <div className="footer-end-img">
          <img src={Master} alt="Mastercard" />
          <img src={Visa} alt="Visa" />
          <img src={Diner} alt="Diner" />
          <img src={Elo} alt="" />
          <img src={Hiper} alt="hiper" />
          <img src={Pagseguro} alt="Pagseguro" />
          <img src={Boleto} alt="Boleto" />
          <div></div>
          <img src={Vtex} alt="Vtex" />
        </div>

        <div className="footer-end-logo">
          <img src={mobileLogo} alt="Logo da mobile" />
        </div>
      </div>

      <div className="footer-end-wrapper-mobile">
        <div className="footer-end-img">
          <img src={Master} alt="Mastercard" />
          <img src={Visa} alt="Visa" />
          <img src={Diner} alt="Diner" />
          <img src={Elo} alt="" />
          <img src={Hiper} alt="hiper" />
          <img src={Pagseguro} alt="Pagseguro" />
          <img src={Boleto} alt="Boleto" />
          <div></div>
          <img src={Vtex} alt="Vtex" />
        </div>

        <div>
          <p className="footer-end-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. .
          </p>
        </div>

        <div className="footer-end-logo">
          <img src={mobileLogo} alt="Logo da mobile" />
        </div>
      </div>
    </div>
  );
};

export { FooterEnd };
