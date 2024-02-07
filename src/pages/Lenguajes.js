import { Helmet } from "react-helmet";
import "../styles/lenguajes-style.css";
import html from "../img/html.png";
import java from "../img/java.png";
import react from "../img/react.png";
import sqlServer from "../img/sqlServer.png";
import css from "../img/css.png";
import js from "../img/js.png";
import mySql from "../img/mySql.png";
import sqlServerProject from "../project/bd-sqlServer.zip";

const Lenguajes = () => {
  return (
    <div>
      <Helmet>
        <title>Lenguajes</title>
      </Helmet>
      <div className="lenguajes-container">
        <div>
          <h2>LENGUAJES</h2>

          <div className="lenguajes-tarjetas">
            <fieldset>
              <legend>HTML</legend>
              <p>
                Proyecto creado en el año 2024. Se utilizó este lenguaje para
                estructurar el sitio web, con la ayuda de CSS y JS.
              </p>
              <figure>
                <img src={html} alt="html.png" title="HTML" />
              </figure>

              <div className="lenguajes-content">
                <p>
                  <b>NIVEL:</b> Básico
                </p>
                <p>
                  <b>PROYECTO:</b> Presente portafolio
                </p>
              </div>
            </fieldset>

            <fieldset>
              <legend>CSS</legend>
              <p>
                Proyecto creado en el año 2024. Se utilizó este lenguaje para
                dar estilo a los elementos de HTML.
              </p>
              <figure>
                <img src={css} alt="css.png" title="CSS" />
              </figure>

              <div className="lenguajes-content">
                <p>
                  <b>NIVEL:</b> Básico
                </p>
                <p>
                  <b>PROYECTO:</b> Presente portafolio
                </p>
              </div>
            </fieldset>

            <fieldset>
              <legend>JS</legend>
              <p>
                Proyecto creado en el año 2024. Se utilizó este lenguaje para
                controlar el comportamiento de la página web.
              </p>

              <figure>
                <img src={js} alt="js.png" title="JS" />
              </figure>

              <div className="lenguajes-content">
                <p>
                  <b>NIVEL:</b> Básico
                </p>
                <p>
                  <b>PROYECTO:</b> Presente portafolio
                </p>
              </div>
            </fieldset>

            <fieldset>
              <legend>REACT</legend>
              <p>
                Proyecto creado en el año 2024. Se utilizó esta librería para
                mejorar la eficiencia y eficacia al momento de realizar la
                página web.
              </p>
              <figure>
                <img src={react} alt="ract.png" title="REACT" />
              </figure>

              <div className="lenguajes-content">
                <p>
                  <b>NIVEL:</b> Básico
                </p>
                <p>
                  <b>PROYECTO:</b> Presente portafolio
                </p>
              </div>
            </fieldset>

            <fieldset>
              <legend>JAVA</legend>
              <figure>
                <img src={java} alt="java.png" title="JAVA" />
              </figure>

              <div className="lenguajes-content">
                <p>
                  <b>NIVEL:</b> Básico
                </p>
                <p>
                  <b>PROYECTO:</b> Próximamente...
                </p>
              </div>
            </fieldset>

            <fieldset>
              <legend>MYSQL</legend>
              <figure>
                <img src={mySql} alt="ract.png" title="MySQL" />
              </figure>

              <div className="lenguajes-content">
                <p>
                  <b>NIVEL:</b> Básico
                </p>
                <p>
                  <b>PROYECTO:</b> Próximamente...
                </p>
              </div>
            </fieldset>

            <fieldset>
              <legend>SQLSERVER</legend>
              <p>
                Proyecto realizado en el año 2022. Se trata de un observatorio
                donde se encuentran datos sobre distintas denuncias hechas en
                Perú. Cabe recalcar que todos los datos de las denuncias son
                inventados.
              </p>
              <figure>
                <img src={sqlServer} alt="sqlServer.png" title="sqlServer" />
              </figure>

              <div className="lenguajes-content">
                <p>
                  <b>NIVEL:</b> Básico
                </p>
                <p>
                  <b>PROYECTO:</b>
                  <a href={sqlServerProject} download>
                    &#160;Descargar
                  </a>
                </p>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lenguajes;
