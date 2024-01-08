import { Helmet } from "react-helmet";
import "../styles/lenguajes-style.css";
import html from "../img/html.png";
import java from "../img/java.png";
import react from "../img/react.png";
import sqlServer from "../img/sqlServer.png";
import css from "../img/css.png";
import js from "../img/js.png";
import mySql from "../img/mySql.png";

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
              <figure>
                <img src={html} alt="html.png" title="HTML" />
              </figure>

              <div>
                <p>
                  <b>NIVEL:</b> Basico
                </p>
                <p>
                  <b>PROYECTO:</b> Presente portafolio
                </p>
              </div>
            </fieldset>

            <fieldset>
              <legend>CSS</legend>
              <figure>
                <img src={css} alt="css.png" title="HTML" />
              </figure>

              <div>
                <p>
                  <b>NIVEL:</b> Basico
                </p>
                <p>
                  <b>PROYECTO:</b> Presente portafolio
                </p>
              </div>
            </fieldset>

            <fieldset>
              <legend>JS</legend>
              <figure>
                <img src={js} alt="js.png" title="JS" />
              </figure>

              <div>
                <p>
                  <b>NIVEL:</b> Basico
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

              <div>
                <p>
                  <b>NIVEL:</b> Basico
                </p>
                <p>
                  <b>PROYECTO:</b> Proximamente..
                </p>
              </div>
            </fieldset>

            <fieldset>
              <legend>REACT</legend>
              <figure>
                <img src={react} alt="ract.png" title="REACT" />
              </figure>

              <div>
                <p>
                  <b>NIVEL:</b> Basico
                </p>
                <p>
                  <b>PROYECTO:</b> Proximamente...
                </p>
              </div>
            </fieldset>

            <fieldset>
              <legend>MYSQL</legend>
              <figure>
                <img src={mySql} alt="ract.png" title="MySQL" />
              </figure>

              <div>
                <p>
                  <b>NIVEL:</b> Basico
                </p>
                <p>
                  <b>PROYECTO:</b> Proximamente...
                </p>
              </div>
            </fieldset>

            <fieldset>
              <legend>SQLSERVER</legend>
              <figure>
                <img src={sqlServer} alt="sqlServer.png" title="sqlServer" />
              </figure>

              <div>
                <p>
                  <b>NIVEL:</b> Basico
                </p>
                <p>
                  <b>PROYECTO:</b> Proximamente...
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
