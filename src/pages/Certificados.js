import React from 'react';
import { Helmet } from 'react-helmet';
import excel from "../pdf/Excel.pdf";
import ingles from "../pdf/Ingles.pdf";
import soporte from "../pdf/Soporte.pdf";

const Certificados = () => {
  return (
    <div>
      <Helmet>
        <title>Certificados</title>
      </Helmet>
      <div>Certificados</div>
      <iframe src={excel}></iframe>
    </div>
  );
};

export default Certificados;