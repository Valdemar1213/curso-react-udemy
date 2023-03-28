import { useState } from "react";

const ConditionalRender = () => {
  const [x] = useState(false);

  const [name, setName] = useState("Pedro");

  return (
    <div>
      <h1>Isso sera exibido ?</h1>
      {x && <p>Se x for true, sim!</p>}
      {!x && <p>Agora x é falso!</p>}
      <h1>If ternário</h1>
      {name === "Valdemar" ? (
        <div>
          <p>O nome é Valdemar</p>
        </div>
      ) : (
        <div>
          <p>Nome não encontrado!</p>
        </div>
      )}
      <button onClick={() => setName("Valdemar")}>Clica aqui</button>
    </div>
  );
};

export default ConditionalRender;
