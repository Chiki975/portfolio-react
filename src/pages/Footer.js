import "../styles/footer-style.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-con-cer-cv">
        <div className="footer-contacto" id="contacto">
          <h4 >CONTACTO:</h4>

          <div className="footer-contacto-link">
            <a
              href="https://www.linkedin.com/in/daniel-alzamora-854a67266"
              title="LinkedIn"
              target="_blank"
              rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin-in" id="linkedin"></i>&#160;LinkedIn
            </a>
            <a
              href="https://github.com/Chiki975/portafolio-react.git"
              title="GitHub"
              target="_blank"
              rel="noopener noreferrer">
              <i className="fa-brands fa-github" id="github"></i>&#160;GitHub
            </a>
            <a
              href="mailto:carlosalzamorahuaman@gmail.com"
              title="Gmail"
              target="_blank"
              rel="noopener noreferrer">
              <i className="fa-regular fa-envelope" id="gmail"></i>&#160;Gmail
            </a>
            <a
              href="https://wa.me/+51956299119"
              title="WhatsApp"
              target="_blank"
              rel="noopener noreferrer">
              <i className="fa-brands fa-whatsapp" id="whatsapp"></i>&#160;WhatsApp
            </a>
          </div>
        </div>

        <div className="footer-certificados">
          <h4>CERTIFICADOS:</h4>
        </div>

        <div className="footer-cv">
          <h4>CV:</h4>
        </div>
      </div>

      <h5>Todos los derechos reservados.</h5>
    </div>
  );
};

export default Footer;
