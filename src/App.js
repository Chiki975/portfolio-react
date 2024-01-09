import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Inicio from "./pages/Inicio";
import SobreMi from "./pages/SobreMi";
import Lenguajes from "./pages/Lenguajes";
import Certificados from "./pages/Certificados";
import Cv from "./pages/Cv";
import Contacto from "./pages/Contacto";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Inicio />}></Route>
          <Route path="SobreMi" element={<SobreMi />}></Route>
          <Route path="Lenguajes" element={<Lenguajes />}></Route>
          <Route path="Certificados" element={<Certificados />}></Route>
          <Route path="Cv" element={<Cv />}></Route>
          <Route path="Contacto" element={<Contacto />}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
