import { Helmet } from "react-helmet";
import excel from "../pdf/Excel.pdf";

const Certificados = () => {
  return (
    <div>
      <Helmet>
        <title>Certificados</title>
      </Helmet>

      <div className="cv-container">
      <select name="" id="" className="">
        <option value="">Excel</option>
        <option value="">CSS</option>
        <option value="">JS</option>
        <option value="">PHP</option>
        <option value="">PYTHON</option>
      </select>

        <iframe src={excel}></iframe>
      </div>
    </div>
  );
};

export default Certificados;
