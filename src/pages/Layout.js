import { useState } from "react";
import useHeaderVisibility from "../js/useHeaderVisibility.js";
import { Outlet, Link } from "react-router-dom";
import Footer from "../pages/Footer.js";
import Dialogo from "../js/dialog.js";
import Pikachu from "../img/pikachu.png";
import "../styles/layout-style.css";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isHeaderVisible = useHeaderVisibility();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header style={{ top: isHeaderVisible ? "0" : "-100%" }}>
        <div className="navbar">
          <Link to="/" id="layout_navbar-logo" className="navbar-logo">
            <figure>
              <img src={Pikachu} alt="pikachu.png" title="Logo" />
            </figure>

            <h2>CHIKI</h2>
          </Link>

          <nav id="nav-h">
            <ul className="nav_ul">
              <li>
                <Link to="/">
                  <i className="fa-solid fa-house">
                    <span>&#160;Inicio</span>
                  </i>
                </Link>
              </li>

              <li>
                <Link to="/SobreMi">
                  <i className="fa-solid fa-user">
                    <span>&#160;Sobre Mí</span>
                  </i>
                </Link>
              </li>

              <li>
                <Link to="/Lenguajes">
                  <i className="fa-solid fa-code">
                    <span>&#160;Lenguajes</span>
                  </i>
                </Link>
              </li>

              <li>
                <Link to="/Cv">
                  <i className="fa-solid fa-file">
                    <span>&#160;CV</span>
                  </i>
                </Link>
              </li>

              <li className="certificado">
                <details>
                  <summary accesskey="">
                    <i className="fa-solid fa-certificate"></i>
                    &#160;Certificados
                  </summary>
                  <ul>
                    <li>Excel</li>
                    <li>Ingles</li>
                    <li>Soporte</li>
                  </ul>
                </details>
              </li>
              
              <li>
                <Link to="/Contacto">
                  <i className="fa-solid fa-address-book">
                    <span>&#160;Contacto</span>
                  </i>
                </Link>
              </li>
            </ul>
          </nav>

          <div className="toggle_btn" onClick={handleClick}>
            <i
              className={isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
          </div>
        </div>

        <div className={`dropdown_menu ${isOpen ? "open" : ""}`}>
          <nav>
            <ul>
              <li>
                <Link to="/">
                  <i className="fa-solid fa-house">
                    <span>&#160;Inicio</span>
                  </i>
                </Link>
              </li>

              <li>
                <Link to="/SobreMi">
                  <i className="fa-solid fa-user">
                    <span>&#160;Sobre&#160;Mí</span>
                  </i>
                </Link>
              </li>

              <li>
                <Link to="/Lenguajes">
                  <i className="fa-solid fa-code">
                    <span>&#160;Lenguajes</span>
                  </i>
                </Link>
              </li>

              <li>
                <Link to="/Cv">
                  <i className="fa-solid fa-file">
                    <span>&#160;CV</span>
                  </i>
                </Link>
              </li>

              <li>
                <Link to="/Certificados">
                  <i className="fa-solid fa-certificate">
                    <span>&#160;Certificados</span>
                  </i>
                </Link>
              </li>
              <li>
                <Link to="/Contacto">
                  <i className="fa-solid fa-address-book">
                    <span>&#160;Contacto</span>
                  </i>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <Dialogo />

      <Outlet />

      <hr />

      <Footer />
    </div>
  );
};

export default Layout;
