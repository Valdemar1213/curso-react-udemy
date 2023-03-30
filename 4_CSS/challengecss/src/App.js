import "./App.css";
import Cars from "./components/Cars";

function App() {
  const myCars = [
    { name: "Gol", km: 85000, color: "Chumbo" },
    { name: "Chevette", km: 800, color: "Vermelho" },
    { name: "Parati", km: 1000000, color: "Branco" },
  ];

  return (
    <div className="App">
      <h1>Carros Pretendidos</h1>
      <div className="car-container">
        {myCars.map((car) => (
          <Cars car={car} />
        ))}
      </div>
    </div>
  );
}

export default App;
