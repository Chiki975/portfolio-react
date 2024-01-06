import { Helmet } from "react-helmet";
import CalcularCiclo from "../js/calcularCiclo.js";
import CalcularEdad from "../js/calcularEdad.js";
import perfil from "../img/perfil.png";
import "../styles/inicio-style.css";

const Inicio = () => {
  return (
    <div>
      <Helmet>
        <tiFtle>Portafolio</tiFtle>
      </Helmet>
      <div className="inicio-div">
        <main className="presentacion-div">
          <h1>PORTAFOLIO</h1>
          <hr id="presenta-hr"/>
          <p>
            Este portafolio destaca los conocimientos y los logros
            que se van obteniendo a lo largo de mi trayectoria profesional y
            personal.😉😉😊😊
          </p>
        </main>

        <div className="cartilla-div">
          <h2>TARJETA</h2>
          <div>
            <figure className="cartilla-div-img">
              <img src={perfil} alt="perfil.jpeg" title="Perfil" />
            </figure>

            <ul className="cartilla-description">
              <li>
                <b>&#160;NOMBRE:&#160;</b>Carlos Daniel
              </li>
              <li>
                <b>&#160;APELLIDO:&#160;</b>Alzamora Huamán
              </li>
              <CalcularEdad />
              <li>
                <b>&#160;CARRERA:&#160;</b>Ingeniería de Sistemas e Informática
              </li>
              <li>
                <b>&#160;UNIVERSIDAD:&#160;</b>Universidad Tecnológica del Perú
              </li>
              <li>
                <b>&#160;CICLO:&#160;</b>
                <CalcularCiclo soloNumero={true} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inicio;