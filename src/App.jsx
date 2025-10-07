import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Tarjeta from "./pages/Tarjeta";

function App() {
  return (
    <div>
      <nav
        style={{
          backgroundColor: "#444", 
          padding: "10px 20px",
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
        }}
      >
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Home
        </Link>
        <Link
          to="/tarjeta"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Tarjeta
        </Link>
      </nav>

      <div style={{ marginTop: "70px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tarjeta" element={<Tarjeta />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
