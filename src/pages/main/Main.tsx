import React, { useState } from "react";
import "./Main.css";
import home from "../../images/home.png";
import { FcForm } from "../../components/Form";
import whatsapp from "../../images/whatsapp.png";
import backTop from "../../images/backTop.png";

const Main = () => {
  const [sobre, setSobre] = useState(true);
  const [Fp, setFp] = useState(false);
  const [entrega, setEntrega] = useState(false);
  const [Td, setTd] = useState(false);
  const [Sp, setSp] = useState(false);
  const [contato, setContato] = useState(false);
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled < 50) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  function toggleSobre() {
    setSobre(true);
    setFp(false);
    setEntrega(false);
    setTd(false);
    setSp(false);
    setContato(false);
  }

  function toggleFp() {
    setSobre(false);
    setFp(true);
    setEntrega(false);
    setTd(false);
    setSp(false);
    setContato(false);
  }

  function toggleEntrega() {
    setSobre(false);
    setFp(false);
    setEntrega(true);
    setTd(false);
    setSp(false);
    setContato(false);
  }

  function toggleTd() {
    setSobre(false);
    setFp(false);
    setEntrega(false);
    setTd(true);
    setSp(false);
    setContato(false);
  }

  function toggleSp() {
    setSobre(false);
    setFp(false);
    setEntrega(false);
    setTd(true);
    setSp(false);
    setContato(false);
  }

  function toggleContato() {
    setSobre(false);
    setFp(false);
    setEntrega(false);
    setTd(false);
    setSp(false);
    setContato(true);
  }

  window.addEventListener("scroll", toggleVisible);

  return (
    <div className="main-wrapper">
      <img className="institucional-image" src={home} alt="institucional" />
      <h1 className="institucional-text">INSTITUCIONAL</h1>

      <div className="main-content">
        <div className="main-buttons">
          <button
            className={`main-content-button ${sobre ? "active" : ""}`}
            onClick={toggleSobre}
          >
            Sobre
          </button>
          <button
            className={`main-content-button ${Fp ? "active" : ""}`}
            onClick={toggleFp}
          >
            Forma de pagamento
          </button>
          <button
            className={`main-content-button ${entrega ? "active" : ""}`}
            onClick={toggleEntrega}
          >
            Entrega
          </button>
          <button
            className={`main-content-button ${Td ? "active" : ""}`}
            onClick={toggleTd}
          >
            Troca e Devolução
          </button>
          <button
            className={`main-content-button ${Sp ? "active" : ""}`}
            onClick={toggleSp}
          >
            Segurança e Privacidade
          </button>
          <button
            className={`main-content-button ${contato ? "active" : ""}`}
            onClick={toggleContato}
          >
            Contato
          </button>
        </div>

        <div className="content">
          <div className={sobre ? "opened" : "closed"}>
            <h1 className="title-pages">Sobre</h1>
            <p className="infos-pages">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="infos-pages">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem.
            </p>
            <p className="infos-pages">
              Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
              consequatur? Quis autem vel eum iure reprehenderit qui in ea
              voluptate velit esse quam nihil molestiae consequatur, vel illum
              qui dolorem eum fugiat quo voluptas nulla pariatur?
            </p>
          </div>

          <div className={Fp ? "opened" : "closed"}>
            <h1 className="title-pages">Formas de Pagamento</h1>
            <p className="infos-pages">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="infos-pages">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem.
            </p>
            <p className="infos-pages">
              Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
              consequatur? Quis autem vel eum iure reprehenderit qui in ea
              voluptate velit esse quam nihil molestiae consequatur, vel illum
              qui dolorem eum fugiat quo voluptas nulla pariatur?
            </p>
          </div>

          <div className={entrega ? "opened" : "closed"}>
            <h1 className="title-pages">Entrega</h1>
            <p className="infos-pages">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="infos-pages">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem.
            </p>
            <p className="infos-pages">
              Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
              consequatur? Quis autem vel eum iure reprehenderit qui in ea
              voluptate velit esse quam nihil molestiae consequatur, vel illum
              qui dolorem eum fugiat quo voluptas nulla pariatur?
            </p>
          </div>

          <div className={Td ? "opened" : "closed"}>
            <h1 className="title-pages">Troca e Devolução</h1>
            <p className="infos-pages">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="infos-pages">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem.
            </p>
            <p className="infos-pages">
              Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
              consequatur? Quis autem vel eum iure reprehenderit qui in ea
              voluptate velit esse quam nihil molestiae consequatur, vel illum
              qui dolorem eum fugiat quo voluptas nulla pariatur?
            </p>
          </div>

          <div className={Sp ? "opened" : "closed"}>
            <h1 className="title-pages">Segurança e Privacidade</h1>
            <p className="infos-pages">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="infos-pages">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem.
            </p>
            <p className="infos-pages">
              Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
              consequatur? Quis autem vel eum iure reprehenderit qui in ea
              voluptate velit esse quam nihil molestiae consequatur, vel illum
              qui dolorem eum fugiat quo voluptas nulla pariatur?
            </p>
          </div>

          <div className={contato ? "c-opened" : "closed"}>
            <h1 className="title-pages">PREENCHA O FORMULÁRIO</h1>
            <FcForm />
          </div>
        </div>
      </div>
      <button className="buttons-page w-button">
        <a href="">
          <img src={whatsapp} alt="whatsapp" />
        </a>
      </button>
      <button
        onClick={scrollToTop}
        className={`buttons-page bt-button ${visible ? "valid" : ""}`}
      >
        <img src={backTop} alt="retorn ao topo" />
      </button>
    </div>
  );
};

export { Main };
