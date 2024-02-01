import React, { useState } from 'react';
import "../styles/footer-style.css";

const Footer = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    if (value) {
      window.open(`/path/to/${value}.pdf`, '_blank');
    }
    // Restablecer el menú desplegable después de 1 segundo
    setTimeout(() => setSelectedOption(''), 1000);
  };

  return (
    <div className="footer-container">
      <div className="footer-con-cer-cv">
        <div className="footer-contacto" id="contacto">
          <h4>CONTACTO:</h4>

          <div className="footer-contacto-link">
            <a
              href="https://www.linkedin.com/in/daniel-alzamora-854a67266"
              title="LinkedIn"
              target="_blank"
              rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin-in" id="linkedin"></i>
               LinkedIn
            </a>
            <a
              href="https://github.com/Chiki975/portfolio-react.git"
              title="GitHub"
              target="_blank"
              rel="noopener noreferrer">
              <i className="fa-brands fa-github" id="github"></i> GitHub
            </a>
            <a
              href="mailto:carlosalzamorahuaman@gmail.com"
              title="Gmail"
              target="_blank"
              rel="noopener noreferrer">
              <i className="fa-regular fa-envelope" id="gmail"></i> Gmail
            </a>
            <a
              href="https://t.me/Chiki738"
              title="Telegram"
              target="_blank"
              rel="noopener noreferrer">
              <i className="fa-brands fa-telegram" id="telegram"></i> Telegram
            </a>
          </div>
        </div>

        <div className="footer-certificados" id="certificado">
          <h4>CERTIFICADOS:</h4>
          <select name="option" value={selectedOption} onChange={handleChange} required>
            <option value="">Elige una opción</option>
            <option value="Excel">Excel</option>
            <option value="Ingles">Ingles</option>
            <option value="Soporte">Soporte</option>
          </select>
        </div>

        <div className="footer-cv" id="cv">
          <h4>CV:</h4>
          <p><a >ABRIR</a> o <a>DESCARGAR</a></p>
        </div>
      </div>

      <h5>Todos los derechos reservados.</h5>
    </div>
  );
};

export default Footer;
