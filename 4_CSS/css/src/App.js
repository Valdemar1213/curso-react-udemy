import "./App.css";
import MyComponent from "./components/MyComponent";
import { useState } from "react";
import Title from "./components/Title";

function App() {
  const n = 15;
  const [name] = useState("Valdemar");

  const redTitle = false;

  return (
    <div className="App">
      {/* CSS Global */}
      <h1>React com CSS</h1>
      {/* CSS de componente */}
      <MyComponent />
      <p>Este parágrafo é do App.js</p>
      {/* Inline CSS */}
      <p style={{ color: "blue", padding: "25px", borderTop: "2px solid red" }}>
        Este elemente foi estilizado de forma inline.
      </p>
      {/* Inline dinâmico CSS */}
      <h2 style={n < 10 ? { color: "purple" } : { color: "pink" }}>
        CSS Dinâmico
      </h2>
      <h2 style={n > 10 ? { color: "purple" } : { color: "pink" }}>
        CSS Dinâmico
      </h2>
      <h2
        style={
          name === "Valdemar"
            ? { color: "orangered", backgroundColor: "#000" }
            : null
        }
      >
        Teste nome
      </h2>
      {/* Classes dinâmicas CSS */}
      <h2 className={redTitle ? "red-title" : "title"}>
        Este título vai ter classe dinâmica
      </h2>
      {/* CSS Modules */}
      <Title />
      <h2 className="my_title">Testando</h2>
    </div>
  );
}

export default App;
