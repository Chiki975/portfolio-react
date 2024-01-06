import React from 'react';
import { Helmet } from 'react-helmet';
import excel from "../pdf/Excel.pdf"

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