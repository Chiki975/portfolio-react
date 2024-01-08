import { Helmet } from "react-helmet";
import "../styles/cv-style.css";
import excel from "../pdf/Excel.pdf";

const Cv = () => {
  return (
    <div>
      <Helmet>
        <title>Cv</title>
      </Helmet>
      <div className="cv-container">
      <iframe src={excel}></iframe>
      </div>
    </div>
  );
};

export default Cv;
