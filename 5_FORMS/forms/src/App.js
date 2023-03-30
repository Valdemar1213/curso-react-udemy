import "./App.css";
import MyForm from "./components/MyForm";

function App() {
  return (
    <div className="App">
      <h1>Fomulários no React</h1>
      <MyForm
        user={{
          name: "Valdemar",
          email: "valdemar12tw@gmail.com",
          bio: "Sou um advogado",
          role: "admin",
        }}
      />
    </div>
  );
}

export default App;
