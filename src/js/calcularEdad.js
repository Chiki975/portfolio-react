import React, { useEffect, useState } from "react";

const CalcularEdad = () => {
  const fechaNacimiento = new Date("2002-06-19");

  const [edad, setEdad] = useState(0);

  useEffect(() => {
    const calcularEdad = () => {
      const fechaActual = new Date();

      const diferencia =
        fechaActual.getFullYear() - fechaNacimiento.getFullYear();

      if (
        fechaActual.getMonth() < fechaNacimiento.getMonth() ||
        (fechaActual.getMonth() === fechaNacimiento.getMonth() &&
          fechaActual.getDate() < fechaNacimiento.getDate())
      ) {
        setEdad(diferencia - 1);
      } else {
        setEdad(diferencia);
      }
    };

    calcularEdad();

    const intervalId = setInterval(calcularEdad, 86400000);

    return () => clearInterval(intervalId);
  }, [fechaNacimiento]);

  return (
    <li>
      <b>&#160;EDAD: </b>
      {edad} años
    </li>
  );
};

export default CalcularEdad;