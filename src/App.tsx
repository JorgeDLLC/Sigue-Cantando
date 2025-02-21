import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./components/navbar";
import Basiconas from "./sections/Basiconas";
import Atrevidas from "./sections/Atrevidas";
import ContraMujeres from "./sections/ContrapuntoMujeres";
import ContraHombres from "./sections/ContrapuntoHombres";

import "./App.css";

function App() {
  document.title = "Coplas Carnaval";
  return (
    <div className="App">
      <div className="Navbar">
        <Navbar />
      </div>
      <div className="Page">
        <section id="coplas-basiconas" className="CoplasBasiconas">
          <Basiconas />
        </section>
        <section id="coplas-atrevidas" className="CoplasAtrevidas">
          <Atrevidas />
        </section>
        <section id="contrapuntos-mujeres" className="ContrapuntoMujeres">
          <ContraMujeres />
        </section>
        <section id="contrapuntos-hombres" className="ContrapuntoHombres">
          <ContraHombres />
        </section>
      </div>
    </div>
  );
}

export default App;
