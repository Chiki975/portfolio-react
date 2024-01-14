import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Inicio from "./pages/Inicio";
import SobreMi from "./pages/SobreMi";
import Lenguajes from "./pages/Lenguajes";
import Contacto from "./pages/Contacto";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Inicio />}></Route>
          <Route path="SobreMi" element={<SobreMi />}></Route>
          <Route path="Lenguajes" element={<Lenguajes />}></Route>
          <Route path="Contacto" element={<Contacto />}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
