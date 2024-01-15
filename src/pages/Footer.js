import "../styles/footer-style.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-con-cer-cv">
        <div className="footer-contacto">
          <h4>CONTACTO:</h4>

          <a
            href="https://wa.me/+51956299119"
            id="whatsapp"
            title="WhatsApp"
            target="_blank"
            rel="noopener noreferrer">
            <i className="fa-brands fa-whatsapp"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/<tu usuario de LinkedIn>"
            id="linkedin"
            title="LinkedIn"
            target="_blank"
            rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a
            href="https://github.com/Chiki975/portafolio-react.git"
            id="github"
            title="GitHub"
            target="_blank"
            rel="noopener noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="mailto:carlosalzamorahuaman@gmail.com"
            id="gmail"
            title="Gmail"
            target="_blank"
            rel="noopener noreferrer">
            <i className="fa-regular fa-envelope"></i>
          </a>
        </div>

        <div className="footer-certificados">
          <h4>CERTIFICADOS:</h4>
        </div>

        <div className="footer-cv">
          <h4>CV:</h4>
        </div>
      </div>

      <div></div>

      <h5>Todos los derechos reservados.</h5>
    </div>
  );
};

export default Footer;
