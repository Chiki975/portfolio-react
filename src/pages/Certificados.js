import { Helmet } from "react-helmet";
import excel from "../pdf/Excel.pdf";

const Certificados = () => {
  return (
    <div>
      <Helmet>
        <title>Certificados</title>
      </Helmet>

      <select name="" id="">
        <option value="">HTML</option>
        <option value="">CSS</option>
        <option value="">JS</option>
        <option value="">PHP</option>
        <option value="">PYTHON</option>
      </select>

      <div className="cv-container">
        <iframe src={excel}></iframe>
      </div>
    </div>
  );
};

export default Certificados;
