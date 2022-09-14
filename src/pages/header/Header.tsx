import React, { useState } from "react";
import "./Header.css";
import m3logo from "../../images/m3-logo.png";
import carrinho from "../../images/carrinho.png";
import lupa from "../../images/lupa.png";
import menu from "../../images/menu.png";

const Header = () => {
  const [HeaderIsOpened, setHeaderIsOpened] = useState(false);
  return (
    <div>
      <div className="header">
        <div className="header-content">
          <img src={m3logo} alt="Logo da m3" />
          <div className="header-input">
            <a>
              <img id="img" className="header-lupa" src={lupa} alt="lupa" />
            </a>
            <input type="search" placeholder="Buscar..." />
          </div>
          <div className="header-content-infos">
            <h4>ENTRAR</h4>
            <img src={carrinho} alt="carrinho de compras" />
          </div>
        </div>
        <div className="header-complements">
          <a href="#">
            <h4>CURSOS</h4>
          </a>
          <a href="#">
            <h4>SAIBA MAIS</h4>
          </a>
        </div>
      </div>

      <div className="header-mobile">
        <div className="header-mobile-infos">
          <button onClick={() => setHeaderIsOpened(!HeaderIsOpened)}>
            <img src={menu} alt="menu" />
          </button>
          <img src={m3logo} alt="logo da m3" />
          <img src={carrinho} alt="carrinho" />
        </div>
        <div className="header-mobile-search">
          <input type="search" />
          <img className="lupa" src={lupa} alt="lupa" />
        </div>
        <div className="header-mobile-menu">
          <div
            className={` header-mobile-show ${HeaderIsOpened && "opened-menu"}`}
          >
            <div className="header-mobile-complement">
              <a href="#">
                <h4>CURSOS</h4>
              </a>
              <a href="#">
                <h4>SAIBA MAIS</h4>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Header };
