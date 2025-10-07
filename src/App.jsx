import { useState } from "react";
import Home from "./pages/Home";
import Tarjeta from "./pages/Tarjeta";
import "./App.css";

function App() {
  const [mostrarTarjeta, setMostrarTarjeta] = useState(false);
  const [datosUsuario, setDatosUsuario] = useState(null);

  const manejarEnvioFormulario = (datos) => {
    setDatosUsuario(datos);
    setMostrarTarjeta(true);
  };

  const volverInicio = () => {
    setMostrarTarjeta(false);
    setDatosUsuario(null);
  };

  return (
    <div className="App">
      {!mostrarTarjeta ? (
        <Home onSubmit={manejarEnvioFormulario} />
      ) : (
        <Tarjeta datos={datosUsuario} onVolver={volverInicio} />
      )}
    </div>
  );
}

export default App;
