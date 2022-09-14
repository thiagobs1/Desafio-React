import React, { useState } from "react";
import "./Footer-newsletter.css";
import "./Footer-links.css";
import facebook from "../../images/Facebook-logo.png";
import twitter from "../../images/Twitter-logo.png";
import youtube from "../../images/yotube-logo.png";
import instagram from "../../images/instagram-logo.png";
import linkedin from "../../images/Linkedin-logo.png";
import plus from "../../images/plus.png";
import { FooterEnd } from "./Footer-end";

const Footer = () => {
  const [instIsOpened, setInsIsOpened] = useState(false);
  const [duvIsOpned, setDuvIsOpened] = useState(false);
  const [fcIsOpened, setFcIsOpened] = useState(false);

  return (
    <div>
      <div className="footer-newsletter">
        <h2>ASSINE NOSSA NEWSLETTER</h2>
        <form className="footer-form">
          <input placeholder="Email" type="text" />
          <button type="submit">Enviar</button>
        </form>
      </div>
      <div className="footer-newsletter-mobile">
        <form className="footer-form-mobile">
          <h2>ASSINE NOSSA NEWSLETTER</h2>
          <input placeholder="Email" type="text" />
          <button type="submit">Enviar</button>
        </form>
      </div>

      <div className="footer-links-wrapper">
        <div className="footer-links">
          <div className="footer-links-content">
            <h2>INSTITUCIONAL</h2>
            <div className="links">
              <a href="">Quem somos</a>
              <a href="">Políticas de privacidade</a>
              <a href="">Segurança</a>
              <a className="diferent-a" href="">
                Seja um revendedor
              </a>
            </div>
          </div>

          <div className="footer-links-content">
            <h2>DÚVIDAS</h2>
            <div className="links">
              <a href="">Entrega</a>
              <a href="">Pagamento</a>
              <a href="">Trocas e Devolução</a>
              <a href="">Dúvidas frequentes</a>
            </div>
          </div>

          <div className="footer-links-content">
            <h2>FALE CONOSCO</h2>
            <p className="strong-p">Atendimento ao consumidor</p>
            <p className="weak-p">(11) 4159 9504</p>
            <p className="strong-p">Atendimento online</p>
            <p className="weak-p"> (11) 99433-8825</p>
          </div>
        </div>

        <div className="footer-links-contats">
          <a href="">
            <img src={facebook} alt="Faebook logo" />
          </a>
          <a href="">
            <img src={instagram} alt="Instagram logo" />
          </a>
          <a href="">
            <img src={youtube} alt="Youtube logo" />
          </a>
          <a href="">
            <img src={twitter} alt="Twitter logo" />
          </a>
          <a href="">
            <img src={linkedin} alt="Linkedin logo" />
          </a>
          <div>
            <p>www.loremipsum.com</p>
          </div>
        </div>
      </div>

      <div className="footer-links-mobile">
        <button
          className="footer-mobile-button"
          onClick={() => {
            setInsIsOpened(!instIsOpened);
          }}
        >
          INSTITUCIONAL <img src={plus} alt="" />
        </button>
        <div className={`hiddle-content ${instIsOpened && "opened"}`}>
          <div className="links">
            <a href="">Quem somos</a>
            <a href="">Políticas de privacidade</a>
            <a href="">Segurança</a>
            <a className="diferent-a" href="">
              Seja um revendedor
            </a>
          </div>
        </div>

        <div>
          <button
            className="footer-mobile-button"
            onClick={() => setDuvIsOpened(!duvIsOpned)}
          >
            DÚVIDAS
            <img src={plus} alt="" />
          </button>
          <div className={`hiddle-content ${duvIsOpned && "opened"} `}>
            <div className="links">
              <a href="">Entrega</a>
              <a href="">Pagamento</a>
              <a href="">Trocas e Devolução</a>
              <a href="">Dúvidas frequentes</a>
            </div>
          </div>
        </div>

        <div>
          <button
            className="footer-mobile-button"
            onClick={() => setFcIsOpened(!fcIsOpened)}
          >
            FALE CONOSCO <img src={plus} alt="" />
          </button>
          <div className={`hiddle-content ${fcIsOpened && "opened"}`}>
            <div className="footer-links-content">
              <p className="strong-p">Atendimento ao consumidor</p>
              <p className="weak-p">(11) 4159 9504</p>
              <p className="strong-p">Atendimento online</p>
              <p className="weak-p"> (11) 99433-8825</p>
            </div>
          </div>
        </div>

        <div className="footer-links-contats">
          <a href="">
            <img src={facebook} alt="Faebook logo" />
          </a>
          <a href="">
            <img src={instagram} alt="Instagram logo" />
          </a>
          <a href="">
            <img src={youtube} alt="Youtube logo" />
          </a>
          <a href="">
            <img src={twitter} alt="Twitter logo" />
          </a>
          <a href="">
            <img src={linkedin} alt="Linkedin logo" />
          </a>
        </div>
      </div>

      <FooterEnd />
    </div>
  );
};

export { Footer };
