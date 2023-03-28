import { useState } from "react";

const ListRender = () => {
  const [list] = useState([
    "Valdemar",
    "Pedro",
    "Fernanda",
    "Fernando",
    "Genilda",
  ]);

  const [users, setUsers] = useState([
    { id: 1, name: "Valdemar", age: 35 },
    { id: 2, name: "Pedro", age: 37 },
    { id: 3, name: "Fernanda", age: 30 },
  ]);

  const deteteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);

    setUsers((prevUsers) => {
      return prevUsers.filter((user) => randomNumber !== user.id);
    });
  };

  return (
    <div>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>
      <button onClick={deteteRandom}>Delete random user</button>
    </div>
  );
};

export default ListRender;
