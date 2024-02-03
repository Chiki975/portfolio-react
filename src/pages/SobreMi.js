import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import CalcularCiclo from "../js/calcularCiclo.js";
import "../styles/sobreMi-style.css";

const SobreMi = () => {
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const checkHeight = () => {
      setHeight(window.innerHeight);
    };

    const intervalId = setInterval(checkHeight, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const containerStyle = {
    height: height > 1101 ? "100vh" : "100%",
  };

  return (
    <div>
      <Helmet>
        <title>Sobre Mí</title>
      </Helmet>
      <div id="sobreMi-container" style={containerStyle}>
        <div className="sobreMi">
          <div>
            <h2>SOBRE MÍ</h2>

            <div className="sobreMi-content">
              <fieldset className="cualidadesAptitudes">
                <legend>
                  <h3>CUALIDADES Y APTITUDES</h3>
                </legend>

                <div>
                  <ul>
                    <li>Creactividad</li>
                    <li>Productividad</li>
                    <li>Empatia</li>
                    <li>Respeto</li>
                    <li>Paciencia</li>
                    <li>Organización</li>
                    <li>Humildad</li>
                    <li>Escucha activa</li>
                    <li>Disciplina</li>
                  </ul>
                </div>
              </fieldset>

              <fieldset className="sobreMi-descripcion">
                <legend>
                  <h3>DESCRIPCIÓN</h3>
                </legend>

                <p>
                  Soy un estudiante de la carrera Ingeniería de Sistemas e
                  Informática <CalcularCiclo /> con habilidades básicas en HTML,
                  CSS, JavaScript, React y Java. Mi objetivo es aprender más
                  sobre el desarrollo web y las aplicaciones de escritorio. Me
                  apasiona la informática y busco la excelencia académica.
                </p>
              </fieldset>

              <fieldset className="sobreMi-hobbies">
                <legend>
                  <h3>HOBBIES</h3>
                </legend>
                <ul>
                  <li>Novelas Ligeras</li>
                  <li>Manga</li>
                  <li>Anime</li>
                  <li>Programar</li>
                  <li>Escuchar música</li>
                  <li>Series</li>
                  <li>Investigar</li>
                  <li>Ejercicio</li>
                </ul>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SobreMi;
