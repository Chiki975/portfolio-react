import { Helmet } from "react-helmet";
import "../styles/certificados-style.css";
import Excel from "./pdf/Excel.pdf";
import Ingles from "./pdf/Ingles.pdf";
import Soporte from "./pdf/Soporte.pdf";
import React from "react";

const Lenguajes = () => {
  const [selectedOption, setSelectedOption] = React.useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  let iframeSrc;
  switch (selectedOption) {
    case "Excel":
      iframeSrc = Excel;
      break;
    case "Ingles":
      iframeSrc = Ingles;
      break;
    case "Soporte":
      iframeSrc = Soporte;
      break;
    default:
      iframeSrc = "";
  }

  return (
    <div>
      <Helmet>
        <title>Certificados</title>
      </Helmet>
      <div className="certificados-container">
        <div className="certificados-content">
          <h2>CERTIFICADOS</h2>

          <select name="idioma" id="" required onChange={handleSelectChange}>
            <option value="">Elige una opción</option>
            <option value="Excel">Excel</option>
            <option value="Ingles">Inglés</option>
            <option value="Soporte">Soporte</option>
          </select>
          <br />
          {iframeSrc && <iframe src={iframeSrc}></iframe>}
        </div>
      </div>
    </div>
  );
};

export default Lenguajes;
