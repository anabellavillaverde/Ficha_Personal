import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Tarjeta from "./pages/Tarjeta";

function App() {
  return (
    <div>
      <nav style={{ marginBottom: "1rem" }}>
        <Link to="/">Home</Link> |{" "}
        <Link to="/tarjeta">Formulario</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tarjeta" element={<Tarjeta />} />
      </Routes>
    </div>
  );
}

export default App;
