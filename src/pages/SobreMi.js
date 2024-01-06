import React from "react";
import { Helmet } from "react-helmet";
import CalcularCiclo from "../js/calcularCiclo.js";
import "../styles/sobreMi-style.css";

const SobreMi = () => {
  return (
    <div>
      <Helmet>
        <title>Sobre Mí</title>
      </Helmet>
      <div className="sobreMi">
        <h2>SOBRE MÍ</h2>

        <div className="sobreMi-container">
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
              Soy un estudiante de Ingeniería de Sistemas e Informática.{" "}
              <CalcularCiclo /> Poseo habilidades básicas en HTML, CSS,
              JavaScript, React y Java. Mi meta es profundizar mis conocimientos
              en el desarrollo de sitios web, aplicaciones web y aplicaciones de
              escritorio. Estoy firmemente comprometido con la excelencia
              académica y siempre estoy en la búsqueda de nuevas tecnologías. Me
              emocionan las oportunidades que ofrece la informática y confío en
              que mi formación y pasión por este campo me guiarán hacia el
              éxito.
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
            </ul>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default SobreMi;
