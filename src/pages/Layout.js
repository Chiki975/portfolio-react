import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import useHeaderVisibility from "../js/useHeaderVisibility.js";
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

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (!isHeaderVisible) {
      setIsOpen(false);
    }
  }, [isHeaderVisible]);

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
                <a>
                  <i className="fa-solid fa-file">
                    <span>&#160;CV</span>
                  </i>
                </a>
              </li>

              <li>
                <a>
                  <i className="fa-solid fa-certificate">
                    <span>&#160;Certificados</span>
                  </i>
                </a>
              </li>

              <li>
                <a href="#contacto">
                  <i className="fa-solid fa-address-book">
                    <span>&#160;Contacto</span>
                  </i>
                </a>
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
                <Link to="/" onClick={handleLinkClick}>
                  <i className="fa-solid fa-house">
                    <span>&#160;Inicio</span>
                  </i>
                </Link>
              </li>

              <li>
                <Link to="/SobreMi" onClick={handleLinkClick}>
                  <i className="fa-solid fa-user">
                    <span>&#160;Sobre&#160;Mí</span>
                  </i>
                </Link>
              </li>

              <li>
                <Link to="/Lenguajes" onClick={handleLinkClick}>
                  <i className="fa-solid fa-code">
                    <span>&#160;Lenguajes</span>
                  </i>
                </Link>
              </li>

              <li>
                <a>
                  <i className="fa-solid fa-file">
                    <span>&#160;CV</span>
                  </i>
                </a>
              </li>

              <li>
                <a>
                  <i className="fa-solid fa-certificate">
                    <span>&#160;Certificados</span>
                  </i>
                </a>
              </li>

              <li>
                <a href="#contacto">
                  <i className="fa-solid fa-address-book">
                    <span>&#160;Contacto</span>
                  </i>
                </a>
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
