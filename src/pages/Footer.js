const Footer = () => {
  return (
    <div>
      <div>
        <div className="redes">
          <a
            href="https://wa.me/<tu número de WhatsApp>"
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
      </div>
    </div>
  );
};

export default Footer;