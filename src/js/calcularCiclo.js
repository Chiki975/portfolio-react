import React, { useEffect, useState } from "react";

const CalcularCiclo = ({ soloNumero = false }) => {
  const fechaInicioCiclos = new Date("2021-03-27");
  const [ciclo, setCiclo] = useState("");

  useEffect(() => {
    const calcularCiclo = () => {
      const fechaActual = new Date();

      let diferencia = Math.floor(
        (fechaActual - fechaInicioCiclos) / (1000 * 60 * 60 * 24 * 7)
      );

      let cicloActual = Math.floor(diferencia / 20);

      if (
        (fechaActual.getMonth() === 2 && fechaActual.getDate() >= 24) ||
        fechaActual.getMonth() === 11
      ) {
        if (diferencia % 20 >= 18) {
          cicloActual++;
        }
      }

      if (cicloActual > 10) {
        setCiclo(soloNumero ? "" : "Carrera terminada");
      } else {
        setCiclo(
          soloNumero
            ? cicloActual.toString()
            : "cursando el " + cicloActual + "° ciclo"
        );
      }
    };

    calcularCiclo();

    const intervalId = setInterval(calcularCiclo, 86400000);

    return () => clearInterval(intervalId);
  }, [fechaInicioCiclos, soloNumero]);

  return <span>{ciclo}</span>;
};

export default CalcularCiclo;
