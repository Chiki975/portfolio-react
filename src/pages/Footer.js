import "../styles/footer-style.css";
import cv from "../pages/pdf/Excel.pdf";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-con-cv">
        <div className="footer-contacto" id="contacto">
          <h4>CONTACTO:</h4>

          <div className="footer-contacto-link">
            <a
              href="https://api.whatsapp.com/send?phone=51956299119"
              title="WhatsApp"
              target="_blank"
              rel="noopener noreferrer">
              <i class="fa-brands fa-whatsapp" id="whatsapp"></i> WhatsApp
            </a>

            <a
              href="https://t.me/Chiki738"
              title="Telegram"
              target="_blank"
              rel="noopener noreferrer">
              <i className="fa-brands fa-telegram" id="telegram"></i> Telegram
            </a>

            <a
              href="https://www.linkedin.com/in/chiki738"
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
          </div>
        </div>

        <div className="footer-cv" id="cv">
          <h4>CV:</h4>
          <a href={cv} download>
            <button>Descargar</button>
          </a>
        </div>
      </div>

      <h5>Todos los derechos reservados.</h5>
    </div>
  );
};

export default Footer;
