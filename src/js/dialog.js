import React, { useEffect, useState } from "react";
import "../styles/dialog-style.css";

const Dialogo = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const dialogShown = sessionStorage.getItem("dialogShown");

    if (!dialogShown) {
      setIsOpen(true);
      sessionStorage.setItem("dialogShown", "true");
    }
  }, []);

  const handleClick = () => {
    setIsOpen(false);
  };

  return (
    isOpen && (
      <>
        <div className="overlay"></div>
        <dialog open className="dialog-ms">
          <p>
            Visita mi repositorio para mencionar los errores encontrados. Tu
            ayuda me perfeccionará como profesional y persona. Gracias por tu
            visita 😊.
          </p>

          <button onClick={handleClick}>ACEPTAR</button>
        </dialog>
      </>
    )
  );
};

export default Dialogo;
