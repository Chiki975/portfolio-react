import { Helmet } from "react-helmet";
import "../styles/certificados-style.css";
import Excel from "./pdf/Excel.pdf";
import Ingles from "./pdf/Ingles.pdf";
import Soporte from "./pdf/Soporte.pdf";
import React, { useEffect } from "react";

const Lenguajes = () => {
  const options = ["Excel", "Ingles", "Soporte"];
  const [selectedOption, setSelectedOption] = React.useState(
    options[Math.floor(Math.random() * options.length)]
  );

  useEffect(() => {
    document.getElementById("frame").scrollIntoView();
  }, [selectedOption]);

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
      iframeSrc = Soporte;
  }

  return (
    <div>
      <Helmet>
        <title>Certificados</title>
      </Helmet>
      <div className="certificados-content">
        <h2>CERTIFICADOS</h2>

        <select name="idioma" id="" required onChange={handleSelectChange}>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <br />
        {iframeSrc && <iframe src={iframeSrc} id="frame"></iframe>}
      </div>
    </div>
  );
};

export default Lenguajes;
