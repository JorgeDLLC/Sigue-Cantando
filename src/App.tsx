import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./components/navbar";
import Basiconas from "./sections/Basiconas";
import Atrevidas from "./sections/Atrevidas";
import ContraMujeres from "./sections/ContrapuntoMujeres";
import ContraHombres from "./sections/ContrapuntoHombres";
import "./App.css";

function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2324681488363907";
    script.async = true;
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script); // Limpia el script al desmontar el componente
    };
  }, []);

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
